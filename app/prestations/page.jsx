"use client";
import Modal from "@/components/Modal";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
	{
		num: "01",
		title: "Sites Wordpress / WooCommerce",
		description:
			"Je propose mes services de développement WordPress et WooCommerce pour votre entreprise. Que ce soit pour créer un site web sur mesure ou optimiser votre boutique en ligne existante, je suis avec vous à chaque étape.",
		link: "/services/web-development",
		full_text: (
			<section className="container mx-auto p-6 bg-background">
				<h2 className="text-2xl lg:text-3xl font-bold mb-8">
					WordPress & WooCommerce : Une solution accessible et puissante
				</h2>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Un back-office conçu pour être simple et efficace
				</h3>
				<p className="mb-8 lg:mb-4">
					WordPress est pensé pour être utilisable sans compétences techniques.
					L’interface d’administration est intuitive :
				</p>
				<ul className="list-disc list-inside mb-4">
					<li>
						Ajouter une page, un article ou un produit se fait en quelques
						clics.
					</li>
					<li>
						L’éditeur de contenu (Gutenberg) permet de structurer ses pages
						facilement avec des blocs.
					</li>
					<li>
						WooCommerce suit la même logique avec une gestion des commandes et
						des stocks simplifiée.
					</li>
					<li>
						Même si un site devient complexe, il existe toujours une extension
						ou un plugin pour ajouter des fonctionnalités sans toucher au code.
					</li>
				</ul>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Sécurité : Une plateforme solide avec les bonnes pratiques
				</h3>
				<p className="mb-8 lg:mb-4">
					WordPress est parfois perçu comme une plateforme vulnérable, mais en
					réalité, sa popularité en fait une cible privilégiée. Un site bien
					maintenu et sécurisé n’a pas plus de risques qu’un autre CMS.
				</p>
				<ul className="list-disc list-inside mb-4">
					<li>Mises à jour régulières du cœur, des thèmes et des plugins.</li>
					<li>
						Limiter les extensions inutiles pour réduire les failles
						potentielles.
					</li>
					<li>
						Utiliser un plugin de sécurité comme Wordfence ou iThemes Security.
					</li>
					<li>
						Avoir un hébergement sécurisé qui bloque les attaques courantes.
					</li>
				</ul>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Un écosystème gigantesque qui assure l’évolutivité
				</h3>
				<ul className="list-disc list-inside mb-4">
					<li>
						Des millions de sites utilisent WordPress, assurant un large support
						communautaire.
					</li>
					<li>Des milliers de thèmes et plugins gratuits et premium.</li>
					<li>
						Un CMS qui évolue constamment avec de nouvelles fonctionnalités.
					</li>
				</ul>
			</section>
		),
	},
	{
		num: "02",
		title: "Applications Web",
		description:
			"Je conçois des applications web modernes avec React et Symfony. Que vous ayez besoin d’une solution sur mesure ou d’une optimisation de votre application existante, je vous aide à allier efficacité, scalabilité et expérience utilisateur fluide.",
		link: "/services/web-development",
		full_text: (
			<section className="container mx-auto p-6 bg-background">
				<h2 className="text-2xl lg:text-3xl font-bold mb-8">
					React & Symfony : Une Alliance Moderne et Performante
				</h2>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					React : Dynamisme et Expérience Utilisateur
				</h3>
				<p className="mb-8 lg:mb-4">
					React permet de créer des interfaces interactives et ultra-fluides.
					Grâce au chargement asynchrone des éléments, la navigation est rapide
					et immersive, idéale pour les applications web modernes.
				</p>
				<ul className="list-disc list-inside mb-4">
					<li>Expérience utilisateur fluide et sans rechargement de page.</li>
					<li>Performance optimisée pour les applications interactives.</li>
					<li>Supporté par Meta et une large communauté.</li>
				</ul>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Symfony : Un Back-Office Sécurisé et Sur-Mesure
				</h3>
				<p className="mb-8 lg:mb-4">
					Symfony est un framework robuste, adapté aux projets nécessitant un
					back-office personnalisé et sécurisé. Il offre une flexibilité totale
					sans dépendance aux plugins tiers.
				</p>
				<ul className="list-disc list-inside mb-4">
					<li>Back-office sur mesure avec gestion avancée des permissions.</li>
					<li>Sécurité renforcée contre les attaques web.</li>
					<li>Évolutif et pérenne, utilisé par les grandes entreprises.</li>
				</ul>
			</section>
		),
	},
	{
		num: "03",
		title: "Landing Pages",
		description:
			"Je crée des landing pages pour convertir vos visiteurs en clients. Que ce soit pour un lancement de produit, une campagne marketing ou un événement, je conçois des pages sur mesure, performantes et engageantes.",
		link: "/services/web-development",
		full_text: (
			<section className="container mx-auto p-6 bg-background">
				<h2 className="text-2xl lg:text-3xl font-bold mb-8">
					L'importance d'une Landing Page : Capturer l'attention et maximiser la
					conversion
				</h2>
				<p className="mb-8 lg:mb-4">
					Une landing page bien conçue joue un rôle fondamental dans le parcours
					utilisateur en ligne. Elle sert de point de contact direct entre votre
					audience et votre offre. L’objectif principal est de convertir un
					visiteur en client ou de l’inciter à entreprendre une action
					spécifique. Pour cela, il est crucial de répondre rapidement à ses
					attentes tout en étant clair et direct. Une landing page réussie
					repose sur des éléments essentiels : un titre accrocheur, des appels à
					l’action visibles, un design épuré, et un contenu focalisé qui élimine
					toute distraction. Plus elle est simple et bien ciblée, plus elle
					maximisera les taux de conversion.
				</p>
				<p className="mb-8 lg:mb-4">
					En intégrant des éléments de preuve sociale (témoignages, avis
					clients), des garanties, et une promesse claire de valeur ajoutée, la
					landing page instaure également la confiance. Elle permet de répondre
					directement à une problématique de l'utilisateur, offrant une solution
					qui semble évidente. De plus, son optimisation SEO, en fonction des
					mots-clés liés à votre offre, va aussi améliorer sa visibilité sur les
					moteurs de recherche, augmentant ainsi ses chances d'attirer des
					prospects qualifiés.
				</p>
				<p className="mb-8 lg:mb-4">
					En somme, une landing page n'est pas juste une page d'atterrissage,
					mais un outil stratégique essentiel pour maximiser le retour sur
					investissement de vos campagnes marketing en ligne.
				</p>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Avantages d'une Landing Page efficace :
				</h3>
				<ul className="list-disc list-inside mb-4">
					<li>
						<strong>Conversion optimisée</strong> : Conçue pour inciter à une
						action précise, elle maximise les chances de conversion des
						visiteurs en leads ou clients.
					</li>
					<li>
						<strong>Clarté du message</strong> : Focalise l'attention sur une
						offre spécifique, évitant toute distraction.
					</li>
					<li>
						<strong>Facilité de navigation</strong> : Un design épuré et
						intuitif guide l'utilisateur vers l'objectif sans confusion.
					</li>
					<li>
						<strong>Mesurable et analysable</strong> : Permet de suivre
						précisément les performances de vos campagnes et d’ajuster en
						fonction des résultats.
					</li>
					<li>
						<strong>Augmentation du ROI</strong> : Réduit les coûts de marketing
						en concentrant les efforts sur des actions à fort potentiel de
						retour.
					</li>
					<li>
						<strong>Optimisation SEO</strong> : Améliore la visibilité sur les
						moteurs de recherche et attire un trafic qualifié.
					</li>
					<li>
						<strong>Renforcement de la crédibilité</strong> : Témoignages,
						garanties et preuves sociales augmentent la confiance de
						l’utilisateur.
					</li>
				</ul>
			</section>
		),
	},
	{
		num: "04",
		title: "Optimisations Référencement",
		description:
			"Votre site est optimisé pour un meilleur référencement naturel (SEO). De l’audit technique à l’amélioration du contenu et des performances, je mets en place des stratégies efficaces pour booster votre visibilité et attirer plus de visiteurs qualifiés.",
		link: "/services/web-development",
		full_text: (
			<section className="container mx-auto p-6 bg-background">
				<h2 className="text-2xl lg:text-3xl font-bold mb-8">
					SEO : L’Art d’Être Visible sur Google
				</h2>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Pourquoi le SEO est essentiel ?
				</h3>
				<p className="mb-8 lg:mb-4">
					Avoir un site web, c’est bien. Mais s’il n’apparaît pas dans les
					premiers résultats de Google, il risque de ne jamais être vu.
					Aujourd’hui, 93% des expériences en ligne commencent par une recherche
					et 75% des internautes ne vont jamais au-delà de la première page. Un
					bon SEO permet d’attirer des visiteurs qualifiés et d’augmenter la
					visibilité sans dépendre de la publicité payante.
				</p>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Les 3 Piliers du Référencement
				</h3>
				<h4 className="text-xl font-semibold mb-2">
					L’aspect technique : Un site rapide et bien structuré
				</h4>
				<ul className="list-disc list-inside mb-4">
					<li>
						Un temps de chargement rapide est crucial (Google pénalise les sites
						trop lents).
					</li>
					<li>
						Le site doit être mobile-friendly (plus de 60% des recherches se
						font sur smartphone).
					</li>
				</ul>
				<h4 className="text-xl font-semibold mb-2">Le contenu : Roi du SEO</h4>
				<ul className="list-disc list-inside mb-4">
					<li>
						Il faut rédiger des textes pertinents et engageants qui répondent
						aux questions des visiteurs.
					</li>
					<li>
						Utiliser des mots-clés stratégiques tout en gardant un langage
						naturel.
					</li>
				</ul>
				<h4 className="text-xl font-semibold mb-2">
					La popularité : Les liens font la différence
				</h4>
				<ul className="list-disc list-inside mb-4">
					<li>
						Les backlinks (liens entrants) : Plus un site est cité par d’autres
						sites de qualité, plus il est bien classé.
					</li>
					<li>
						L’UX (expérience utilisateur) : Google favorise les sites où les
						visiteurs restent longtemps et interagissent.
					</li>
				</ul>
				<h3 className="text-xl lg:text-2xl font-semibold mb-3">
					Comment optimiser son SEO efficacement ?
				</h3>
			</section>
		),
	},
];

const Services = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const handleOpenModal = (content) => {
		setModalContent(content);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
	};
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 2.4,
							duration: 0.4,
							ease: "easeIn",
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((service, index, count) => {
						return (
							<div
								key={index}
								className="flex-1 flex flex-col justify-center gap-6 group"
							>
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-accent text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
										{service.num}
									</div>
									<Link
										href=""
										onClick={(e) => {
											e.preventDefault();
											handleOpenModal(service.full_text);
										}}
										className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent  transition-all duration-500 flex justify-center items-center hover:rotate-45"
									>
										<BsArrowDownRight className="text-primary text-2xl" />
									</Link>
								</div>
								<h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								<p className="text-white/60 text-base">{service.description}</p>
								<div className="border-b border-white/20 w-full"></div>
							</div>
						);
					})}
					<Modal
						isOpen={isModalOpen}
						onClose={handleCloseModal}
						content={modalContent}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
