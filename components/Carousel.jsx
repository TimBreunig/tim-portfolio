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
			path: "/images/IntroCutscene2_LowRes.gif",
		},
		{
			title: "Chromania",
			genre: "Game",
			desc: "Chromania is a 2D platformer game developed for mobile. It's inspired by succesful platformers like Super Mario Bros or Hollow Knight and combines them with a unique pixel-art-style, giving it a slight retro touch. Chromania was developed as a solo project for a lecture in university.",
			path: "/images/ProjectMothershipTeaser.png",
		},
		{
			title: "Project A",
			genre: "Website",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "/images/fembition_teaser.png",
		},
		{
			title: "Project B",
			genre: "App",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "/images/movie_night_teaser.png",
		},
		{
			title: "Project C",
			genre: "Video",
			desc: "Project Mothership ist als kooperatives Rogue-like mit Souls-inspiriertem Kampfsystem in einer top-down 2.5D perspective gedacht. Das Spiel wird von Studenten der Hochschule der Medien Stuttgart im Modul Game Praktikum entwickelt. Ein Team von 24 Studenten ist beauftragt ein Spiel zu entwickeln, dabei den Entwicklungsprozess eigenständig zu organisieren, und dieses dann an dem MediaNight Event der Hochschule zu demonstrieren.",
			path: "/images/ChromaniaTeaser.png",
		},
	];

	return (
		<div className="relative overflow-hidden">
			<div
				className="relative flex transition ease-out duration-300"
				style={{
					transform: `translateX(-${current * 100/3}%)`
				}}
			>
				
				{slides.map((slide, index) => {
					return (
						<>
							<img
								key={index}
								src={slide.path}
								className="w-1/3 mb-12 aspect-video rounded-2xl"
							/>
						</>
					);
				})}
			</div>

			<div className="absolute w-full h-full top-0 px-8 flex justify-between items-center z-10">
				<button onClick={previousSlide}>
					<FontAwesomeIcon icon={faChevronLeft} className="w-10 h-10 p-2 rounded-lg text-primary-900/50 hover:text-primary-900 transition-colors duration-300" />
				</button>
				<button onClick={nextSlide}>
					<FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 p-2 rounded-lg text-primary-900/50 hover:text-primary-900 transition-colors duration-300" />
				</button>
			</div>
		</div>
	);
};

{/*	return (
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
		</div>

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
		</div>
	);
};*/}

export default Carousel;