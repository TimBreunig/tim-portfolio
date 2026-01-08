"use client";

import { motion, useAnimation, useScroll, useInView, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'


const MovieNight = () => {
    const containerRef = useRef(null)

	const isInView = useInView(containerRef, { once: true })
	const mainControls = useAnimation()

	useEffect(() => {
		if(isInView) {
			mainControls.start("show")
		}
	}, [isInView])


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["25vh", "-25vh"]
    )


    return (
        <section className="relative h-full">
            <motion.div
                style={{ y }}
                className="fixed flex items-center w-full xl:h-screen overflow-hidden z-0"
            >
                <img
                    src="/images/movie_night_teaser.png"
                    alt="Movie Night Teaser 1"
                    className="object-cover w-full h-full"
                />
            </motion.div>
                    {/*<div className="absolute top-0 -left-[20%] w-[120%] h-[120%] bg-black-gradient blur-[150px] -z-10"></div>
					    <h1 className="h1 text-primary-900">
						    Movie Night
					    </h1>
                        <p className="text-base xl:max-w-[600px] mb-4 text-primary-700">
                            Web-Application | Stuttgart Media University | 2024
					    </p>
                        <p className="text-lg mb-7">
                            Movie Night is a React-based Web Application that aims to simplify the decision process for movie nights with friends.
                            The app allows you to create and manage polls where every participant has the opportunity to propose one movie for the voting.
                            The movie that has the most votes at the set deadline is declared the winner.
					    </p>*/}

            {/* Whitespace */}
            <div ref={containerRef} className="h-screen" />

            <div className="relative mx-auto h-auto pb-12 pt-36 bg-primary-900 z-10">
                <div className="container-wide">
                    <h2 className="h2 text-left mb-8 text-primary-100">Movie Night<span className="text-purple-500">.</span></h2>
                    <motion.div
						variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
						className="w-full flex flex-col gap-6 box-border p-8 bg-primary-100 rounded-2xl shadow-md text-primary-900 hover:cursor-pointer transition-colors duration-300"
					>
                        <div className="grid grid-cols-7 gap-12 w-full p-8 pb-12 bg-primary-200 rounded-xl">
                            <div>
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Year</span>
                                <span className="h5">2024</span>
                            </div>
                            <div className="col-span-2">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Roles</span>
                                <div className="flex flex-wrap gap-3">
									{/*{card.roles.map((role, index) => (*/}
										<div className="px-4 py-2 font-semibold text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md">
                                            UI Design
										</div>
                                        <div className="px-4 py-2 font-semibold text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md">
                                            Frontend Development
										</div>
									{/*))*/}
								</div>
                            </div>
                            <div className="col-span-4">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Description</span>
                                <p className="p-2xl">
                                    Planning movie nights with friends can be quite... chaotic.
                                    As part of the study course Mobile Web Applications, I was member of a small team designing and developing a mobile-first web app that lets you manage the planning process digitally.
                                    You can create groups, propose movies from a huge database and vote for your favourite.
                                </p>
                            </div>
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-300" src="/images/movie_night_teaser2.png" />
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-300" src="/images/movie_night_teaser3.png" />
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-300" src="/images/movie_night_teaser4.png" />
                        </div>
					</motion.div>
                </div>
            </div>
        </section>
    );
};
  
export default MovieNight;