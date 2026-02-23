'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const HeadingFullPage = () => {
  const containerRef = useRef(null)
  const [motionStrength, setMotionStrength] = useState(1)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setMotionStrength(0.2)       // mobile
      else if (window.innerWidth < 1024) setMotionStrength(0.6) // tablet
      else setMotionStrength(1)                                 // desktop
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 1.6, 1.6]
  )

  const color = useTransform(
    scrollYProgress,
    [0, 0.34, 0.35],
    ['#141417', '#141417', '#a855f7']
  )

  const offset = useTransform(
    scrollYProgress,
    [0.36, 1],
    [0, 250]
  )

  const responsiveOffset = useTransform(offset, v => v * motionStrength)

  const backUp = useTransform(responsiveOffset, v => -2 * v)
  const backDown = useTransform(responsiveOffset, v => 2 * v)

  const midUp = useTransform(responsiveOffset, v => -v)
  const midDown = useTransform(responsiveOffset, v => v)

  return (
    <section
      ref={containerRef}
      className="relative min-h-svh lg:h-[250vh]"
    >
      <div className="container-wide sticky top-0 h-[50vh] lg:min-h-svh flex items-center justify-center">
        <div className="relative">
          <motion.h2
            style={{
              scale,
            }}
            className="absolute h1 m-0 text-[2.25rem] lg:text-[8rem] xl:text-[12rem] text-purple-200 text-center"
          >
            {/* Back Layer */}
            <motion.span
              style={{
                y: backUp
              }}
              className="inline-block tracking-tight">Versatile</motion.span><br />
            <motion.span
              style={{
                y: backDown
              }}
              className="inline-block tracking-tight">Tech Stack</motion.span>
          </motion.h2>

          {/* Center Layer */}
          <motion.h2
            style={{
              scale,
            }}
            className="absolute h1 m-0 text-[2.25rem] lg:text-[8rem] xl:text-[12rem] text-purple-300 text-center"
          >
            <motion.span
              style={{
                y: midUp
              }}
              className="inline-block tracking-tight">Versatile</motion.span><br />
            <motion.span
              style={{
                y: midDown
              }}
              className="inline-block tracking-tight">Tech Stack</motion.span>
          </motion.h2>
          
          {/* Front Layer */}
          <motion.h2
            style={{
              scale,
              color
            }}
            className="relative h1 m-0 text-[2.25rem] lg:text-[8rem] xl:text-[12rem] text-center"
          >
            <span className="inline-block tracking-tight">
              Versatile
            </span>
            <br />
            <span className="inline-block tracking-tight">
              Tech Stack
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default HeadingFullPage