"use client";

import { Raleway as RalewayFont } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import { useEffect, useState, ReactNode } from "react";
import Script from "next/script";

const Raleway = RalewayFont({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-RalewayFont",
});

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const [robots, setRobots] = useState("index, follow");

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (window.location.hostname !== "skdigit.com") {
				setRobots("noindex, nofollow");
			}
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
		robots: robots,
		authors: [{ name: "Sylvain Butet", url: "https://skdigit.com" }],
		og: {
			title: "SKDigit - Création de sites internet et d'applications web",
			description:
				"Développeur freelance basé à Lablachère en Ardèche, spécialisé en WordPress , Symfony et React. Projets web sur mesure pour Aubenas, Les Vans et alentours. Contactez-moi pour vos besoins en création de sites et applications web.",
			image: "https://skdigit.com/web_banner.png",
			url: "https://skdigit.com",
		},
	};

	return (
		<html lang="en">
			<head>
				<meta name="robots" content={metadata.robots} />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords.join(", ")} />
				<meta name="author" content={metadata.authors[0].name} />
				<link rel="canonical" href={metadata.authors[0].url} />
				<meta property="og:title" content={metadata.og.title} />
				<meta property="og:description" content={metadata.og.description} />
				<meta property="og:image" content={metadata.og.image} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Logo de Skdigit" />
				<meta property="og:url" content={metadata.og.url} />
				<meta property="og:type" content="website" />
			</head>
			<body className={`${Raleway.variable} ${Raleway.variable} antialiased`}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-77RFQ986CT"
				></Script>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-77RFQ986CT');
            `,
					}}
				/>
			</body>
		</html>
	);
}
