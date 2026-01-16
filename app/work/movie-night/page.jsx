"use client";

import Image from "next/image";
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
	}, [isInView, mainControls])


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["0", "-100vh"]
    )


    return (
        <section ref={containerRef} className="relative">
            <motion.div
                style={{ y }}
                className="sticky top-0 h-[40vh] xl:h-screen w-full z-0 overflow-hidden"
            >
                <Image
                    src="/images/movie_night_teaser.png"
                    alt="content"
                    className="object-cover object-center"
                    fill
                    sizes="100vw"
                    priority
                />
            </motion.div>

            <div className="relative pb-12 pt-12 xl:pt-36 bg-primary-900 z-10">
                <div className="container-wide">
                    <h2 className="h2 text-left mb-8 text-primary-100">Movie Night<span className="text-purple-500">.</span></h2>
                    <motion.div
						variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
						className="w-full flex flex-col gap-4 xl:gap-6 box-border p-4 xl:p-8 bg-primary-100 rounded-xl xl:rounded-2xl shadow-md text-primary-900 transition-colors duration-300"
					>
                        <div className="grid grid-cols-3 xl:grid-cols-7 gap-4 xl:gap-12 w-full p-8 bg-primary-200 rounded-lg xl:rounded-xl">
                            <div>
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Year</span>
                                <span className="text-[1.75rem] xl:text-[3.5rem] leading-[1.2] font-semibold tracking-wider mb-3">2024</span>
                            </div>
                            <div className="col-span-2">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Roles</span>
                                <div className="flex flex-wrap gap-3">
									{/*{card.roles.map((role, index) => (*/}
										<div className="px-3 xl:px-4 py-0 xl:py-2 font-semibold text-[0.625rem] xl:text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md">
                                            UI Design
										</div>
                                        <div className="px-3 xl:px-4 py-0 xl:py-2 font-semibold text-[0.625rem] xl:text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md">
                                            Frontend Development
										</div>
									{/*))*/}
								</div>
                            </div>
                            <div className="col-span-3 xl:col-span-4">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Description</span>
                                <p className="p-2xl">
                                    Planning movie nights with friends can be quite... chaotic.
                                    As part of the study course Mobile Web Applications, I was member of a small team designing and developing a mobile-first web app that lets you manage the planning process digitally.
                                    You can create groups, propose movies from a huge database and vote for your favourite.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-lg xl:rounded-xl overflow-hidden">
                            <Image
                                src="/images/movie_night_teaser2.png"
                                alt="content"
                                className="object-cover object-center"
                                fill
                                sizes="90vw,
                                    (min-width: 768px) 80vw,
                                    (min-width: 1280px) 90vw"
                            />
                        </div>
                        <div className="relative aspect-video rounded-lg xl:rounded-xl overflow-hidden">
                            <Image
                                src="/images/movie_night_teaser3.png"
                                alt="content"
                                className="object-cover object-center"
                                fill
                                sizes="90vw,
                                    (min-width: 768px) 80vw,
                                    (min-width: 1280px) 90vw"
                            />
                        </div>
                        <div className="relative aspect-video rounded-lg xl:rounded-xl overflow-hidden">
                            <Image
                                src="/images/movie_night_teaser4.png"
                                alt="content"
                                className="object-cover object-center"
                                fill
                                sizes="90vw,
                                    (min-width: 768px) 80vw,
                                    (min-width: 1280px) 90vw"
                            />
                        </div>
					</motion.div>
                </div>
            </div>
        </section>
    );
};
  
export default MovieNight;