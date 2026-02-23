'use client';

import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import MotionHeading from "@/components/MotionHeading";


const About = () => {
	const mainControls = useAnimation();

	return (
		<section
			id="about"
			className="min-h-svh box-content py-24 lg:py-20 flex flex-col justify-center bg-primary-100 text-primary-900"
		>
			<div>
				<div className="container-wide relative">
					<MotionHeading
						as="h2"
						onComplete={() => mainControls.start("show")}
						className="text-primary-900 text-center lg:text-right"
					>
						About Me<span className="accent-dot">.</span>
					</MotionHeading>
				</div>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.6,
								ease: "easeInOut",
								staggerChildren: 0.25,
							},
						},
					}}
					initial="hidden"
					animate={mainControls}
					className="container relative text-center lg:text-left"
				>
					<motion.p
						className="lg:w-5/6 p-7xl"
						variants={{
							hidden: { opacity: 0, y: 10 },
							show: { opacity: 1, y: 0 },
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
							show: { opacity: 1, y: 0 },
						}}
					>
						<Button
							variant="primary"
							size="lg"
							asChild
						>
							<a
								href="/files/resume_breunig.pdf"
      							target="_blank"
								rel="noopener"
								className="group flex flex-col overflow-hidden justify-start gap-4"
							>
								<div className="h-8 overflow-hidden">
									<span className="block tracking-normal group-hover:-translate-y-8 transition-all duration-300 ease-out">Download CV</span>
									<span className="block tracking-normal group-hover:-translate-y-8 transition-all duration-300 ease-out">Download CV</span>
								</div>
							</a>	
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;