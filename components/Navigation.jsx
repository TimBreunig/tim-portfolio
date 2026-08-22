"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/components/context/PageTransitionContext";
import getEmail from "@/utils/getEmail";


const links = [
	{
		name: "About",
		path: "/",
	},
	{
		name: "work",
		path: "/work",
	},
];


const Navigation = ({ onNavigate, "aria-label": ariaLabel }) => {
	const pathname = usePathname();
	const { navigate } = usePageTransition();

	const handleNavigate = (href) => {
		onNavigate?.();
		navigate(href);
	};

	return (
		<nav className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-center lg:text-right" aria-label={ariaLabel}>
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
				{links.map((link, index) => (
					<Link
						key={index}
						href={link.path}
						
						onClick={(event) => {
							event.preventDefault();
							handleNavigate(link.path);
						}}
						className={`text-xl hover:text-purple-500 tracking-wide capitalize transition-all duration-300 ${
								pathname.includes(link.path) ? "font-semibold text-primary-400" : "font-medium text-primary-700"
							}`}
						>
						{link.name}
					</Link>
				))}
			</div>
			<Button
				variant="default"
				size="lg"
				className="lg:px-7 lg:py-4 lg:text-xl"
				asChild
			>
				<a
					href={`mailto:${getEmail()}`}
					className="group flex flex-col overflow-hidden justify-start gap-4"
				>
					<div className="h-7 overflow-hidden">
						<span className="block tracking-normal group-hover:-translate-y-7 transition-all duration-300 ease-out">Get in touch</span>
						<span className="block tracking-normal group-hover:-translate-y-7 transition-all duration-300 ease-out">Get in touch</span>
					</div>
				</a>	
			</Button>
		</nav>
	);
};

export default Navigation;