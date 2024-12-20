"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CardGrid = () => {
	let [current, setCurrent] = useState(0);

	let previousSlide = () => {
		if(current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if(current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};

	let cards = [
		{
			title: "Project Mothership",
			genre: "Game",
			role: "Software Engineering",
			place: "Stuttgart Media University",
			date: "2024",
			path: "https://www.hdm-stuttgart.de/stage/mediafiles/4413/galerie/Img0.png",
		},
		{
			title: "Chromania",
			genre: "Game",
			role: "Design & Engineering",
			place: "Stuttgart Media University",
			date: "2023",
			path: "https://preview.redd.it/trees-mountains-japanese-painting-1920x1080-v0-y9nyfcv39awa1.jpg?auto=webp&s=72153eaa723c15680052d18f6fa1545cac8699af",
		},
		{
			title: "Project A",
			genre: "Website",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "https://i.redd.it/1yxsh7cbkux41.jpg",
		},
		{
			title: "Project B",
			genre: "App",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "https://preview.redd.it/digital-art-1920x1080-v0-3v02j6si59va1.jpg?auto=webp&s=a18397832a446ca2f35ef6b05b225f0513b0936a",
		},
		{
			title: "Project C",
			genre: "Video",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "https://i.redd.it/alv7zok8df851.jpg",
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