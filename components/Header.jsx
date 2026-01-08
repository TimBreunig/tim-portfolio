"use client";

import React, { useEffect, useState } from "react";
import Link from "next/Link";
import { Button } from "./ui/button";

import Socials from "@/components/Socials";
import Typewriter from 'typewriter-effect';

// components
import Nav from "./Nav";

const Header = () => {
	const [transparent, setTransparent] = useState(true);

  	const handleScroll = () => {
    	const currentScrollPos = window.scrollY

		if(currentScrollPos > 0) {
			setTransparent(false)
		} else {
			setTransparent(true)
		}
	};

	useEffect( () => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<header className={"fixed w-full h-full py-10 z-50 pointer-events-none transition-all duration-500 ${transparent ? '' : ''} "}>
			<div className={"container-wide flex justify-between items-start pointer-events-auto"}>
				<Link href="/">
					<div className="text-4xl font-bold text-primary-100 tracking-[-0.1em]">
						TB <span className="text-purple-500">.</span>
					</div>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-10 2xl:gap-10">
					<Nav />
				</div>

				{/* mobile nav */}
				<div className="xl:hidden">
					mobile nav
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-10 pointer-events-auto">
				<div className="container-wide flex justify-between items-end">
					<Socials />
					<div className="font-secondary font-medium text-2xl uppercase text-primary-600">
						&#91;
						<span className="inline-block">
							<Typewriter
							options={{
								strings: ["Design", "Build", "Create"],
								autoStart: true,
								loop: true,
								delay: 75,
								deleteSpeed: 60,
								pauseFor: 2400,
							}}
							/>
						</span>
						with passion&#93;
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;