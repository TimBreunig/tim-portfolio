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
		<header className={`fixed w-full py-6 z-50 transition-all duration-500 ${transparent ? '' : 'py-4 xl:py-4'} `}>
			<div className={`container-wide flex justify-between items-center`}>
				<Link href="/">
					<h1 className="text-4xl font-bold text-primary-100 tracking-[-0.1em]">
						TB <span className="text-accent-500">.</span>
					</h1>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-10 2xl:gap-10">
					<Nav />
					<Link href="/contact">
						<Button>
							Get in touch
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