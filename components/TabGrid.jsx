"use client";

import React from "react";

import Link from "next/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCode, faGlobe, faPalette, faFilm } from '@fortawesome/free-solid-svg-icons'


const TabGrid = () => {

	let tabs = [
		{
			title: "Game Design",
			icon: faGamepad,
			text: "I am passionate in creating immersive gaming experiences. With my acquired expertise in storytelling, game mechanics and various design aspects, I love bringing unique visions to life.",
		},
		{
			title: "Game Development",
			icon: faCode,
			text: "Being proficient in working with multiple Game Engines like Unity, Unreal Engine and Godot, I realize existing game concepts with clean implementation and an eye for detail.",
		},
		{
			title: "Web Dev Frontend",
			icon: faGlobe,
			text: "I love designing and building websites with modern tools and state-of-the-art frameworks like React and Tailwind, combining smooth performance with responsiveness and an appealing design.",
		},
		{
			title: "User Interface Design",
			icon: faPalette,
			text: "A unique and modern look is essential for building a successful application. With tools like Figma, I create and prototype clean, aesthetic and user-friendly designs for all kinds of software.",
		},
		{
			title: "Video Editing",
			icon: faFilm,
			text: "Having decent experience in video cutting, color grading and sound mixing with a variety of tools like Wondershare Filmora or DaVinci Resolve, I create immersive, eye-catching films and clips.",
		},
	];

	return (	
		<div className="flex flex-wrap flex-col xl:flex-row items-center justify-center gap-[2%]">
			{tabs.map((tab, index) => {
					return (
						<div key={index}
							className="flex-2 items-center box-border w-[32%]">
							<div className="hex-icon-wrapper mx-auto flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-600 to-accent-400 shadow-2xl/60">
                                <FontAwesomeIcon icon={tab.icon} className="w-10 h-10 text-primary-900" />
                            </div>
       						<div className="h-72 -mt-12 mb-7 rounded-xl bg-primary-200 shadow-2xl/75">
								<div className="text-center px-16 pt-20">
									<h3 className="h3 font-bold text-accent-900">{tab.title}</h3>
       						    	<p className="text-sm text-primary-800 leading-relaxed mt-2">
							        	{tab.text}
							    	</p>
								</div>
                            </div>
						</div>
					);
				})}
    	</div>
	);
};

export default TabGrid;