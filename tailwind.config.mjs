/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // Activation du dark mode via une classe
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
				primary: "#253137", // Couleur principale en mode clair
				accent: {
					DEFAULT: "#ff6f61", // Couleur d'accent en mode clair
					hover: "#FF8B82", // Couleur d'accent au survol en mode clair
				},
				dark: {
					primary: "#A8DADC", // Couleur principale en mode sombre
					accent: {
						DEFAULT: "#2C3E50", // Couleur d'accent en mode sombre
						hover: "#34495E", // Couleur d'accent au survol en mode sombre
					},
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
