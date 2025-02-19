import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
	const baseUrl = "https://skdigit.com";

	const staticPages = [
		"",
		"a-propos",
		"prestations",
		"contact",
		"realisations",
		// Ajoutez ici les autres pages statiques de votre site
	];

	const fields = staticPages.map((page) => ({
		loc: `${baseUrl}/${page}`,
		lastmod: new Date().toISOString(),
		changefreq: "monthly",
		priority: 0.7,
	}));

	return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
