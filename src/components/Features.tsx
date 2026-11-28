import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const CARD_EASE = [0.22, 1, 0.36, 1] as const

interface ChecklistCardProps {
  number: string
  title: string
  icon: string
  items: string[]
  delay: number
  isInView: boolean
}

function ChecklistCard({
  number,
  title,
  icon,
  items,
  delay,
  isInView,
}: ChecklistCardProps) {
  return (
    <motion.div
      className="flex h-full flex-col justify-between rounded-2xl bg-[#212121] p-5 sm:rounded-3xl sm:p-6 md:p-7"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ delay, duration: 0.7, ease: CARD_EASE }}
    >
      <div>
        <img
          src={icon}
          alt=""
          className="mb-6 h-10 w-10 rounded object-cover sm:mb-8 sm:h-12 sm:w-12"
        />
        <h3
          className="mb-5 text-lg font-medium leading-tight sm:mb-6 sm:text-xl"
          style={{ color: '#E1E0CC' }}
        >
          <span className="mr-2 text-sm text-gray-500">{number}</span>
          {title}
        </h3>
        <ul className="flex flex-col gap-3 sm:gap-3.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs text-gray-400 sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#inquiries"
        className="mt-8 inline-flex items-center gap-2 text-sm transition-colors hover:text-primary"
        style={{ color: '#E1E0CC' }}
      >
        Learn more
        <ArrowRight className="h-4 w-4" style={{ transform: 'rotate(-45deg)' }} />
      </a>
    </motion.div>
  )
}

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section className="relative min-h-screen bg-black px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <h2 className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-primary',
                },
              ]}
            />
          </h2>
          <p className="mt-2 text-xl font-normal sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-gray-500',
                },
              ]}
            />
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:grid-cols-4 lg:h-[480px]"
        >
          <motion.div
            className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px] sm:rounded-3xl lg:min-h-0 lg:h-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            transition={{ delay: 0, duration: 0.7, ease: CARD_EASE }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={FEATURE_VIDEO}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              className="absolute bottom-5 left-5 text-lg font-medium sm:bottom-6 sm:left-6 sm:text-xl"
              style={{ color: '#E1E0CC' }}
            >
              Your creative canvas.
            </p>
          </motion.div>

          <ChecklistCard
            number="01"
            title="Project Storyboard."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              'Build scene-by-scene visual sequences',
              'Collaborate with directors in real time',
              'Export boards for production handoff',
              'Version history for every revision',
            ]}
            delay={0.15}
            isInView={isInView}
          />

          <ChecklistCard
            number="02"
            title="Smart Critiques."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              'AI analysis of pacing and color language',
              'Creative notes from peer reviewers',
              'Tool integrations for NLE workflows',
            ]}
            delay={0.3}
            isInView={isInView}
          />

          <ChecklistCard
            number="03"
            title="Immersion Capsule."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              'Notification silencing during deep work',
              'Ambient soundscapes for focus sessions',
              'Schedule syncing across creative teams',
            ]}
            delay={0.45}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  )
}
