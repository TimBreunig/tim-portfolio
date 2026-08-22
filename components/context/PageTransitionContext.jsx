"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
} from "react";
import { useRouter } from "next/navigation";


const PageTransitionContext = createContext(null);


export const PageTransitionProvider = ({ children }) => {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const navigate = useCallback(
        (href) => {
            if (isTransitioning) return;

            setIsTransitioning(true);

            // Give the overlay time to become fully dark
            window.setTimeout(() => {
                router.push(href);
            }, 600);
        },
        [isTransitioning, router]
    );

    return (
        <PageTransitionContext.Provider value={{ navigate, isTransitioning, setIsTransitioning }}>
            {children}
        </PageTransitionContext.Provider>
    );
};

export const usePageTransition = () => {
    const context = useContext(PageTransitionContext);

    if (!context) {
        throw new Error(
            "usePageTransition must be used inside PageTransitionProvider"
        );
    }

    return context;
};