"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaSymfony,
	FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const skills = {
	title: "Compétences",
	description:
		"J'ai développé des compétences avec un large éventail de technologies et d'outils. Voici un aperçu des principales compétences que j'ai acquises au fil de mon expérience.",
	items: [
		{ name: "HTML5", icon: <FaHtml5 /> },
		{ name: "CSS3", icon: <FaCss3 /> },
		{ name: "JavaScript", icon: <FaJs /> },
		{ name: "React", icon: <FaReact /> },
		{ name: "Symfony", icon: <FaSymfony /> },
		{ name: "Wordpress", icon: <FaWordpress /> },
		{ name: "Tailwindcss", icon: <SiTailwindcss /> },
		{ name: "Next.js", icon: <SiNextdotjs /> },
	],
};

const about = {
	title: "Développeur full-stack",
	description: (
		<>
			Suite à une reconversion professionnelle en 2015, j’ai eu l’opportunité
			d’acquérir plus de 7 ans d’expérience en agence, où j’ai pu développer des
			compétences solides en création de sites vitrines et en développement
			d’applications web.
			<br />
			<br />
			Ce qui me passionne, c’est de répondre aux besoins uniques de chaque
			client, en concevant des solutions sur-mesure, performantes et
			accessibles.
			<br />
			{/* <br /> */}
			Mon travail me permet de marier technologie et créativité, et j'aime
			autant m'attaquer à des projets de petite envergure qu'à des défis plus
			complexes.
			<br />
			<br />
			En dehors de mon métier, je nourris ma curiosité et mon énergie à travers
			mes passions : la batterie, le sport et la cuisine, qui me permettent de
			me ressourcer et de garder un équilibre entre vie professionnelle et
			personnelle.
		</>
	),
	info: [
		{ label: "Nom", value: "Sylvain Butet" },
		{ label: "Email", value: "contact@skdigit.fr" },
		{ label: "Experience", value: "10 ans" },
		{ label: "Téléphone", value: "+33 6 87 78 28 58" },
		{ label: "Localisation", value: "Lablachère, France" },
		{ label: "Freelance", value: "Disponible" },
		{ label: "Langue", value: "Français, Anglais" },
	],
};
const experiences = {
	icon: "assets/resume/badge.svg",
	title: "Mes éxperiences",
	description:
		"J'ai travaillé sur une variété de projets, allant de petits sites web à de grandes applications web. J'ai acquis de l'expérience en collaborant avec des clients de secteurs divers, tels que l'e-commerce, l'éducation et la santé. Je suis à l'aise dans des environnements dynamiques et je sais m'adapter rapidement aux exigences changeantes.",
	items: [
		{
			company: "SKDigit",
			position: "Développeur Full-Stack",
			duration: "Juin 2023 - Présent",
		},
		{
			company: "Agence Modulo",
			position: "Développeur WordPress / Front-End",
			duration: "Avril 2021 - Mai 2022",
		},
		{
			company: "Agence Eanet",
			position: "Développeur Front-End",
			duration: "Juin 2016 - Janvier 2021",
		},
		{
			company: "LWM",
			position: "Développeur Front-End",
			duration: "Décembre 2015 - Mai 2016",
		},
		{
			company: "Rentabiliweb",
			position: "Développeur Javascript",
			duration: "Juin 2015 - Septembre 2015",
		},
		{
			company: "Coopatittude Startup",
			position: "Alternant Développeur Web",
			duration: "Mai 2014 - Juin 2015",
		},
	],
};
const education = {
	icon: "assets/resume/graduation.svg",
	title: "Mes formations",
	description:
		"I have a Bachelor's degree in Computer Science from the University of Paris. I also have a Master's degree in Web Development from the University of Lyon. I am constantly learning new technologies and improving my skills to stay up-to-date with the latest trends in web development.",
	items: [
		{
			name: "Maitrise en Conception Web bac +4",
			school: "Institut IEF2I",
			duration: "2014 - 2015",
		},
		{
			name: "Cursus Web - POE",
			school: "Institut IEF2I",
			duration: "2014",
		},
		{
			name: "DSPP Infographiste Multimédia",
			school: "Institut CEFIAC",
			duration: "2013",
		},
	],
};

const Resume = () => {
	return (
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
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="about">À propos</TabsTrigger>
						<TabsTrigger value="experience">Experiences</TabsTrigger>
						<TabsTrigger value="formations">Formations</TabsTrigger>
						<TabsTrigger value="skills">Compétences</TabsTrigger>
					</TabsList>
					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experiences.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experiences.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experiences.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#3A4C55] h-[184px] p-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="formations" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								{/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p> */}
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#3A4C55] h-[184px] p-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.name}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.school}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px] text-center xl:text-left mt-8 xl:mt-0">
									{skills.items.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#3A4C55] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px] mb-16">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<img
									className="w-[300px] h-[300px] rounded-full mx-auto xl:mx-0 border border-accent"
									src="/assets/img/sylvain-butet-skdigit-portrait.jpg"
									alt="Sylvain Butet - SKDigit - Développeur Full-Stack Ardèche "
								/>
								<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((info, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{info.label}</span>
												<span className="text-xl">{info.value}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
