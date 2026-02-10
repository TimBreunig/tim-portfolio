"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";


const LenisProvider= ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId;

    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        smoothWheel: true,
        smoothTouch: false,
        duration: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;