/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const nextConfig = {
	images: {
		domains: ["rkiyjztymcjhibzszhac.supabase.co"],
	},
	env: {
		NEXT_PUBLIC_CANONICAL_API_URL: process.env.NEXT_PUBLIC_CANONICAL_API_URL,
	},
	/**
	 * Rewrites function to redirect API requests to the backend Strapi server.
	 * @returns {Array} An array of rewrite rules.
	 */
	// async rewrites() {
	// 	return [
	// 		{
	// 			// Redirect all requests from /api to the Strapi backend
	// 			source: "/api/:path*",
	// 			destination: `${process.env.NEXT_PUBLIC_CANONICAL_API_URL}/api/:path*`,
	// 		},
	// 	];
	// },
};

export default nextConfig;
