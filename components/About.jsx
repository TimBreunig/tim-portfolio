'use client';

import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";


const About = () => {
  const textControls = useAnimation();

	return (
    	<motion.section
			id="about"
			initial={{ backgroundColor: "#fdfeff" }}
			whileInView={{ backgroundColor: "#141417" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			viewport={{ once: true, amount: 0.9 }}
			className="xl:h-screen box-content py-24 xl:py-10 flex flex-col justify-center text-primary-900"
			onAnimationComplete={() => {
				textControls.start("visible");
			}}
		>
			<motion.div
				initial="hidden"
				animate={textControls}
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
						duration: 0.6,
						ease: "easeInOut",
						staggerChildren: 0.15,
						},
					},
				}}
			>
				<div className="container-wide relative">
					<motion.h2
						className="h2 text-center xl:text-right"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
					>
						About Me<span className="accent-dot">.</span>
					</motion.h2>
				</div>

				<div className="container relative text-center xl:text-left">
					<motion.p
						className="xl:w-5/6 p-7xl"
						variants={{
							hidden: { opacity: 0, y: 10 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						Being passionate about both web design and development, I{" "}
						<span className="text-purple-500 tracking-tighter">
						create experiences
						</span>{" "}
						that blend strong visual appeal with clean, thoughtful implementation.
					</motion.p>

					<motion.div
						variants={{
							hidden: { opacity: 0, y: 10 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<Button
							variant="primary"
							size="lg"
							asChild
						>
							<a href="/files/resume_breunig.pdf"
      							target="_blank"
								rel="noopener"
							>
								Download CV
							</a>	
						</Button>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default About;