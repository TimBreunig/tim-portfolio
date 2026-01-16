"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
		<header className={"fixed w-full h-full py-6 xl:py-10 z-50 pointer-events-none transition-all duration-500"}>
			<div className={"container-wide flex justify-between items-center xl:items-start pointer-events-auto"}>
				<Link href="/">
					<div className="font-bold text-3xl xl:text-4xl text-primary-100 -tracking-widest">
						TB <span className="text-purple-500">.</span>
					</div>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-10">
					<Nav />
				</div>

				{/* mobile nav */}
				<div className="xl:hidden">
					<Button
						variant="icon"
						size="icon"
						className="group"
					>
						<FontAwesomeIcon
							icon={faBars}
							className="relative w-full h-full text-2xl text-primary-100 z-10 group-hover:border-primary-100 group-hover:text-primary-900"
						/>
					</Button>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-6 xl:bottom-10">
				<div className="container-wide flex justify-between items-end">
					<Socials />
					<div className="font-secondary font-medium text-xl lg:text-2xl tracking-tight uppercase text-primary-600">
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