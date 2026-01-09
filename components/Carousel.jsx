"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const slides = [
  { title: "Project Mothership", path: "/images/IntroCutscene2_LowRes.gif" },
  { title: "Project A", path: "/images/fembition_teaser.png" },
  { title: "Project B", path: "/images/movie_night_teaser.png" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideRef = useRef(null);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((c) => (c + 1) % slides.length);

  // Measure slide width after mount
  useLayoutEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-87.5 flex items-center justify-center">
        {slides.map((slide, index) => {
          let offset = index - current;

          // infinite wrap
          if (offset > slides.length / 2) offset -= slides.length;
          if (offset < -slides.length / 2) offset += slides.length;

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          if (!isVisible) return null;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-out ${
                isCenter ? "z-20" : "z-10"
              }`}
              style={{
                transform: `
                  translateX(${offset * slideWidth * 0.6}px)
                  scale(${isCenter ? 1 : 0.85})
                  rotateY(${offset * -15}deg)
                `,
                opacity: isCenter ? 1 : 0.4,
              }}
            >
              <Image
                fill
                ref={isCenter ? slideRef : null}
                src={slide.path}
                alt={slide.title}
                className="w-150 aspect-video rounded-2xl shadow-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <button onClick={prev}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-8 h-8 text-primary-100 hover:text-accent-500 transition-colors duration-300"
          />
        </button>
        <button onClick={next}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-8 h-8 text-primary-100 hover:text-accent-500 transition-colors duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;