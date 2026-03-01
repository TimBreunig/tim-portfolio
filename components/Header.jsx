"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
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
		<header className={"fixed w-full h-full py-6 lg:py-7 xl:py-8 z-50 pointer-events-none transition-all duration-500"}>
			<div className={"container-wide flex justify-between items-center"}>
				<Link
					href="/"
					className="pointer-events-auto"
				>
					<div className="relative w-12 h-12 lg:w-16 lg:h-16 z-50">
						<Image src="/images/logo.svg"
							alt="Tim Breunig Logo"
							className="object-contain"
							loading="eager"
							fill
							sizes="
								48px,
								(min-width: 1280px) 64px
							"
                    	/>
					</div>
				</Link>

				{/* desktop nav & contact button */}
				<div className="hidden lg:flex items-center gap-10 pointer-events-auto">
					<Nav />
				</div>

				{/* mobile nav */}
				<div className="lg:hidden pointer-events-auto">
					<Button
						variant="icon"
						size="icon"
						className="group relative z-50"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
					>
						<FontAwesomeIcon
							icon={menuOpen ? faXmark : faBarsStaggered}
							className="relative w-full h-full text-2xl text-primary-300 z-10"
						/>
					</Button>

					<div
						className={`fixed inset-0 z-40 bg-primary-900 transform transition-transform duration-300 ease-in-out
							${menuOpen ? "translate-x-0" : "translate-x-full"}
						`}
					>
						<div className="container-wide h-full flex flex-col justify-center items-center gap-12">
							<Nav onNavigate={() => setMenuOpen(false)} />

							<div className="flex flex-col gap-4">
								<Socials />

								<div className="font-secondary font-medium text-xl lg:text-2xl text-center tracking-tight uppercase text-primary-600">
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
			<div className="hidden lg:block absolute inset-x-0 bottom-6 lg:bottom-8 xl:bottom-10">
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