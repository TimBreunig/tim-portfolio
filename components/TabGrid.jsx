"use client";

import React from "react";

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCode, faGlobe, faPalette, faFilm } from '@fortawesome/free-solid-svg-icons'


const TabGrid = () => {
	let tabs = [
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
			title: "Game Development",
			icon: faCode,
			text: "Being proficient in working with multiple Game Engines like Unity, Unreal Engine and Godot, I realize existing game concepts with clean implementation and an eye for detail.",
		},
	];

	return (	
		<div className="flex flex-col">
			{tabs.map((tab, index) => {
					return (
						<div key={index}
							className="w-full">
							<div className="hex-icon-wrapper mx-auto flex items-center justify-center w-24 h-24 bg-linear-to-br from-purple-400 to-purple-600 shadow-2xl/60">
                                <FontAwesomeIcon icon={tab.icon} className="w-10 h-10 text-4xl text-primary-900" />
                            </div>
       						<div className="-mt-12 group flex items-center justify-center w-full aspect-video p-12 bg-primary-200 rounded-2xl shadow-md hover:cursor-pointer">
								<div className="px-16 pt-10 text-left">
									<h3 className="h3 text-accent-900">{tab.title}</h3>
       						    	<p className="p-2xl mt-2 text-primary-800 leading-relaxed">
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