"use client";

import { motion, useAnimation } from "framer-motion";
import Tile from "@/components/ui/tile";
import MotionHeading from "@/components/MotionHeading";

const TabGrid = () => {
	const tabs = [
		{
			title: "Brand Identity",
			roles: ["Graphic Design", "Color Scheme", "Typography", "Content Strategy"],
			description:
				"Shaping a unique brand identity tailored to the specific expectations and desires of the target audiences. Translating the key aspects of the brand into compelling visuals and content strategies.",
		},
		{
			title: "Digital Design",
			roles: ["UX", "UI", "Webdesign", "Wireframing", "Prototyping"],
			description:
				"Designing high-quality digital experiences from the first wireframes to a fully functioning prototype. Balancing modern, aesthetic visuals with clear, accessible user flows to maximize customer satisfaction.",
		},
		{
			title: "Development",
			roles: [
				"Frontend Development",
				"SEO",
				"CMS",
				"Mobile Development",
				"Unit Testing",
			],
			description:
				"Crafting engaging digital products that combine appealing design with intuitive usability and cutting-edge technology. Improving performance and optimizing page rankings to increase conversion.",
		},
	];

	const mainControls = useAnimation();

	return (
		<>
			<MotionHeading
				as="h2"
				onComplete={() => mainControls.start("show")}
				className="text-primary-100 text-left lg:text-right"
			>
				Skillset<span className="accent-dot">.</span>
			</MotionHeading>

			{/* OUTER SECTION — animates once */}
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 20 },
					show: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.6 },
					},
				}}
				initial="hidden"
				animate={mainControls}
				className="w-full box-border p-3 lg:p-6 bg-primary-100 rounded-xl lg:rounded-2xl shadow-md text-primary-900"
			>
				<div className="grid grid-cols-1 lg:grid-cols-12 px-3 lg:px-8 py-8 lg:py-20 p-7xl">
					<div className="hidden lg:block lg:col-span-2" />
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 10 },
							show: { opacity: 1, y: 0 },
						}}
						className="lg:col-span-10"
					>
						With a focus on quality and consistency, I bring a constantly evolving skillset that connects brand identity, design, and development from start to finish.
					</motion.div>
				</div>

				<div className="w-full bg-primary-200 rounded-lg lg:rounded-xl">
					{tabs.map((tab, index) => (
						<div key={index}>
						{/* EACH ROW — animates independently on scroll */}
						<motion.div
							variants={{
							hidden: { opacity: 0, y: 20 },
							show: {
								opacity: 1,
								y: 0,
								transition: {
								staggerChildren: 0.1,
								},
							},
							}}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-100px" }}
							className="p-4 lg:px-6 lg:py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 xl:gap-12"
						>
							<div className="lg:col-span-2">
							<motion.span
								variants={{
								hidden: { opacity: 0, y: 10 },
								show: { opacity: 1, y: 0 },
								}}
								className="block mb-2 text-[0.875rem] lg:text-[1rem] font-semibold text-primary-600 uppercase tracking-wider"
							>
								{(index + 1).toString().padStart(2, "0")}
							</motion.span>
							</div>

							<div className="lg:col-span-4">
							<motion.h3
								variants={{
								hidden: { opacity: 0, y: 10 },
								show: { opacity: 1, y: 0 },
								}}
								className="h3"
							>
								{tab.title}
								<span className="accent-dot">.</span>
							</motion.h3>
							</div>

							<div className="flex flex-col gap-4 lg:gap-6 lg:col-span-6">
							<motion.div
								variants={{
								hidden: { opacity: 0, y: 10 },
								show: { opacity: 1, y: 0 },
								}}
								className="-ml-1 flex flex-wrap gap-2 lg:gap-3"
							>
								{tab.roles.map((role, roleIndex) => (
								<Tile key={roleIndex} text={role} />
								))}
							</motion.div>

							<motion.p
								variants={{
								hidden: { opacity: 0, y: 10 },
								show: { opacity: 1, y: 0 },
								}}
								className="p-2xl"
							>
								{tab.description}
							</motion.p>
							</div>
						</motion.div>

						{index < tabs.length - 1 && (
							<div className="h-0.5 lg:mx-6 rounded bg-primary-300" />
						)}
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default TabGrid;