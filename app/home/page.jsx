"use client";
import Link from "next/Link";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';

import CardGrid from "@/components/CardGrid";
import Carousel from "@/components/Carousel";
import HeadingFullPage from "@/components/HeadingFullPage";
import Socials from "@/components/Socials";
import TabGrid from "@/components/TabGrid";
import TechStack from "@/components/TechStack";


const smoothScroll = (e) => {
	e.preventDefault();
	const section = document.querySelector('#about');
	section?.scrollIntoView({ behavior: 'smooth' });
  };


const Home = () => {
  return (
	<section className="h-full">
		<div className="mx-auto">
			<div className="container-wide pt-20 xl:pt-4 xl:h-screen flex flex-col items-center justify-center gap-16">
				<div className="flex flex-col justify-center items-center gap-7">
					<span className="font-heading uppercase inline-block h6 text-primary-100">
						Tim Breunig
					</span>
					<h1 className="inline-flex flex-col gap-2 text-primary-100 h1">
						<span className="text-center">
							Building
						</span>
						<span className="ml-[0.07em] text-left text-purple-500">
							things
						</span>
						<span className="mr-[0.02em] text-right">
							for
						</span>
						<span className="relative ml-[0.07em]">
							the&nbsp;&nbsp;&nbsp;web
							<span className="absolute -right-6 xl:-right-16 bottom-0 text-purple-500">
								.
							</span>
						</span>
					</h1>
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
			className="mx-auto h-auto pb-12 pt-36">
			<div className="container-wide z-10">
				<h2 className="h2 text-left mb-8 text-primary-100">Featured Work<span className="text-purple-500">.</span></h2>
    			<CardGrid />
			</div>
		</div>
		<div className="h-screen mx-auto box-content pb-60">
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
			className="mx-auto xl:h-screen py-24 xl:py-36">
			<div className="container-wide text-right">
				<span className="mb-4 font-secondary font-medium inline-block text-2xl text-primary-600 uppercase">&#91;What I offer&#93;</span>
				<h2 className="h2 mb-14 text-primary-200">Services<span className="text-purple-500">.</span></h2>
    			<TabGrid />
			</div>
		</div>
	</section>
  );
};

export default Home;