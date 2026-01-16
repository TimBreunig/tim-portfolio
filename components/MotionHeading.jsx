'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

const baseVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
            delay,
        },
    }),
    }

const defaultStyles = {
    h1: 'text-[4.125rem] xl:text-[11.25rem] leading-[0.8] font-bold uppercase tracking-tighter mb-10',
    h2: 'text-[3.75rem] xl:text-[11.25rem] leading-[0.9] font-bold uppercase tracking-tight mb-7',
    h3: 'text-[2rem] xl:text-[7.5rem] leading-none font-bold uppercase tracking-wide mb-4',
    h4: 'text-[1.5rem] xl:text-[5.75rem] leading-[1.1] font-bold uppercase tracking-wide mb-4',
    h5: 'text-[1.25rem] xl:text-[3.5rem] leading-[1.2] font-semibold uppercase tracking-wider mb-3',
    h6: 'text-[1.125rem] xl:text-[1.25rem] leading-[1.3] font-semibold uppercase tracking-[0.25em]',
}

const MotionHeading = ({
    as = 'h2',
    children,
    className,
    delay = 0,
}) => {
    const MotionTag = motion[as]

    return (
        <MotionTag
            className={clsx(defaultStyles[as], className)}
            variants={baseVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={delay}
        >
            {children}
        </MotionTag>
    )
}

export default MotionHeading;