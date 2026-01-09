"use client";

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const CardGrid = () => {
	const cards = [
		{
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
		},
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
		{
			title: "Chromania",
			description: "A personal indie top-down adventure game about magic, color and mental health",
			roles: ["Game Design", "Game Art", "Engineering"],
			date: "2023",
			path: "/images/ChromaniaTeaser.png",
			link: "/work/chromania",
		},
	];

	const containerRef = useRef(null)

	const isInView = useInView(containerRef, { once: true })
	const mainControls = useAnimation()

	useEffect(() => {
		if(isInView) {
			mainControls.start("show")
		}
	}, [isInView])

	return (		
		<motion.div
			ref={containerRef}
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						ease: "easeOut",
						duration: 0.5,
						staggerChildren: 0.15,
					},
				},
			}}
			initial="hidden"
			animate={mainControls}
			className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{cards.map((card, index) => {
					return (
						<motion.div
							variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
							className="group flex-2 w-full box-border mb-0 xl:mb-2 bg-primary-100 rounded-2xl shadow-md hover:cursor-pointer transition-colors duration-300"
							>
							<Link key={index}
								href={card.link}
								className="block p-5">
								<div className="relative aspect-16/10 rounded-xl overflow-hidden">
									<Image
										fill
										alt="content"
										className="object-cover object-center h-full w-full group-hover:scale-105 transition-transform duration-300"
										src={card.path}
									/>
								</div>
								<div className="relative px-4 pt-7 pb-2 rounded-b-xl overflow-hidden duration-300">
									<span className="block mb-3 text-3xl font-bold text-primary-900 group-hover:text-purple-400 transition-colors">{card.title}</span>
									<div className="absolute top-7 right-3 flex justify-end items-center gap-4">
										<div className="flex gap-3 flex-wrap">
											{card.roles.map((role, index) => (
												<div
													key={index}
													className="px-4 py-2 font-semibold text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md"
												>
													{role}
												</div>
											))}
										</div>
										<FontAwesomeIcon
											icon={faArrowRight}
											className="w-7 h-7 p-1 text-2xl text-primary-900 group-hover:text-purple-400 group-hover:-rotate-45 transition-all duration-300"
										/>
									</div>
									<p className="-mt-1 font-secondary font-semibold text-xl uppercase text-primary-600 group-hover:text-primary-500 tracking-wider leading-relaxed transition-colors truncate">
										{card.description}
									</p>
								</div>
							</Link>
						</motion.div>
					);
				})}
    	</motion.div>
	);
};

export default CardGrid;