"use client";
import Link from "next/Link";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';

import Carousel from "@/components/Carousel";
import TabGrid from "@/components/TabGrid";
import CardGrid from "@/components/CardGrid";

const Home = () => {
  return (
	<section className="h-full">
		<div className="mx-auto xl:pb-24 bg-radial-gradient">
			<div className="container h-screen flex flex-col xl:flex-row items-center justify-between">
				<div className="mt-12 text-center xl:text-left text-primary-800">
					<span className="font-secondary tracking-wider inline-block text-xl mb-3 text-primary-700 uppercase">
						<Typewriter
							options={{
								strings: [
									"User Interface Design",
									"Frontend Web Development",
									"Game Design & Development",
								],
								autoStart: true,
								loop: true,
								delay: 50,
								deleteSpeed: 40,
								pauseFor: 2400,
							}}
						/>
					</span>
					<h1 className="h1 font-light text-primary-900">
						Hi there! I'm <br /><span className="text-[56px] xl:text-[92px] font-black bg-gradient-to-br from-accent-700 to-accent-300 inline-block text-transparent bg-clip-text">Tim Breunig</span>
					</h1>
					<p className="text-lg xl:max-w-[600px] mb-7">
						I'm passionate about creating appealing and user-friendly digital experiences in various media formats &ndash;
						from designing and building websites to developing video games.
					</p>
					<div>
						<Link href="/resume">
							<Button>
								<span>Open Resume</span>
							</Button>
						</Link>
					</div>
				</div>
				<div className="xl:max-w-[50%] xl:self-end"><img className="h-[360px] pt-8 xl:h-[850px] xl:bottom-0 object-cover mix-blend-darken"
							src="https://www.firstmedica.de/fileadmin/_processed_/e/6/csm_vampir-lifting-ergebnis_e538809ee0.jpg" />
				</div>
			</div>
		</div>
		<div className="mx-auto xl:pb-24 bg-primary-100 text-primary-800">
            <div className="container h-screen flex flex-col xl:flex-row items-center justify-between gap-12">
				<div className="relative w-[39%] mt-12 text-center xl:text-left text-primary-800 z-20">
                    <div className="absolute top-[28%] left-[15%] w-[55%] h-[35%] bg-blue-gradient blur-[150px] opacity-60 -z-10"></div>
                </div>
                <div className="relative w-[59%] mt-12 text-center xl:text-left text-primary-800 z-10">
                    <h2 className="h2 text-primary-900">
						About Me
					</h2>
                    <p className="mb-7">
						I'm Tim Breunig, a multidisciplinary designer and developer from Pforzheim, Germany.
						I love to develop concepts and create implementations for a variety of digital experiences, laying the focus on websites and video games.
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
								<span>Open Resume</span>
							</Button>
						</Link>
					</div>
                </div>
			</div>
        </div>
		<div className="mx-auto h-auto xl:py-24 bg-primary-100">
			<div className="container">
				<h2 className="h2 mb-14 text-primary-900 text-center">Services</h2>
    			<TabGrid />
			</div>
		</div>
		<div className="mx-auto h-auto xl:py-24 bg-primary-100">
			<div className="container">
				<h2 className="h2 mb-14 text-primary-900 text-center">Recent Work</h2>
    			<CardGrid />
			</div>
		</div>
	</section>
  );
};

export default Home;