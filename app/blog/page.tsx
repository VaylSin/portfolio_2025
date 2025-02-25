"use client";

import axios from "axios";
import Card from "../../components/ui/Card";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

export default function Blog() {
	const [data, setData] = useState<Article[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/articles?populate=*"
				);
				setData(response.data.data); // Assurez-vous que response.data.data est du type Article[]
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="container max-w-[1280px] mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{data?.map((article: Article, index: number) => {
					const delay = 0.2 + index * 0.1;
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 100 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: delay,
									duration: 0.4,
									ease: "easeInOut",
								},
							}}
						>
							<Card key={article.id} article={article} />
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
