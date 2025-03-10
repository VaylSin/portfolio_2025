"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import { Article } from "../types";

type ArticleTemplateProps = {
	article: Article;
};

const StyledContent = styled.div`
	line-height: 1.6;
	color: #e2e8f0;

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
		color: #ff6f61;
	}

	h3 {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: #4a5568;
	}
`;

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
	const imageUrl = article.image?.formats.large.url || article.image?.url;
	const categories = article.categories || [];

	return (
		<div className="max-w-4xl mx-auto p-5">
			{imageUrl && (
				<Image
					alt={article.title}
					src={imageUrl}
					title={article.title}
					className="w-full h-auto rounded-lg"
					loading="lazy"
					width={1200}
					height={630}
				/>
			)}

			<h1 className="my-8 text-4xl font-bold text-accent">{article.title}</h1>
			{categories.length > 0 && (
				<div className="my-5 text-accent">
					<strong>Catégorie :</strong>{" "}
					{categories.map((cat) => cat.nom).join(", ")}
				</div>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
			>
				{article.publishedAt && (
					<small className="block mb-2 text-accent">
						Publié le : {new Date(article.publishedAt).toLocaleDateString()}
					</small>
				)}
			</motion.div>
			<StyledContent>
				<ReactMarkdown>{article.content}</ReactMarkdown>
			</StyledContent>
		</div>
	);
};

export default ArticleTemplate;
