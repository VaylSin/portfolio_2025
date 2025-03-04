// Type pour les données de l'article
export type Article = {
	id: number;
	title: string;
	content: string;
	slug: string;
	categories?: {
		id: number;
		nom: string;
		slug: string;
	}[];
	image?: {
		formats: {
			large: {
				url: string;
			};
			small: {
				url: string;
			};
			medium: {
				url: string;
			};
			thumbnail: {
				url: string;
			};
		};
		url: string;
		alt?: string;
	};
	createdAt: string;
	updatedAt: string;
	publishedAt: string | null;
};

// Définir le type PageProps
export type PageProps = {
	params: {
		slug: string;
	};
	searchParams?: {
		[key: string]: string | string[] | undefined;
	};
};
