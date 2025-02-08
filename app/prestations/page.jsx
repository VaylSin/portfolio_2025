"use client";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
	{
		num: "01",
		title: "Sites Wordpress / WooCommerce ",
		description:
			"Nous proposons des services de développement WordPress et WooCommerce pour votre entreprise. Que ce soit pour créer un site web sur mesure ou optimiser votre boutique en ligne existante, nous vous accompagnons à chaque étape. ",
		link: "/services/web-development",
	},
	{
		num: "02",
		title: "Applications Web",
		description:
			"Nous concevons des applications web modernes et performantes avec React et Symfony. Que vous ayez besoin d’une solution sur mesure ou d’une optimisation de votre application existante, nous vous aidons à allier efficacité, scalabilité et expérience utilisateur fluide.",
		link: "/services/web-development",
	},
	{
		num: "03",
		title: "Landing Pages",
		description:
			"Nous créons des landing pages optimisées pour convertir vos visiteurs en clients. Que ce soit pour un lancement de produit, une campagne marketing ou un événement, nous concevons des pages sur mesure, performantes et engageantes.",
		link: "/services/web-development",
	},
	{
		num: "04",
		title: "Optimisations Référencement ",
		description:
			"Nous optimisons votre site pour un meilleur référencement naturel (SEO). De l’audit technique à l’amélioration du contenu et des performances, nous mettons en place des stratégies efficaces pour booster votre visibilité et attirer plus de visiteurs qualifiés. ",
		link: "/services/web-development",
	},
];

const Services = () => {
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
										href={service.link}
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
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
