/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			screens: {
				sm: "40rem",
				md: "48rem",
				lg: "60rem",
				xl: "80rem",
			},
			fontFamily: {
				primary: "var(--font-RalewayFont)",
			},
			colors: {
				primary: "#253137",
				accent: {
					DEFAULT: "#ff6f61",
					hover: "#FF8B82",
				},
			},
			height: {
				"custom-height": "calc(100vh - 220px)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
