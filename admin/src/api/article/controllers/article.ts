import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async findOne(ctx) {
			const { id } = ctx.params;

			// Récupérer l'article
			const article = await strapi.entityService.findOne(
				"api::article.article",
				id,
				{
					populate: ["categories"], // Peupler les relations si nécessaire
				}
			);

			if (!article) {
				return ctx.notFound("Article not found"); // Retourner une erreur 404 si l'article n'existe pas
			}

			// Retourner l'article
			return { data: article };
		},
	})
);
