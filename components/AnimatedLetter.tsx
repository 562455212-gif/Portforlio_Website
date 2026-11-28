'use client'

import { motion, type MotionValue, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  index: number
  totalChars: number
  scrollYProgress: MotionValue<number>
}

export default function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollYProgress,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1],
  )

  if (char === ' ') {
    return <motion.span style={{ opacity }}> </motion.span>
  }

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}
