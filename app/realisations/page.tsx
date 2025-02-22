"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import {
	Beer,
	CodeIcon,
	Component,
	LucideIcon,
	Waves,
	Music,
	CameraIcon,
	DollarSign,
	BrainIcon,
	YoutubeIcon,
	Computer,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipArrow,
	TooltipTrigger,
	TooltipProvider,
} from "@radix-ui/react-tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	// {
	// 	num: "01",
	// 	category: "Développement NextJS",
	// 	Logo: CodeIcon,
	// 	title: "SkDigit",
	// 	description: "Fondateur de SKDigit, agence de développement web",
	// 	url: "https://skdigit.com",
	// 	stack: ["NextJS", "TailwindCSS", "Firebase", "Framer Motion"],
	// },
	{
		num: "01",
		category: "Développement Wordpress",
		thumb: "/assets/img/gulwen.png",
		title: "Gûlwen",
		description: "Blog d'une influenceuse en Ardèche",
		url: "https://gulwen.fr",
		stack: ["Wordpress", "ACF", "Timber Components", "Aos"],
	},
	{
		num: "02",
		category: "Développement Wordpress / WebDesign",
		thumb: "/assets/img/jonesy.png",
		title: "Jonesy Agency",
		description: "Studio d'enregistrement basé à Paris 11",
		url: "https://jonesyagency.com",
		stack: ["Wordpress", "ACF flexible", "Sass", "Aos"],
	},
	{
		num: "03",
		category: "Développement Wordpress / WebDesign",
		thumb: "/assets/img/lovecraft.jpg",
		title: "LeLovecraft",
		description: "Bar / Restaurant / Salle de concert basé à Nantes",
		url: "https://www.lelovecraft.com",
		stack: ["Wordpress", "Sass", "ACF", "Aos"],
	},
	{
		num: "04",
		category: "Blog Wordpress",
		thumb: "/assets/img/johanna.png",
		title: "Johanna De Rangot",
		description:
			"Site d'une styliste / couturière talentueuse basée à St-Brieuc",
		url: "https://www.johannaderangot.com/",
		stack: ["Wordpress", "ACF", "Sass"],
	},
	{
		num: "05",
		category: "Développement Front-End",
		thumb: "/assets/img/landing.png",
		title: "Landing Page",
		description: "Un exemple de Landing Page",
		url: "https://landing.skdigit.com",
		stack: ["Html5", "TailwindCSs", "Aos"],
	},
	{
		num: "06",
		category: "Developpement ReactJS",
		thumb: "/assets/img/crypto.jpg",
		title: "Crypto App",
		description:
			"Une petite application listant et détaillant les principales Cryptos du marché",
		url: "https://crypto.skdigit.com",
		stack: ["ReactJS", "TailwindCSS", "CoinGecko API"],
	},
	{
		num: "07",
		category: "Développement ReactJS",
		thumb: "/assets/img/quiz.png",
		title: "CultureQuiz",
		description: "Un petit quizz de culture générale",
		url: "https://culturequiz.skdigit.com",
		stack: ["ReactJS", "Css3"],
	},
	{
		num: "08",
		category: "Développement ReactJS",
		thumb: "/assets/img/youtube.jpg",
		title: "Youtube Clone",
		description: "Un clone de Youtube en ReactJS",
		url: "https://youtube.skdigit.com",
		stack: ["ReactJS", "Material UI", "Youtube API"],
	},
	{
		num: "09",
		category: "Développement Wordpress / WebDesign",
		thumb: "/assets/img/kosho.png",
		title: "KoshoBrewers",
		description: "Une micro-brasserie sur fond de thématique Coréenne",
		url: "https://www.koshobrewers.com",
		stack: ["Wordpress", "ACF", "Sass"],
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper: any) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};
	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
				}}
				className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
			>
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
							<div className="flex flex-col gap-[30px]">
								<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
									{project.num}
								</div>
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration 500 capitalize">
									{project.title}
								</h2>
								<p className="text-white/60">{project.description}</p>
								<ul className="flex gap-4">
									{project.stack.map((item, index) => {
										return (
											<li key={index} className="text-xl text-accent">
												{item}
												{index !== project.stack.length - 1 && ","}
											</li>
										);
									})}
								</ul>
								<div className="border border-white/20"></div>
								<div className="flex gap-4 items-center">
									<Link href={project.url} target="_blank">
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
													<BsArrowUpRight />
												</TooltipTrigger>
												<TooltipContent>
													<p>Aller sur le site</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
									{/* <Link href={project.url}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
												<BsGithub />
											</TooltipTrigger>
											<TooltipContent>
												<p>Aller sur le site</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link> */}
								</div>
							</div>
						</div>
						<div className="w-full xl:w-[50%]">
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								className="xl:h-[520px] mb-12"
								onSlideChange={handleSlideChange}
							>
								{projects.map((item, index) => {
									return (
										<SwiperSlide key={index} className="w-full">
											<div className="lg:h-[460px] relative group flex justify-center items-center bg-primary">
												{/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/40 z-10"></div> */}
												<div>
													<Image
														src={item.thumb}
														fill
														className="object-cover"
														alt={item.title}
													/>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
								<WorkSliderBtns
									containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all duration-300"
									iconStyles="text-white"
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};
export default Work;
