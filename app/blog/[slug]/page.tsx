// app/blog/[slug]/page.tsx

import React from "react";
import ArticleTemplate from "../../../components/ArticleTemplate";
import { Metadata } from "next";
import Link from "next/link";
import { Article } from "../../../types";

// Générer les chemins statiques
export async function generateStaticParams() {
	const articles = await fetch(
		`${process.env.NEXT_PUBLIC_CANONICAL_API_URL}api/articles?populate=categories&populate=image`
	).then((res) => res.json());

	if (!articles.data || !Array.isArray(articles.data)) {
		throw new Error(
			"La réponse de l'API ne contient pas un tableau de données"
		);
	}

	return articles.data.map((article: Article) => ({
		slug: article.slug,
	}));
}

// Générer les meta dynamiques
export async function generateMetadata({ params }): Promise<Metadata> {
	const { slug } = params;

	// Récupérer l'article depuis l'API
	const articles = await fetch(
		`${process.env.NEXT_PUBLIC_CANONICAL_API_URL}api/articles?filters[slug][$eq]=${slug}&populate=categories&populate=image`
	).then((res) => res.json());

	if (!articles.data || articles.data.length === 0) {
		return {
			title: "Article non trouvé",
			description: "Cet article n'existe pas.",
		};
	}

	const article = articles.data[0];
	const metaDescription = article.content.slice(0, 160).replace(/<[^>]+>/g, "");
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
const BlogPage = async ({ params }) => {
	const { slug } = params;

	// Récupérer l'article depuis l'API
	const articles = await fetch(
		`${process.env.NEXT_PUBLIC_CANONICAL_API_URL}api/articles?populate=categories&populate=image`
	).then((res) => res.json());

	if (!articles.data || articles.data.length === 0) {
		return <div className="max-w-4xl mx-auto p-5">Article non trouvé</div>;
	}

	const currentIndex = articles.data.findIndex(
		(article: Article) => article.slug === slug
	);
	if (currentIndex === -1) {
		return <div className="max-w-4xl mx-auto p-5">Article non trouvé</div>;
	}

	const article = articles.data[currentIndex];
	const previousArticle =
		currentIndex > 0 ? articles.data[currentIndex - 1] : null;
	const nextArticle =
		currentIndex < articles.data.length - 1
			? articles.data[currentIndex + 1]
			: null;

	return (
		<div>
			<ArticleTemplate article={article} />
			<div
				className="max-w-4xl mx-auto p-5"
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "2rem",
				}}
			>
				{previousArticle ? (
					<Link
						href={`/blog/${previousArticle.slug}`}
						className="text-accent"
						title={previousArticle.title}
					>
						← Article précédent
					</Link>
				) : (
					<span></span>
				)}

				{nextArticle ? (
					<Link
						href={`/blog/${nextArticle.slug}`}
						className="text-accent"
						title={nextArticle.title}
					>
						Article suivant →
					</Link>
				) : (
					<span></span>
				)}
			</div>
		</div>
	);
};

export default BlogPage;
