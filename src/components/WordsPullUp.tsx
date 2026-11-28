import { motion, useInView } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  style?: CSSProperties
  showAsterisk?: boolean
}

export default function WordsPullUp({
  text,
  className = '',
  style,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1
        const chars = word.split('')

        return (
          <span
            key={`${word}-${i}`}
            className={`inline-block overflow-hidden mr-[0.2em] last:mr-0 ${
              showAsterisk && isLastWord ? 'pt-[0.35em] pr-[0.35em]' : ''
            }`}
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {chars.map((char, charIndex) => {
                const isLastA =
                  showAsterisk &&
                  isLastWord &&
                  char.toLowerCase() === 'a' &&
                  charIndex === chars.length - 1

                if (isLastA) {
                  return (
                    <span key={charIndex} className="relative inline-block">
                      {char}
                      <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none">
                        *
                      </span>
                    </span>
                  )
                }

                return <span key={charIndex}>{char}</span>
              })}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
