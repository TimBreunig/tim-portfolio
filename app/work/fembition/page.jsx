"use client";

import { motion, useAnimation, useScroll, useInView, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'


const Fembition = () => {
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
                    src="/images/fembition_teaser.png"
                    alt="Fembition Teaser 1"
                    className="object-cover w-full h-full"
                />
            </motion.div>

            {/* Whitespace */}
            <div ref={containerRef} className="h-screen" />

            <div className="relative mx-auto h-auto pb-12 pt-36 bg-primary-900 z-10">
                <div className="container-wide">
                    <h2 className="h2 text-left mb-8 text-primary-100">Fembition<span className="text-purple-500">.</span></h2>
                    <motion.div
						variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
						className="w-full flex flex-col gap-6 box-border p-8 bg-primary-100 rounded-2xl shadow-md text-primary-900 hover:cursor-pointer transition-colors duration-300"
					>
                        <div className="grid grid-cols-7 gap-12 w-full p-8 pb-12 bg-primary-200 rounded-xl">
                            <div>
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Year</span>
                                <span className="h5">2025</span>
                            </div>
                            <div className="col-span-2">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Roles</span>
                                <div className="flex flex-wrap gap-3">
									{/*{card.roles.map((role, index) => (*/}
										<div className="px-4 py-2 font-semibold text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md">
                                            Webdesign
										</div>
									{/*))*/}
								</div>
                            </div>
                            <div className="col-span-4">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Description</span>
                                <p className="p-2xl">
                                    Fembition resulted from a challenge to design a landing page for a fictional organization within one business day &ndash; completely from scratch.
                                    It is a statement-driven concept that draws attention to the severe underrepresentation of female players in esports despite the industry’s rapid global growth.
                                    The issue is addressed through bold visuals, clear messaging and purposeful design.
                                </p>
                            </div>
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="w-full h-full object-cover object-center" src="/images/fembition_teaser2.png" />
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="w-full h-full object-cover object-center" src="/images/fembition_teaser3.png" />
                        </div>
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img alt="content" className="w-full h-full object-cover object-center" src="/images/movie_night_teaser4.png" />
                        </div>
					</motion.div>
                </div>
            </div>
        </section>
    );
};
  
export default Fembition;