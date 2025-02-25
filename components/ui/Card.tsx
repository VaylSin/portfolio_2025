import Link from "next/link";
import React from "react";

interface Article {
	id: number;
	slug: string;
	title: string;
	content: string;
	image: {
		formats: {
			small: {
				url: string;
			};
		};
		url: string;
		alt: string;
	};
}

const Card = ({ article }: { article: Article }) => {
	const thumbnail = article.image.formats.small.url;
	return (
		<div className="bg-primary border border-accent rounded-lg shadow-md overflow-hidden">
			{article.image && (
				<img
					src={thumbnail || article.image.url}
					alt={article.title}
					className="w-full h-48 object-cover"
					loading="lazy"
				/>
			)}
			{/* Contenu de la carte */}
			<div className="p-6 ">
				<h2 className="text-xl text-accent font-bold mb-2">{article.title}</h2>
				<p className="text-white mb-4">
					{article.content.substring(0, 100)}...
				</p>
				<Link
					href={`/blog/${article.id}`}
					className="text-accent hover:text-accent/60 font-semibold transition-duration transition-colors"
				>
					Lire la suite →
				</Link>
			</div>
		</div>
	);
};
export default Card;
