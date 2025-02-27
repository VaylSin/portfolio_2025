"use client"; // Si tu utilises Next.js avec le App Router

import React from "react";
import { useParams } from "next/navigation";
import ArticleTemplate from "../../../components/ArticleTemplate";

interface Article {
	data: {
		id: number;
		title: string;
		content: string;
		categories: { nom: string }[];
		image?: {
			formats: {
				large: {
					url: string;
				};
			};
		}; // Optionnel : pour l'image de l'article
		date?: string; // Optionnel : pour la date de publication
	};
}

// Fonction pour récupérer les données de l'article
async function getArticle(id: number): Promise<Article> {
	const res = await fetch(`http://localhost:1337/api/articles/${id}`);

	if (!res.ok) {
		throw new Error("Échec de la récupération de l'article");
	}
	return res.json();
}

// Page dynamique
const BlogPage: React.FC = () => {
	const { id } = useParams() as { id: string };

	const [article, setArticle] = React.useState<Article | null>(null);

	React.useEffect(() => {
		if (id) {
			getArticle(Number(id)).then(setArticle).catch(console.error);
		}
	}, [id]);

	if (!article) {
		return <div>Chargement...</div>;
	}

	return (
		<div>
			<ArticleTemplate article={article} />
		</div>
	);
};

export default BlogPage;
