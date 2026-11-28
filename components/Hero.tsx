'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const NAV_ITEMS = [
  'Our story',
  'Collective',
  'Workshops',
  'Programs',
  'Inquiries',
]

const HERO_VIDEO = '/hero.mp4'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/75" />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="whitespace-nowrap text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E1E0CC'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-8 sm:p-6 sm:pb-10 md:p-8 md:pb-12 lg:p-10 lg:pb-14">
          <div className="grid grid-cols-12 items-end gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="pb-[0.08em] text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{
                  color: '#E1E0CC',
                  textShadow: '0 2px 24px rgba(0,0,0,0.55)',
                }}
              >
                <WordsPullUp text="Rong" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-4 pb-2 sm:gap-5 md:col-span-4 md:pb-4">
              <motion.p
                className="text-xs sm:text-sm md:text-base"
                style={{
                  lineHeight: 1.2,
                  color: 'rgba(225, 224, 204, 0.92)',
                  textShadow: '0 1px 12px rgba(0,0,0,0.65)',
                }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease }}
              >
                This is where I tell my career transition story — a little more
                loosely, and a little more honestly, than a resume. You won&apos;t
                find a longer CV here. I wanted a quieter corner to share how I
                got here, and what I&apos;m exploring next.
              </motion.p>

              <motion.a
                href="#inquiries"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 transition-all hover:gap-3 sm:pl-6 sm:pr-1.5"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease }}
              >
                <span className="text-sm font-medium text-black sm:text-base">
                  Read more
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
