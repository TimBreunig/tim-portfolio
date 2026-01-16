"use client";

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCode, faGlobe, faPalette, faFilm } from '@fortawesome/free-solid-svg-icons'


const TabGrid = () => {
	let tabs = [
		{
			title: "Digital Design",
			roles: ["UX", "UI", "Webdesign", "Wireframing", "Prototyping", "Graphic Design"],
			description: "Designing high-quality experiences from the first wireframes to a fully working prototype, balancing clear usability and aethetic visuals.",
		},
		{
			title: "Development",
			roles: ["Frontend Development", "SEO", "CMS", "Mobile Development", "Unit Testing"],
			description: "Crafting engaging digital products that combine appealing design with intuitive usability and modern technology.",
		},
		{
			title: "Communication",
			roles: ["Storyboarding", "Video Production", "Social Media", "Community Management"],
			description: "Managing communication and social media channels and producing content suitable for the respective target group.",
		},
	];

	const containerRef = useRef(null)

	const isInView = useInView(containerRef, { once: true })
	const mainControls = useAnimation()

	useEffect(() => {
		if(isInView) {
			mainControls.start("show")
		}
	}, [isInView, mainControls])

	return (
		<motion.div
			ref={containerRef}
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
			initial="hidden"
			animate={mainControls}
			className=""
		>
			<motion.div
				variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
				className="w-full box-border p-4 xl:p-8 bg-primary-100 rounded-xl xl:rounded-2xl shadow-md text-primary-900 transition-colors duration-300"
			>
				<div className="w-full bg-primary-200 rounded-lg xl:rounded-xl">
					{tabs.map((tab, index) => {
						return (
							<>
								<div className="p-8 grid grid-cols-1 xl:grid-cols-7 gap-4 xl:gap-12">
									<div
										key={index} 
										className="xl:col-span-3"
									>
										<h3 className="h3">
											{tab.title}<span className="accent-dot">.</span>
										</h3>
									</div>
									
									<div className="xl:col-span-2">
										<div className="flex flex-wrap gap-2 xl:gap-3">
											{tab.roles.map((role, index) => (
												<div
													key={index}
													className="px-3 xl:px-4 py-0 xl:py-2 font-semibold text-[0.625rem] xl:text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md"
												>
													{role}
												</div>
												)
											)}
										</div>
									</div>

									<div className="xl:col-span-2">
										<p className="p-2xl">
											{tab.description}
										</p>
									</div>
								</div>

								{index < tabs.length - 1 && (
									<div className="h-0.5 mx-8 rounded bg-primary-300" />
								)}
							</>
						)
					})}
				</div>
			</motion.div>
    	</motion.div>
	);
};

export default TabGrid;