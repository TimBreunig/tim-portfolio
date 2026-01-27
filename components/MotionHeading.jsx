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
    h1: 'text-[4.125rem] lg:text-[8rem] xl:text-[12rem] leading-[0.8] font-bold uppercase tracking-tighter mb-8 lg:mb-10',
    h2: 'text-[3.5rem] lg:text-[7.5rem] xl:text-[11.25rem] leading-[0.9] font-bold uppercase tracking-tight mb-5 lg:mb-7',
    h3: 'text-[1.75rem] lg:text-[2.625rem] xl:text-[3.5rem] leading-[1.2] font-semibold tracking-normal lg:mb-4',
    h4: 'text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] leading-[1.1] font-semibold tracking-normal lg:mb-4',
    h5: 'text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] leading-[1.2] font-semibold tracking-normal lg:mb-3',
    h6: 'text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] leading-[1.3] font-semibold uppercase tracking-[0.25em]',
}

const MotionHeading = ({
    as = 'h2',
    onComplete,
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
            onAnimationComplete={onComplete}
        >
            {children}
        </MotionTag>
    )
}

export default MotionHeading;