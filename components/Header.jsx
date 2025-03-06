"use client";

import React, { useEffect, useState } from "react";
import Link from "next/Link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [transparent, setTransparent] = useState(true);

  	const handleScroll = () => {
    	const currentScrollPos = window.scrollY

    	if(currentScrollPos > prevScrollPos) {
        	setVisible(false)
			setTransparent(true)
    	} else {
        	setVisible(true)

			if(currentScrollPos > 0) {
				setTransparent(false)
			} else {
				setTransparent(true)
			}
    	}

    	setPrevScrollPos(currentScrollPos)
	};

	useEffect( () => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<header className={`fixed w-full py-8 xl:py-12 z-50 transition-all duration-500 ${visible ? 'top-0' : '-top-40'} ${transparent ? 'bg-transparent border-b-0 border-primary-500/0' : 'bg-primary-100/50 py-6 xl:py-9 border-b border-primary-500/40 backdrop-blur-md'} `}>
			<div className={`container flex justify-between items-center text-primary-600 `}>
				<Link href="/">
					<h1 className="text-4xl font-semibold text-primary-900">
						TB <span className="text-accent-500">.</span>
					</h1>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden xl:flex items-center gap-11 2xl:gap-15">
					<Nav />
					<Link href="/contact">
						<Button variant="outline">
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