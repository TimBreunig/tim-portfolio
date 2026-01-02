"use client";
import Link from "next/Link";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faPinterestP, faGithub } from '@fortawesome/free-brands-svg-icons'

import TabGrid from "@/components/TabGrid";
import CardGrid from "@/components/CardGrid";
import TechStack from "@/components/TechStack";
import HeadingFullPage from "@/components/HeadingFullPage";
import Carousel from "@/components/Carousel";


const smoothScroll = (e) => {
	e.preventDefault();
	const section = document.querySelector('#about');
	section?.scrollIntoView({ behavior: 'smooth' });
  };


const Home = () => {
  return (
	<section className="h-full">
		<div className="mx-auto bg-primary-900">
			<div className="relative container-wide pt-20 xl:pt-4 xl:h-screen flex flex-col items-center justify-center gap-16">
				<Carousel />
				<div className="text-center">
					<span className="inline-block h6 text-primary-100">
						Tim Breunig<span className="text-accent-500">.</span>
						&nbsp;
					</span>
					<h1 className="h1 text-primary-100">
						Web Developer
					</h1>
				</div>
				<div className="group absolute container-wide w-full bottom-6 flex justify-between items-end">
					<div className="flex gap-4">
						<a href="https://de.linkedin.com/in/tim-breunig-a82250252" target="_blank">
							<FontAwesomeIcon icon={faLinkedinIn} className="block box-border w-6 h-6 p-4 rounded-full border border-primary-800 text-primary-600 hover:border-primary-300 hover:text-primary-200 transition-colors duration-300" />
						</a>
						<a href="https://github.com/TimBreunig" target="_blank">
							<FontAwesomeIcon icon={faGithub} className="block box-border w-6 h-6 p-4 rounded-full border border-primary-800 text-primary-600 hover:border-primary-300 hover:text-primary-200 transition-colors duration-300" />
						</a>
						<a href="https://www.instagram.com/_timbrng_/" target="_blank">
							<FontAwesomeIcon icon={faInstagram} className="block box-border w-6 h-6 p-4 rounded-full border border-primary-800 text-primary-600 hover:border-primary-300 hover:text-primary-200 transition-colors duration-300" />
						</a>
						<a href="https://www.pinterest.de/tiracin16/" target="_blank">
							<FontAwesomeIcon icon={faPinterestP} className="block box-border w-6 h-6 p-4 rounded-full border border-primary-800 text-primary-600 hover:border-primary-300 hover:text-primary-200 transition-colors duration-300" />
						</a>
					</div>
					<div className="font-secondary font-medium text-2xl uppercase text-primary-600">
						&#91;
						<span className="inline-block">
							<Typewriter
								options={{
									strings: [
										"Design",
										"Build",
										"Create",
									],
									autoStart: true,
									loop: true,
									delay: 75,
									deleteSpeed: 60,
									pauseFor: 2400,
								}}
							/>
						</span>with passion&#93;
					</div>
				</div>
			</div>
		</div>
		<div
			id="about"
			className="mx-auto pt-8 xl:pt-0 bg-primary-200 text-primary-800">
            <div className="container xl:h-[85vh] flex flex-col-reverse xl:flex-row items-center justify-between gap-12">
				<div className="relative xl:w-[40%] h-full text-center xl:text-left text-primary-800 z-20">
					<img
						className="xl:absolute w-full h-full bottom-0 object-cover"
						src="/images/portrait.png"
						alt="Portrait of Tim Breunig"
					/>
                    <div className="absolute top-[28%] left-[33%] w-[27%] h-[36%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                </div>
                <div className="relative xl:w-[58%] mt-12 text-center xl:text-left text-primary-800 z-10">
                    <h2 className="h2 text-primary-900">
						About Me
					</h2>
                    <p className="mb-7">
						I'm Tim Breunig, a multidisciplinary designer and developer from Germany.
						I love to develop concepts and create implementations for a variety of digital experiences, focusing on websites and video games.
					</p>
					<p className="mb-7">
						Starting in 2021, I studied Computer Science and Media at Stuttgart Media University until I graduated in 2025 with the Bachelor of Science.
						During this time, I have already collected valuable experiences as a web designer in the professional field as well as taken part in multiple
						exciting game projects, both as part of my studies and independently.
					</p>
					<p className="mb-7">
						Interested in my work? Feel free to take a look at my resume or reach out to me via the contact form in the footer!
					</p>
					<div>
						<Link href="/resume">
							<Button>
								<span>Download CV</span>
							</Button>
						</Link>
					</div>
                </div>
			</div>
        </div>
		<div
			id ="work"
			className="mx-auto h-auto pb-12 pt-36 bg-primary-900">
			<div className="container-wide">
				<h2 className="h2 text-left mb-8 text-primary-200">Featured Work</h2>
    			<CardGrid />
			</div>
		</div>
		<div className="h-screen mx-auto box-content pb-60 bg-primary-900">
			<HeadingFullPage />
		</div>
		<div
			className="relative xl:h-screen mx-auto box-content py-24 xl:py-4 flex items-center bg-primary-100 z-10">
			<div className="container-wide">
				<TechStack />
			</div>
		</div>
		<div 
			id ="services"
			className="mx-auto xl:h-screen py-24 xl:py-36 bg-primary-900">
			<div className="container-wide text-right">
				<span className="mb-4 font-secondary font-medium inline-block text-2xl text-primary-600 uppercase">&#91;What I offer&#93;</span>
				<h2 className="h2 mb-14 text-primary-200">Services</h2>
    			<TabGrid />
			</div>
		</div>
	</section>
  );
};

export default Home;