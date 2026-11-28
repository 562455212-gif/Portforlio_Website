import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-12 text-center sm:px-10 sm:py-16 md:rounded-3xl md:px-16 md:py-20 lg:py-24">
        <p className="mb-6 text-[10px] text-primary sm:mb-8 sm:text-xs">
          Visual arts
        </p>

        <h2 className="mx-auto mb-8 max-w-3xl text-3xl leading-[0.95] sm:mb-10 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:mb-12 lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Marcus Chen,', className: 'font-normal' },
              {
                text: 'a self-taught director.',
                className: 'italic font-serif',
              },
              {
                text: 'I have skills in color grading, visual effects, and narrative design.',
                className: 'font-normal',
              },
            ]}
          />
        </h2>

        <p
          ref={bodyRef}
          className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((char, index) => (
            <AnimatedLetter
              key={`${char}-${index}`}
              char={char}
              index={index}
              totalChars={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
