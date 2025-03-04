"use client";
import Photo from "../components/Photo";
import Socials from "../components/Socials";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // Import correct

const Home = () => {
	return (
		<section className="h-full xl:h-[calc(100vh-220px)]">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{
							opacity: 1,
							x: 0,
							transition: { delay: 2, duration: 0.75, ease: "easeInOut" },
						}}
						className="flex flex-col gap-8 xl:w-[50%] xl:h-[460px] xl:justify-between order-2 xl:order-none"
					>
						<div className="text-center xl:text-left order-2 xl:order-none">
							<span className="text-xl">Développeur Web Freelance</span>
							<h2 className="h1 mb-6 leading-tight">
								Bienvenue chez
								<br />
								<span className="text-accent">SKDigit</span>
							</h2>
							<p className="max-w-[500px] mb-9 text-white/80">
								Basé dans la magnifique Sud-Ardèche, j’accompagne mes clients
								dans la création de projets web sur-mesure, en alliant
								performance, créativité et expertise technique.
							</p>
							<div className="flex flex-col xl:flex-row items-center gap-8">
								<Link
									href="/assets/docs/cv-skdigit-2025.pdf"
									download
									target="_blank"
								>
									<Button
										variant="outline"
										size="lg"
										className="uppercase flex items-center gap-2"
									>
										<span>Télecharger mon CV</span>
										<FiDownload className="text-xl" />
									</Button>
								</Link>
								<div className="mb-8 xl:mb-0">
									<Socials
										containerStyles="flex gap-6"
										iconStyles="w-9 h-9 border border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
									/>
								</div>
							</div>
						</div>
					</motion.div>
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Home;
