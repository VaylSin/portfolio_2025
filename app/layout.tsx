import { Raleway as RalewayFont } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import Script from "next/script";

const Raleway = RalewayFont({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-RalewayFont",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

// Fonction pour générer les métadonnées
export async function generateMetadata() {
	const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "skdigit.com";
	const robots =
		hostname === "skdigit.com" ? "index, follow" : "noindex, nofollow";

	return {
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
		robots: robots, // Utilisez la valeur de `robots` déterminée dynamiquement
		authors: [{ name: "Sylvain Butet", url: "https://skdigit.com" }],
		openGraph: {
			title: "SKDigit - Création de sites internet et d'applications web",
			description:
				"Développeur freelance basé à Lablachère en Ardèche, spécialisé en WordPress , Symfony et React. Projets web sur mesure pour Aubenas, Les Vans et alentours. Contactez-moi pour vos besoins en création de sites et applications web.",
			images: [
				{
					url: "https://skdigit.com/web_banner.png",
					width: 1200,
					height: 630,
					alt: "Logo de Skdigit",
				},
			],
			url: "https://skdigit.com",
			type: "website",
		},
	};
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
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
