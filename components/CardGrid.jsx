"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Tile from "@/components/ui/tile";


const CardGrid = ({ showCompact }) => {
	const cards = [
		/*{
			title: "The Wandering Knight",
			description: "Game",
			roles: ["Storytelling", "Engineering"],
			date: "2024",
			path: "/images/IntroCutscene2_LowRes.gif",
			link: "/work/wandering-knight",
		},
		{
			title: "Project Mothership",
			description: "Local-coop rogue-like videogame",
			roles: ["Engineering"],
			date: "2024",
			path: "/images/ProjectMothershipTeaser.png",
			link: "/work/project-mothership",
		},*/
		{
			title: "Fembition",
			description: "Website for an imaginary esports-organization empowering female players",
			roles: ["Web Design"],
			date: "2025",
			path: "/images/fembition_teaser.png",
			link: "/work/fembition",
		},
		{
			title: "Movie Night",
			description: "Mobile-first Web Application for organizing movie nights with friends",
			roles: ["UI Design", "Frontend Development"],
			date: "2024",
			path: "/images/movie_night_teaser.png",
			link: "/work/movie-night",
		},
		/*{
			title: "Chromania",
			description: "A personal indie top-down adventure game about magic, color and mental health",
			roles: ["Game Design", "Game Art", "Engineering"],
			date: "2023",
			path: "/images/ChromaniaTeaser.png",
			link: "/work/chromania",
		},*/
	];

	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("show");
		}
	}, [isInView, mainControls]);


	const visibleCards = showCompact ? cards.slice(0, 2) : cards;
	const showButton = showCompact;

	return (
		<>
			<motion.div
				ref={containerRef}
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							ease: "easeInOut",
							duration: 0.6,
							staggerChildren: 0.2,
						},
					},
				}}
				initial="hidden"
				animate={mainControls}
				className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6"
			>
				{visibleCards.map((card, index) => (
					<motion.div
						key={index}
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0 },
						}}
						className="group w-full bg-primary-100 rounded-xl xl:rounded-2xl shadow-md hover:cursor-pointer transition-colors duration-300"
					>
						<Link href={card.link} className="block p-2 xl:p-5">
							<div className="relative aspect-16/10 rounded-lg xl:rounded-xl overflow-hidden">
								<Image
									src={card.path}
									alt={card.title}
									className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
									fill
									sizes="90vw, (min-width: 1024px) 50vw"
								/>
							</div>

							<div className="relative px-2 xl:px-4 pt-3 xl:pt-7 pb-2 text-left rounded-b-xl overflow-hidden">
								<div className="w-full mb-2 xl:mb-3 flex flex-row gap-5 items-start xl:items-center">
									<div className="w-full flex flex-col xl:flex-row gap-1 xl:justify-between xl:gap-auto">
										<span className="block text-xl xl:text-3xl font-semibold xl:font-bold text-primary-900 group-hover:text-purple-500 transition-colors">
											{card.title}
										</span>

										<div className="flex gap-2 xl:gap-3 flex-wrap">
											{card.roles.map((role, index) => (
												<Tile 
													key={index}
													text={role}
												/>
											))}
										</div>
									</div>
									<FontAwesomeIcon
										icon={faArrowRight}
										className="w-7 h-7 -mr-1 p-1 text-base xl:text-2xl text-primary-900 group-hover:text-purple-500 group-hover:-rotate-45 transition-all duration-300"
									/>
								</div>
								

								

								<p className="-mt-1 font-secondary font-semibold text-sm xl:text-xl uppercase text-primary-600 group-hover:text-primary-500 tracking-wider leading-relaxed truncate">
									{card.description}
								</p>
							</div>
						</Link>
					</motion.div>
				))}
			</motion.div>

			{showButton && (
				<div className="flex justify-center">
					<Link href="/work">
						<Button
							variant="light"
							size="xl"
							className="group mt-4 xl:mt-12"
						>
							See all
							<FontAwesomeIcon
								icon={faArrowRight}
								className="w-6 h-6 p-2 text-base xl:text-2xl group-hover:-rotate-45 transition-all duration-300"
							/>
						</Button>
					</Link>
				</div>
			)}
		</>
	);
};

export default CardGrid;