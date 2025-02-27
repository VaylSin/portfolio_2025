"use client"; // Si tu utilises Next.js avec le App Router

import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { motion } from "framer-motion";

type Article = {
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
};

type ArticleTemplateProps = {
	article: Article;
};
const StyledContent = styled.div`
	line-height: 1.6;
	color: #e2e8f0; /* Couleur blanche */

	p {
		margin-bottom: 1rem;
	}

	ul {
		list-style-type: disc;
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 2rem;
		font-weight: bold;
		color: #2d3748; /* Couleur secondaire */
	}

	h3 {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: #4a5568; /* Couleur tertiaire */
	}
`;

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
	const data = article.data;
	return (
		<div className="max-w-4xl mx-auto p-5">
			{/* Thumbnail (si disponible) */}
			{data.image && (
				<img
					src={data.image.formats.large.url}
					alt={data.title}
					className="w-full h-auto rounded-lg"
				/>
			)}

			{/* Titre */}
			<h1 className="my-8 text-4xl font-bold text-accent">{data.title}</h1>
			{/* Catégorie */}
			<div className="my-5 text-accent">
				<strong>Catégorie :</strong>{" "}
				{data.categories.map((cat) => cat.nom).join(", ")}
			</div>

			{/* Date (si disponible) */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
			>
				{data.date && (
					<small className="block mb-2 text-accent">
						Publié le : {data.date}
					</small>
				)}
			</motion.div>

			{/* Contenu */}
			<StyledContent>
				<ReactMarkdown>{data.content}</ReactMarkdown>
			</StyledContent>
		</div>
	);
};

export default ArticleTemplate;
