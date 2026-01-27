"use client";

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import CsharpLogo from "@/app/images/logos/logo-csharp.svg";
import CssLogo from "@/app/images/logos/logo-css3.svg";
import HtmlLogo from "@/app/images/logos/logo-html5.svg";
import JavaLogo from "@/app/images/logos/logo-java.svg";
import JsLogo from "@/app/images/logos/logo-js.svg";
import NextjsLogo from "@/app/images/logos/logo-nextjs.svg";
import PhpLogo from "@/app/images/logos/logo-php.svg";
import ReactLogo from "@/app/images/logos/logo-react.svg";
import TailwindLogo from "@/app/images/logos/logo-tailwind-css.svg";
import TsLogo from "@/app/images/logos/logo-typescript.svg";


const TechStack = () => {

	const icons = [
		{
			name: "React",
			Icon: ReactLogo
		},
		{
			name: "Next.js",
			Icon: NextjsLogo
		},
		{
			name: "TypeScript",
			Icon: TsLogo
		},
		{
			name: "Tailwind",
			Icon: TailwindLogo
		},
		{
			name: "HTML5",
			Icon: HtmlLogo
		},
		{
			name: "CSS3",
			Icon: CssLogo
		},
		{
			name: "JavaScript",
			Icon: JsLogo
		},
		{
			name: "Java",
			Icon: JavaLogo
		},
		{
			name: "Csharp",
			Icon: CsharpLogo
		},
		{
			name: "PHP",
			Icon: PhpLogo
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

	const firstRow = icons.slice(0, 3);
	const secondRow = icons.slice(3);

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
			className="container-wide space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{firstRow.map(({ Icon, name }) => (
					<motion.div
						variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
						key={name}
						className="group flex items-center justify-center w-full aspect-video p-12 bg-primary-200 hover:bg-primary-900 rounded-2xl shadow-md hover:cursor-pointer transition-colors duration-300">
						<Icon className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 fill-primary-900 group-hover:fill-primary-200 transition-colors duration-300" />
					</motion.div>
					))
				}
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
				{secondRow.map(({ Icon, name }) => (
					<motion.div
						variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
						key={name}
						className="group flex items-center justify-center w-full aspect-video p-12 bg-primary-200 hover:bg-primary-900 rounded-2xl shadow-md hover:cursor-pointer transition-colors duration-300">
						<Icon className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 fill-primary-900 group-hover:fill-primary-200 transition-colors duration-300" />
					</motion.div>
					))
				}
			</div>
		</motion.div>
	);
};

export default TechStack;