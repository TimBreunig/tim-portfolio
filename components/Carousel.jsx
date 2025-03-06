"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
	let [current, setCurrent] = useState(0);

	let previousSlide = () => {
		if(current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if(current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};

	let slides = [
		{
			title: "Project Mothership",
			genre: "Game",
			desc: "Project Mothership is a cooperative rogue-like game with Souls-inspired combat system in a top-down 2.5D perspective. As two astronauts, you have been stranded on a distant planet and are now trying to find the way back to your mothership. The game has been originally developed by a team of 24 students at Stuttgart Media University in the Game Internship module.",
			path: "https://i.redd.it/2cx2lq2hh5na1.jpg",
		},
		{
			title: "Chromania",
			genre: "Game",
			desc: "Chromania is a 2D platformer game developed for mobile. It's inspired by succesful platformers like Super Mario Bros or Hollow Knight and combines them with a unique pixel-art-style, giving it a slight retro touch. Chromania was developed as a solo project for a lecture in university.",
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
		<div className="relative h-screen overflow-hidden">
			<div
				className="relative flex mix-blend-overlay transition ease-out duration-300"
				style={{
					transform: `translateX(-${current * 100}%)`
				}}
			>
				
				{slides.map((slide, index) => {

					console.log(slide.path)
					return (
						<>
							<img
								key={index}
								src={slide.path}
								className="w-screen object-cover"
							/>
						</>
					);
				})}
			</div>
			<div className="absolute w-full h-full top-0 bg-gradient-to-b from-primary-300/20 via-primary-300 via-40% to-primary-100 -z-10" />

			<div className="absolute w-full h-full top-0 px-8 flex justify-between items-center z-10">
				<button onClick={previousSlide}>
					<FontAwesomeIcon icon={faChevronLeft} className="w-10 h-10 p-2 rounded-lg text-primary-900/50 hover:text-primary-900 transition-colors duration-300" />
				</button>
				<div className="container h-full flex flex-col items-center justify-center text-center">
					<h2 className="h2 text-primary-900">
						{slides[current].title}
					</h2>
					<p className="max-w-[900px] mb-6 text-primary-800">
						{slides[current].desc}
					</p>
					<div>
						<Button variant="outline">
							<span>More Details</span>
						</Button>
					</div>
				</div>
				<button onClick={nextSlide}>
					<FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 p-2 rounded-lg text-primary-900/50 hover:text-primary-900 transition-colors duration-300" />
				</button>
			</div>
			
			<div className="absolute w-full bottom-0 pb-10 flex justify-center gap-2 z-10">
				{slides.map((slide, index) => {
					return (
						<div
							onClick={() => {
								setCurrent(index);
							}}
							className={`px-2 py-4 cursor-pointer`}
							key={"circle" + index}
						>
							<div className={`w-8 h-1 rounded-full shadow-lg transition-colors duration-300 ${index==current ? "bg-primary-900" : "bg-primary-900/50" }`}
							></div>
						</div>
					);
				})}
			</div>

			{/*<div className="container w-full h-screen xl:pt-8 xl:pb-24">
				<div className="relative h-full flex items-center">
					<img className="gallery-item gallery-item-1"
						src="https://i.redd.it/2cx2lq2hh5na1.jpg"
						data-index="1"
					/>
					<img className="gallery-item gallery-item-2"
						src="https://preview.redd.it/trees-mountains-japanese-painting-1920x1080-v0-y9nyfcv39awa1.jpg?auto=webp&s=72153eaa723c15680052d18f6fa1545cac8699af"
						data-index="2"
					/>
					<img className="gallery-item gallery-item-3"
						src="https://i.redd.it/1yxsh7cbkux41.jpg"
						data-index="3"
					/>
					<img className="gallery-item gallery-item-4"
						src="https://preview.redd.it/digital-art-1920x1080-v0-3v02j6si59va1.jpg?auto=webp&s=a18397832a446ca2f35ef6b05b225f0513b0936a"
						data-index="4"
					/>
					<img className="gallery-item gallery-item-5"
						src="https://i.redd.it/alv7zok8df851.jpg"
						data-index="5"
					/>
				</div>
			</div>*/}
		</div>
	);
};

export default Carousel;