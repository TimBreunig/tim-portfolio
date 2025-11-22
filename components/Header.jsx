"use client";

import React, { useEffect, useState } from "react";
import Link from "next/Link";
import { Button } from "./ui/button";

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
		<header className={`fixed w-full py-8 xl:py-12 z-50 transition-all duration-500 ${transparent ? 'bg-transparent border-b-0 border-primary-500/0' : 'bg-primary-100/50 py-6 xl:py-6 border-b border-primary-500/40 backdrop-blur-lg'} `}>
			<div className={`container flex justify-between items-center text-primary-600 `}>
				<Link href="/">
					<h1 className="text-4xl font-semibold text-primary-900">
						TB <span className="text-accent-500">.</span>
					</h1>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-10 2xl:gap-14">
					<Nav />
					<Link href="/contact">
						<Button>
							Contact
						</Button>
					</Link>
				</div>

				{/* mobile nav */}
				<div className="xl:hidden">
					mobile nav
				</div>
			</div>
		</header>
	);
};

export default Header;