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
import { Item } from "@radix-ui/react-select";

const skills = {
	title: "Compétences",
	description:
		"I have experience working with a variety of technologies and tools. Here are some of the skills that I have developed over the years.",
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
	title: "Full Stack Developer",
	description:
		"I am a full stack developer with 5 years of experience in web development. I am proficient in HTML, CSS, JavaScript, React, Symfony, and Wordpress. I am passionate about building web applications that are user-friendly and accessible. I am a team player and enjoy working with others to achieve common goals.",
	info: [
		{ label: "Name", value: "Sylvain Butet" },
		{ label: "Email", value: "sylvain@skdigit.fr" },
		{ label: "Experience", value: "10 ans" },
		{ label: "Phone", value: "+33 6 87 78 28 58" },
		{ label: "Location", value: "Lablachère, France" },
		{ label: "Freelance", value: "Disponible" },
		{ label: "Lang", value: "Français, Anglais" },
	],
};
const experiences = {
	icon: "assets/resume/badge.svg",
	title: "Mes experiences",
	description:
		"I have worked on a variety of projects, ranging from small websites to large web applications. I have experience working with clients from different industries, including e-commerce, education, and healthcare. I am comfortable working in a fast-paced environment and can adapt to changing requirements quickly.",
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
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
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
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
