'use client';

import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";


const About = () => {
  const textControls = useAnimation();

	return (
    	<motion.div
			id="about"
			initial={{ backgroundColor: "#fdfeff" }}
			whileInView={{ backgroundColor: "#141417" }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			viewport={{ once: true, amount: 0.9 }}
			className="h-[110vh] flex flex-col justify-center text-primary-900"
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
						ease: "easeOut",
						staggerChildren: 0.15,
						},
					},
				}}
			>
				<div className="container-wide relative text-left">
					<motion.h2
						className="h2 text-right"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
					>
						About Me<span className="accent-dot">.</span>
					</motion.h2>
				</div>

				<div className="container relative text-left">
					<motion.p
						className="w-5/6 text-7xl font-medium mb-7 tracking-tighter"
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
						<Button variant="light" asChild>
							<a href="/files/resume_breunig.pdf"
      							download
							>
								Download CV
							</a>	
						</Button>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;