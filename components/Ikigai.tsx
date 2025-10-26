'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Ikigai() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      title: 'What I Love',
      color: 'from-red-400 to-pink-500',
      items: [
        'Mentorship and coaching',
        'Startup development and consulting',
        'Guiding people toward clarity and confidence'
      ],
      position: 'top-left'
    },
    {
      title: 'What I\'m Good At',
      color: 'from-blue-400 to-cyan-500',
      items: [
        'Software architecture and product design',
        'Coaching and mentoring developers',
        'Translating abstract ideas into systems'
      ],
      position: 'top-right'
    },
    {
      title: 'What The World Needs',
      color: 'from-green-400 to-emerald-500',
      items: [
        'Human connection in technology',
        'Ethical, emotionally intelligent engineering',
        'Leaders with integrity and empathy'
      ],
      position: 'bottom-left'
    },
    {
      title: 'What I Can Be Paid For',
      color: 'from-amber-400 to-orange-500',
      items: [
        'Fractional CTO work',
        'Software consulting',
        'Leadership and mindset coaching'
      ],
      position: 'bottom-right'
    }
  ]

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0'
      case 'top-right':
        return 'top-0 right-0'
      case 'bottom-left':
        return 'bottom-0 left-0'
      case 'bottom-right':
        return 'bottom-0 right-0'
      default:
        return ''
    }
  }

  return (
    <section id="ikigai" className="section-padding bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-primary-800 transition-theme">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 gradient-text leading-relaxed py-4">
            My Ikigai
          </h2>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto font-light">
            The intersection of purpose, passion, profession, and mission
          </p>
        </motion.div>

        {/* Ikigai Diagram */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative w-full aspect-square max-w-3xl mx-auto">
            {/* Central overlapping area */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full backdrop-blur-sm border border-accent-300/30 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <span className="text-xs md:text-sm font-medium text-accent-700 dark:text-accent-300 text-center px-2">
                IKIGAI
              </span>
            </motion.div>

            {/* Four pillars */}
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className={`absolute w-48 h-48 md:w-56 md:h-56 ${getPositionClasses(pillar.position)}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${pillar.color} opacity-20 absolute`} />
                <div className="relative p-6 md:p-8 h-full flex flex-col justify-center">
                  <h3 className="text-sm md:text-base font-semibold mb-3 text-center text-primary-800 dark:text-primary-200">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-1 text-xs md:text-sm text-primary-700 dark:text-primary-300">
                    {pillar.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-center leading-tight"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 + 0.8 }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-primary-700 dark:text-primary-200 leading-relaxed italic">
            &ldquo;My ikigai lives at the intersection of technology and humanity — helping teams build products that not only work well but make people feel seen, capable, and connected.&rdquo;
          </blockquote>
          <cite className="block mt-6 text-primary-600 dark:text-primary-400 font-medium">
            — Joey Pedicini
          </cite>
        </motion.div>
      </div>
    </section>
  )
}