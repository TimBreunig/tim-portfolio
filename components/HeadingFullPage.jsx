'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const HeadingFullPage = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 1.6, 1.6]
  )

  const fillColor1 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.36, 0.39, 0.4, 0.43, 0.44],
    ['#141417', '#141417', '#a855f7', '#a855f7', '#141417', '#141417', '#a855f7']
  )

  const fillColor2 = useTransform(
    scrollYProgress,
    [0, 0.39, 0.4],
    ['#141417', '#141417', '#a855f7']
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[50vh] xl:h-[200vh]"
    >
      <div className="container-wide sticky top-0 h-[50vh] xl:h-screen flex items-center justify-center">
        <div className="relative">
          <motion.h2
            style={{
              scale,
            }}
            className="relative h1 text-[2.25rem] xl:text-[12rem] m-0 text-center"
          >
            <motion.span
              style={{
                color: fillColor1,
              }}
              className="tracking-tight">Versatile</motion.span><br />
            <motion.span
              style={{
                color: fillColor2,
              }}
              className="tracking-tight">Tech Stack</motion.span>
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default HeadingFullPage