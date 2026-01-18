"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Socials from "@/components/Socials";
import Typewriter from 'typewriter-effect';
import Nav from "@/components/Nav";

const Header = () => {
	const [transparent, setTransparent] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

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
						className="group relative z-50"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
					>
						<FontAwesomeIcon
						icon={menuOpen ? faXmark : faBars}
						className="relative w-full h-full text-2xl text-primary-100 z-10
									group-hover:text-primary-900"
						/>
					</Button>

					<div
						className={`fixed inset-0 z-40 bg-primary-900 transform transition-transform duration-300 ease-in-out
						${menuOpen ? "translate-x-0" : "translate-x-full"}
						`}
					>
						<div className="container-wide h-full flex flex-col justify-center items-center gap-12">
							<Nav onNavigate={() => setMenuOpen(false)} />

							<div className="flex flex-col gap-2">
								<Socials />

								<div className="font-secondary font-medium text-lg lg:text-2xl text-center tracking-tight uppercase text-primary-600">
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
					</div>
				</div>
			</div>

			{/* social links and typewriter */}
			<div className="hidden xl:block absolute inset-x-0 bottom-6 xl:bottom-10">
				<div className="container-wide flex justify-between items-end">
					<Socials />
					<div className="font-secondary font-medium text-lg lg:text-2xl tracking-tight uppercase text-primary-600">
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