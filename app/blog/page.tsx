"use client";

import axios from "axios";
import Card from "../../components/ui/Card";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Article } from "../../types";

export default function Blog() {
	const [data, setData] = useState<Article[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		axios
			.get(
				`${process.env.NEXT_PUBLIC_CANONICAL_API_URL}/api/articles?populate=*`
			)
			.then((response) => {
				setData(response.data.data);
			})
			.catch((err) => {
				setError(err as Error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading)
		return <div className="container max-w-[1280px]">Chargement...</div>;
	if (error)
		return (
			<div className="container max-w-[1280px]">Erreur: {error.message}</div>
		);

	return (
		<div className="container max-w-[1280px] mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Le blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{data?.map((article: Article, index: number) => (
					<motion.div
						key={article.id}
						initial={{ opacity: 0, y: 100 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.2 + index * 0.1,
								duration: 0.4,
								ease: "easeInOut",
							},
						}}
					>
						<Card article={article} />
					</motion.div>
				))}
			</div>
		</div>
	);
}
