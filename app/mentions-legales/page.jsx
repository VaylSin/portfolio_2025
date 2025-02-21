"use client";

import { motion } from "framer-motion";

const MentionsLegales = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container-lg mx-auto p-6 bg-background max-w-[1200px]">
				<h1 className="text-3xl font-bold mb-8 text-accent">
					Mentions Légales
				</h1>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Éditeur du site :
				</h2>
				<p className="mb-4 text-secondary">
					Nom de l’entreprise ou de l’individu : SKDigit
					<br />
					Adresse : 4 Place Colette Lepage 93100 Montreuil
					<br />
					Téléphone : 0687782858
					<br />
					E-mail :
					<a
						href="mailto:contact@skdigit.fr"
						className="text-accent hover:underline"
					>
						contact@skdigit.fr
					</a>
					<br />
					Directeur de la publication : Butet Sylvain
					<br />
					Si applicable : 923 530 794 000 18
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Hébergeur du site :
				</h2>
				<p className="mb-4 text-secondary">
					Nom de l’hébergeur : Netlify
					<br />
					Site web :{" "}
					<a
						href="https://www.netlify.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:underline"
					>
						https://www.netlify.com/
					</a>
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">Activité :</h2>
				<p className="mb-4 text-secondary">
					SKDigit est un studio de développement web spécialisé dans la création
					de sites vitrines, portfolios et applications web performantes. Fort
					d’une expertise en Symfony, React et WordPress, nous concevons des
					solutions sur mesure, optimisées pour le SEO et adaptées aux besoins
					des indépendants, startups et entreprises.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Propriété intellectuelle :
				</h2>
				<p className="mb-4 text-secondary">
					Le contenu du site (textes, images, logos, vidéos, etc.) est protégé
					par les droits de propriété intellectuelle. Toute reproduction,
					distribution ou utilisation sans autorisation préalable est
					strictement interdite. Crédits photos par Barbara Jarjat{" "}
					<a
						href="https://www.gulwen.fr "
						target="_blank"
						className="text-accent hover:underline"
					>
						( https://gulwen.fr/ )
					</a>
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Données personnelles :
				</h2>
				<p className="mb-4 text-secondary">
					Conformément au Règlement Général sur la Protection des Données (RGPD)
					et à la loi Informatique et Libertés, vous disposez d’un droit
					d’accès, de rectification, de suppression et de portabilité de vos
					données personnelles. Pour exercer ces droits, veuillez nous contacter
					à l’adresse suivante :{" "}
					<a
						href="mailto:contact@skdigit.fr"
						className="text-accent hover:underline"
					>
						contact@skdigit.fr
					</a>
					.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">Cookies :</h2>
				<p className="mb-4 text-secondary">
					Le site utilise des cookies pour améliorer l’expérience utilisateur.
					Vous pouvez configurer votre navigateur pour refuser les cookies, mais
					cela peut limiter certaines fonctionnalités du site.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Liens externes :
				</h2>
				<p className="mb-4 text-secondary">
					Skdigit peut contenir des liens vers des sites tiers. Nous ne sommes
					pas responsables du contenu ou des pratiques de confidentialité de ces
					sites.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Responsabilité :
				</h2>
				<p className="mb-4 text-secondary">
					Skdigit s’efforce de fournir des informations exactes et à jour, mais
					ne peut garantir l’exactitude complète des contenus. L’utilisation du
					site et de ses services se fait sous votre propre responsabilité.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Loi applicable :
				</h2>
				<p className="mb-4 text-secondary">
					Le site est soumis au droit français. Tout litige relatif à son
					utilisation sera soumis à la compétence des tribunaux français.
				</p>

				<h1 className="text-3xl font-bold mb-8 text-accent">
					Politique de Confidentialité
				</h1>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Collecte des données :
				</h2>
				<p className="mb-4 text-secondary">
					Nous collectons des données personnelles lorsque vous naviguez sur le
					site, ces données incluent nom, prénom adresse e-mail, informations de
					tracking via Google Analytics.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Utilisation des données :
				</h2>
				<p className="mb-4 text-secondary">
					Les données collectées sont utilisées pour améliorer le site, analyser
					le trafic,personnaliser l’expérience utilisateur.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">
					Partage des données :
				</h2>
				<p className="mb-4 text-secondary">
					Nous ne partageons pas vos données avec des tiers sans votre
					consentement, sauf si requis par la loi.
				</p>

				<h2 className="text-2xl font-semibold mb-4 text-accent">Sécurité :</h2>
				<p className="mb-4 text-secondary">
					Nous mettons en œuvre des mesures de sécurité pour protéger vos
					données contre tout accès non autorisé.
				</p>
			</div>
		</motion.section>
	);
};

export default MentionsLegales;
