import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const OpenSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-openSans",
});
export const metadata = {
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
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${OpenSans.variable} ${OpenSans.variable} antialiased`}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
