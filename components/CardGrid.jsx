"use client";

import React from "react";

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
		},
		{
			title: "Project Mothership",
			genre: "Game",
			role: "Software Engineering",
			place: "Stuttgart Media University",
			date: "2024",
			path: "https://www.hdm-stuttgart.de/stage/mediafiles/4413/galerie/Img0.png",
		},
		{
			title: "Expiravoid",
			genre: "App Concept",
			role: "UI Design & Prototyping",
			place: "Stuttgart Media University",
			date: "2024",
			path: "https://preview.redd.it/trees-mountains-japanese-painting-1920x1080-v0-y9nyfcv39awa1.jpg?auto=webp&s=72153eaa723c15680052d18f6fa1545cac8699af",
		},
		{
			title: "Movie Night",
			genre: "App",
			role: "UI Design & Frontend Engineering",
			place: "Stuttgart Media University",
			date: "2024",
			path: "https://preview.redd.it/trees-mountains-japanese-painting-1920x1080-v0-y9nyfcv39awa1.jpg?auto=webp&s=72153eaa723c15680052d18f6fa1545cac8699af",
		},
		{
			title: "Chromania",
			genre: "Game",
			role: "Design & Engineering",
			place: "Stuttgart Media University",
			date: "2023",
			path: "https://preview.redd.it/trees-mountains-japanese-painting-1920x1080-v0-y9nyfcv39awa1.jpg?auto=webp&s=72153eaa723c15680052d18f6fa1545cac8699af",
		},
	];

	return (
		
		
		<div class="flex flex-wrap flex-col xl:flex-row items-center gap-[2%]">
			{cards.map((card, index) => {
					return (
						<div key={index}
							className="group flex-2 box-border w-[32%] p-4 mb-7 rounded-xl border border-transparent bg-primary-100 hover:bg-primary-0 hover:border hover:border-primary-500/40 hover:cursor-pointer transition-colors duration-300">
        					<div className="rounded-lg h-64 overflow-hidden">
          						<img alt="content" className="object-cover object-center h-full w-full" src={card.path} />
       						</div>
       						<div className="relative px-6 py-6 mt-3 rounded-lg bg-primary-200 group-hover:bg-primary-100 overflow-hidden transition-colors duration-300">
								<h2 className="h3 font-bold text-accent-900">{card.title}</h2>
								<FontAwesomeIcon icon={faArrowRight} className="absolute w-5 h-5 p-1 top-6 right-5 text-accent-900 group-hover:-rotate-45 transition-transform duration-300"/>
       							<p className="text-sm leading-relaxed mt-2">
								   {card.genre} &#8211; {card.role}
								</p>
       							<p className="text-xs text-primary-700 inline-flex items-center mt-8">
								   {card.place}
								   <FontAwesomeIcon icon={faCircle} className="w-1 h-1 mx-2" />
								   {card.date}
       							</p>
							</div>
      					</div>
					);
				})}
    	</div>
	);
};

export default CardGrid;