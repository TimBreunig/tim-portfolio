"use client";

import { motion, useAnimation } from 'framer-motion'
import Tile from "@/components/ui/tile";
import MotionHeading from "@/components/MotionHeading";


const TabGrid = () => {
	let tabs = [
		{
			title: "Digital Design",
			roles: ["UX", "UI", "Webdesign", "Wireframing", "Prototyping"],
			description: "Designing high-quality experiences from the first wireframes to a fully working prototype, balancing clear usability and aethetic visuals.",
		},
		{
			title: "Development",
			roles: ["Frontend Development", "SEO", "CMS", "Mobile Development", "Unit Testing"],
			description: "Crafting engaging digital products that combine appealing design with intuitive usability and modern technology.",
		},
	];


	const mainControls = useAnimation()

	return (
		<>
			<MotionHeading
				as="h2"
				onComplete={() => mainControls.start("show")}
				className="text-primary-100 text-left lg:text-right"
			>
				Skills<span className="accent-dot">.</span>
			</MotionHeading>

			<motion.div
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							duration: 0.6,
							staggerChildren: 0.25,
						},
					},
				}}
				initial="hidden"
				animate={mainControls}
			>
				<motion.div
					variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
					className="w-full box-border p-4 xl:p-8 bg-primary-100 rounded-xl xl:rounded-2xl shadow-md text-primary-900 transition-colors duration-300"
				>
					<div className="w-full bg-primary-200 rounded-lg xl:rounded-xl">
						{tabs.map((tab, index) => {
							return (
								<div key={index}>
									<div className="p-4 xl:p-8 grid grid-cols-1 xl:grid-cols-7 gap-4 xl:gap-12">
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
													<Tile
														key={index}
														text={role}
													/>
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
								</div>
							)
						})}
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default TabGrid;