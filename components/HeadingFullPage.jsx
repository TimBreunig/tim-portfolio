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

  const strokeColor = useTransform(
    scrollYProgress,
    [0, 0.39, 0.4],
    ['transparent', 'transparent', '#141417']
  )

  const fillColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.36, 0.39, 0.4],
    ['transparent', 'transparent', '#a855f7', '#a855f7', '#fdfeff']
  )

  return (
    <section
      ref={containerRef}
      className="relative container-wide h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative">
          <motion.h2
            aria-hidden
            style={{
              scale,
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: strokeColor,
            }}
            className="h2 absolute m-0 inset-0 text-center text-primary-100"
          >
            Versatile<br />Tech Stack
          </motion.h2>

          <motion.h2
            style={{
              scale,
              color: fillColor,
            }}
            className="h2 m-0 text-center relative"
          >
            Versatile<br />Tech Stack
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default HeadingFullPage