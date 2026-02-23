"use client";

import Image from "next/image";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import { useRef } from "react";
import Tile from "@/components/ui/tile";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


const ProjectPage = ({
    title,
    year,
    roles = [],
    description,
    images = [],
}) => {
    const containerRef = useRef(null);

    const isInView = useInView(containerRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);

    return (
        <section ref={containerRef} className="relative">
            {/* Hero Image */}
            {images[0] && (
                <motion.div
                    style={{ y }}
                    className="sticky top-0 h-[67vh] lg:h-screen w-full z-0 overflow-hidden"
                >
                    <Image
                        src={images[0]}
                        alt={`${title} hero`}
                        className="object-cover object-center"
                        fill
                        sizes="100vw"
                        priority
                    />
                </motion.div>
            )}

            {/* Content */}
            <div className="relative pb-12 pt-12 lg:pt-24 xl:pt-36 bg-primary-900 z-10">
                <div className="container-wide">
                    <h2 className="h2 text-left mb-8 text-primary-100">
                        {title}
                        <span className="text-purple-500">.</span>
                    </h2>

                    <motion.div
                        variants={fadeUp}
                        style={{ willChange: "transform" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full flex flex-col gap-4 lg:gap-6 p-4 lg:p-8 bg-primary-100 rounded-2xl shadow-md text-primary-900"
                    >
                        {/* Meta Grid */}
                        <div className="grid grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-12 w-full p-4 lg:p-8 bg-primary-200 rounded-xl">
                            {/* Year */}
                            <div>
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">
                                    Year
                                </span>
                                <span className="text-[1.75rem] lg:text-[3.5rem] leading-[1.1] lg:leading-[1.2] font-semibold tracking-wider">
                                    {year}
                                </span>
                            </div>

                            {/* Roles */}
                            <div className="col-span-2">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">
                                    Roles
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {roles.map((role, index) => (
                                        <Tile
                                            key={index}
                                            text={role}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-span-3 lg:col-span-4">
                                <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">
                                    Description
                                </span>
                                <p className="p-2xl">{description}</p>
                            </div>
                        </div>

                        {/* Content Images */}
                        {images.slice(1).map((src, index) => (
                            <div
                                key={index}
                                className="relative aspect-video rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={src}
                                    alt={`${title} image ${index + 1}`}
                                    className="object-cover object-center"
                                    fill
                                    sizes="90vw,
                                        (min-width: 768px) 80vw,
                                        (min-width: 1280px) 90vw"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;