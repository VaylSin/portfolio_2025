"use client";
import React from "react";
import CountUp from "react-countup";

const statsPerso = [
	{
		number: 25,
		title: "Projets réalisés",
	},

	{
		number: 7,
		title: "Années d'expérience",
	},
	{
		number: 500,
		title: "Commits Github",
	},
	{
		number: 8,
		title: "Technologies maitrisées",
	},
];

const Stats = () => {
	return (
		<section className="container mx-auto">
			<div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-6 xl:gap-0">
				{statsPerso.map((stat, index) => (
					<div
						key={index}
						className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
					>
						<CountUp
							end={stat.number}
							duration={5}
							delay={2}
							className="text-4xl xl:text-6xl font-extrabold text-accent"
						/>
						<p
							className={`${
								stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
							} leading-snug text-white/80`}
						>
							{stat.title}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Stats;
