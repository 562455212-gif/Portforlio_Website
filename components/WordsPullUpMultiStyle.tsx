'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({
        word,
        className: segment.className ?? '',
      })),
  )

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map(({ word, className: wordClass }, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] last:mr-0"
        >
          <motion.span
            className={`inline-block ${wordClass}`}
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
