/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["rkiyjztymcjhibzszhac.supabase.co"],
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*", // Toutes les requêtes vers /api seront redirigées
				destination: "https://admin.skdigit.fr/api/:path*", // Vers votre backend Strapi
			},
		];
	},
};

export default nextConfig;
