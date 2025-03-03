// app/blog/[slug]/page.tsx

import React from "react";
import ArticleTemplate from "../../../components/ArticleTemplate";
import { Metadata } from "next";

// Type pour les données de l'article
type Article = {
	id: number;
	title: string;
	content: string;
	slug: string;
	categories?: {
		id: number;
		nom: string;
		slug: string;
	}[];
	image?: {
		formats: {
			large: {
				url: string;
			};
			small: {
				url: string;
			};
			medium: {
				url: string;
			};
			thumbnail: {
				url: string;
			};
		};
		url: string;
	};
	createdAt: string;
	updatedAt: string;
	publishedAt: string | null;
};

// Générer les chemins statiques
export async function generateStaticParams() {
	// Récupérer la liste des articles depuis l'API
	const res = await fetch(
		"http://localhost:1337/api/articles?populate=categories&populate=image"
	);
	const articles = await res.json();
	if (!articles.data || !Array.isArray(articles.data)) {
		throw new Error(
			"La réponse de l'API ne contient pas un tableau de données"
		);
	}
	// Générer les chemins (paths) pour chaque article
	return articles.data.map((article: Article) =>
		// console.log("Article :", article), // Inspecter l'article
		({
			slug: article.slug, // Utiliser le slug au lieu de l'ID
		})
	);
}

// Générer les meta dynamiques
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { slug } = params;
	console.log("Slug :", slug); // Inspecter le slug

	// Récupérer l'article depuis l'API en fonction du slug
	const res = await fetch(
		`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=categories&populate=image`
	);
	const articles = await res.json();

	if (!articles.data || articles.data.length === 0) {
		return {
			title: "Article non trouvé",
			description: "Cet article n'existe pas.",
		};
	}

	const article = articles.data[0];
	const metaDescription = article.content.slice(0, 160).replace(/<[^>]+>/g, ""); // Extraire les 160 premiers caractères
	const imageUrl = article.image?.formats.large.url || article.image?.url;

	return {
		title: article.title,
		description: metaDescription,
		openGraph: {
			title: article.title,
			description: metaDescription,
			type: "article",
			images: imageUrl
				? [
						{
							url: imageUrl,
							width: 1200,
							height: 630,
							alt: article.title,
						},
				  ]
				: [],
		},
	};
}

// Composant de la page
const BlogPage: React.FC<{ params: { slug: string } }> = async ({ params }) => {
	const { slug } = params;

	// Récupérer l'article depuis l'API en fonction du slug
	const res = await fetch(
		`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate[0]=categories&populate[1]=image`
	);
	const articles = await res.json();

	console.log("Données de l'article :", articles); // Inspecter les données

	if (!articles.data || articles.data.length === 0) {
		return <div>Article non trouvé</div>;
	}

	const article = articles.data[0];

	return (
		<div>
			<ArticleTemplate article={article} />
		</div>
	);
};

export default BlogPage;
