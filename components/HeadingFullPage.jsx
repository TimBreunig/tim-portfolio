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
    [0, 0.41, 0.44],
    ['#141417', '#141417', '#fdfeff']
  )

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.41, 0.44],
    ['#fdfeff', '#fdfeff', '#141417']
  )

  const offset = useTransform(
    scrollYProgress,
    [0.42, 1],
    [0, 2000]
  )

  const offsetReverse = useTransform(offset, (v) => -v);

  return (
    <motion.section
      ref={containerRef}
      style={{
        backgroundColor
      }}
      className="relative min-h-svh lg:h-[150vh] overflow-clip"
    >
      <div className="container-wide sticky top-0 h-[50vh] lg:min-h-svh flex items-center justify-center">
        <div className="relative">
          <motion.h2
            style={{
              scale,
              color
            }}
            className="relative h1 m-0 text-[2.25rem] lg:text-[8rem] xl:text-[12rem] text-center"
          >
            <motion.span
              className="inline-block tracking-tight"
              style={{
                x: offsetReverse
              }}
            >
              Versatile
            </motion.span>
            <br />
            <motion.span
              className="inline-block tracking-tight"
              style={{
                x: offset
              }}
            >
              Tech Stack
            </motion.span>
          </motion.h2>
        </div>
      </div>
    </motion.section>
  )
}

export default HeadingFullPage