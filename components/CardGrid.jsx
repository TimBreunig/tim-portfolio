"use client";

import React from "react";

import Link from "next/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const CardGrid = () => {

	let cards = [
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
			title: "Expiravoid",
			genre: "App Concept",
			role: "UI Design & Prototyping",
			place: "Stuttgart Media University",
			date: "2024",
			path: "/images/ExpiravoidTeaser.png",
			link: "/work/project-mothership",
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

	return (		
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
			{cards.map((card, index) => {
					return (
						<Link key={index}
							href={card.link}
							className="group flex-2 box-border w-full mb-0 xl:mb-10 rounded-xl  hover:cursor-pointer transition-colors duration-300">
        					<div className="h-64 rounded-xl shadow-xl overflow-hidden">
          						<img alt="content" className="object-cover object-center h-full w-full group-hover:scale-105 transition-transform duration-300" src={card.path} />
       						</div>
       						<div className="relative px-2 pt-6 rounded-b-xl overflow-hidden transition-colors duration-300">
								<h3 className="h3 font-bold text-primary-900">{card.title}</h3>
								<FontAwesomeIcon icon={faArrowRight} className="absolute w-5 h-5 p-1 top-6 right-1 text-primary-900 group-hover:-rotate-45 transition-transform duration-300"/>
       							<p className="text-primary-700 leading-relaxed">
								   {card.genre} &#8211; {card.role}
								</p>
							</div>
      					</Link>
					);
				})}
    	</div>
	);
};

export default CardGrid;