"use client";

import { Raleway as RalewayFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { useEffect, useState } from "react";

const Raleway = RalewayFont({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-RalewayFont",
});

export default function RootLayout({ children }) {
	const [robots, setRobots] = useState("index, follow");

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			window.location.hostname !== "skdigit.com"
		) {
			setRobots("noindex, nofollow");
		}
	}, []);
	const metadata = {
		title: "SKDigit - Création de sites internet",
		description:
			"Développeur freelance basé à Lablachère en Ardèche, spécialisé en WordPress , Symfony et React. Projets web sur mesure pour Aubenas, Les Vans et alentours. Contactez-moi pour vos besoins en création de sites et applications web.",
		keywords: [
			"développeur freelance Ardèche",
			"développeur Wordpress Ardèche",
			"développeur Symfony Ardèche",
			"développeur React Ardèche",
			"création site web Lablachère",
			"développeur web Les Vans",
			"développeur web Aubenas",
			"freelance React Symfony WordPress",
			"création application web Ardèche",
			"création site internet Ardèche",
			"création application mobile Ardèche",
			"création site e-commerce Ardèche",
			"création site vitrine Ardèche",
			"création site sur mesure Ardèche",
			"création site web",
		],
		robots: "index, follow",
		authors: [{ name: "Sylvain Butet", url: "https://skdigit.com" }],
		og: {
			title: "SKDigit - Création de sites internet",
			description:
				"Développeur freelance basé à Lablachère en Ardèche, spécialisé en WordPress , Symfony et React. Projets web sur mesure pour Aubenas, Les Vans et alentours. Contactez-moi pour vos besoins en création de sites et applications web.",
			image: "https://skdigit.com/assets/img/web_banner.png",
			url: "https://skdigit.com",
		},
	};
	return (
		<html lang="en">
			<body className={`${Raleway.variable} ${Raleway.variable} antialiased`}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
