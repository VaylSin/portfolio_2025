import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Article } from "../../types";

const Card = ({ article }: { article: Article }) => {
	const [thumbnail, setThumbnail] = useState<string | null>(null);

	useEffect(() => {
		if (article.image) {
			setThumbnail(article.image.formats.small.url);
		}
	}, [article.image?.formats.small.url]);

	return (
		<div className="bg-primary border border-accent rounded-lg shadow-md overflow-hidden">
			{article.image && (
				<Image
					src={thumbnail || article.image.url}
					alt={article.image.alt || article.title} // Utilisez article.title comme valeur de secours
					className="w-full h-48 object-cover"
					loading="lazy"
					width={640}
					height={360}
				/>
			)}
			{/* Contenu de la carte */}
			<div className="p-6 ">
				<h2 className="text-xl text-accent font-bold mb-2">{article.title}</h2>
				<p className="text-white mb-4">
					{article.content.substring(0, 100)}...
				</p>
				<Link
					href={`/blog/${article.slug}`}
					className="text-accent hover:text-accent/60 font-semibold transition-duration transition-colors"
				>
					Lire la suite →
				</Link>
			</div>
		</div>
	);
};

export default Card;
