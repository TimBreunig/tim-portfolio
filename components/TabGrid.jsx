"use client";

import React from "react";

import Link from "next/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const TabGrid = () => {

	let tabs = [
		{
            path: "/images/ProjectMothershipTeaser.png",
			title: "Game Design",
			text: "I am passionate in creating immersive gaming experiences. With my acquired expertise in storytelling, game mechanics and various design aspects, I love helping to bring unique visions to life.",
		},
		{
			path: "/images/ChromaniaTeaser.png",
			title: "Game Development",
			text: "I am passionate in creating immersive gaming experiences. With my acquired expertise in storytelling, game mechanics and various design aspects, I love helping to bring unique visions to life.",
		},
		{
            path: "/images/MovieNightTeaser.png",
			title: "Web Development Frontend",
			text: "I am passionate in creating immersive gaming experiences. With my acquired expertise in storytelling, game mechanics and various design aspects, I love helping to bring unique visions to life.",
		},
		{
            path: "/images/ExpiravoidTeaser.png",
			title: "User Interface Design",
			text: "I am passionate in creating immersive gaming experiences. With my acquired expertise in storytelling, game mechanics and various design aspects, I love helping to bring unique visions to life.",
		},
	];

	return (	
		<div className="flex flex-wrap flex-col xl:flex-row items-center gap-[2%]">
			{tabs.map((tab, index) => {
					return (
						<div key={index}
							className="group flex items-center box-border w-[49%] h-48 mb-7 rounded-xl bg-primary-200">
                            <div className="w-[25%] h-full rounded-l-xl overflow-hidden">
          						<img alt="content" className="h-full object-cover object-center" src={tab.path} />
       						</div>
       						<div className="w-[75%] pl-8 pr-10">
                                <h3 className="h3 font-bold text-accent-900">{tab.title}</h3>
       						    <p className="text-sm text-primary-800 leading-relaxed mt-2">
							        {tab.text}
							    </p>
                            </div>
						</div>
					);
				})}
    	</div>
	);
};

export default TabGrid;