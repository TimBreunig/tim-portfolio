"use client";

import { motion, useAnimation, useInView, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Link from "next/Link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const CardGrid = () => {
	const cards = [
		{
			title: "The Wandering Knight",
			genre: "Game",
			role: "Storytelling & Engineering",
			place: "Independent",
			date: "2024",
			path: "/images/IntroCutscene2_LowRes.gif",
			link: "/work/wandering-knight",
		},
		{
			title: "Project Mothership",
			genre: "Game",
			role: "Software Engineering",
			place: "Stuttgart Media University",
			date: "2024",
			path: "/images/ProjectMothershipTeaser.png",
			link: "/work/project-mothership",
		},
		{
			title: "Fembition",
			genre: "Web Design",
			role: "Web Design",
			place: "Independent",
			date: "2025",
			path: "/images/fembition_teaser.png",
			link: "/work/fembition",
		},
		{
			title: "Movie Night",
			genre: "App",
			role: "UI Design & Frontend Engineering",
			place: "Stuttgart Media University",
			date: "2024",
			path: "/images/movie_night_teaser.png",
			link: "/work/movie-night",
		},
		{
			title: "Chromania",
			genre: "Game",
			role: "Design & Engineering",
			place: "Stuttgart Media University",
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
								<div className="aspect-[16/10] rounded-xl overflow-hidden">
									<img alt="content" className="object-cover object-center h-full w-full group-hover:scale-105 transition-transform duration-300" src={card.path} />
								</div>
								<div className="relative px-4 pt-7 pb-2 rounded-b-xl overflow-hidden duration-300">
									<span className="block mb-3 text-3xl font-bold text-primary-900 group-hover:text-accent-500 transition-colors">{card.title}</span>
									<FontAwesomeIcon icon={faArrowRight} className="absolute w-7 h-7 p-1 top-7 right-3 text-primary-900 group-hover:text-accent-500 group-hover:-rotate-45 transition-all duration-300"/>
									<p className="-mt-1 font-secondary font-semibold text-xl uppercase text-primary-600 group-hover:text-primary-500 leading-relaxed transition-colors">
									{card.genre} &#8211; {card.role}
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