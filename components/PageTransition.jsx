"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePageTransition } from "@/components/context/PageTransitionContext";


const PageTransition = ({ children }) => {
	const pathname = usePathname();
	const reduceMotion = useReducedMotion();
	const { isTransitioning, setIsTransitioning } = usePageTransition();

	const duration = reduceMotion ? 0 : 0.7;

	useEffect(() => {
		if (!isTransitioning) return;

		// Reveal new page after the transition duration
		const timeout = setTimeout(() => {
			setIsTransitioning(false);
		}, duration * 1000);

		return () => clearTimeout(timeout);
	}, [pathname, isTransitioning, setIsTransitioning, duration]);

	return (
		<>
			<AnimatePresence>
				{isTransitioning && (
					<motion.div
						key="page-transition"
						aria-hidden="true"
						className="fixed inset-0 z-999 bg-primary-100 pointer-events-none"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration,
							ease: [0.76, 0, 0.24, 1],
						}}
					/>
				)}
			</AnimatePresence>

			{children}
		</>
	);
};

export default PageTransition;
