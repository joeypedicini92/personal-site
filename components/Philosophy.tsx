'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const philosophyLines = [
    "I believe software should serve human growth, not replace it.",
    "Technology is a reflection of our values — every commit, every design choice, every conversation is an act of creation.",
    "My work blends engineering discipline, emotional intelligence, and faith to create systems that uplift rather than consume."
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50 dark:from-primary-800 dark:to-primary-900 transition-theme">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 gradient-text">
            Philosophy
          </h2>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto font-light">
            The spiritual dimension of software development
          </p>
        </motion.div>

        {/* Main philosophy content */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />
          </div>

          {/* Philosophy text */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {philosophyLines.map((line, index) => (
              <motion.div
                key={index}
                className="mb-8 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.3 }}
              >
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-light text-primary-700 dark:text-primary-200 leading-relaxed text-center"
                  whileInView={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  viewport={{ once: false, margin: '-50px' }}
                >
                  {line}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Quote attribution */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 glass rounded-full">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">JP</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-primary-800 dark:text-primary-200">Joey Pedicini</p>
                <p className="text-sm text-primary-600 dark:text-primary-400">Spiritual Software Architect</p>
              </div>
            </div>
          </motion.div>

          {/* Core principles */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              {
                title: 'Human-Centered',
                description: 'Technology that honors dignity and promotes flourishing',
                emoji: '🤝'
              },
              {
                title: 'Faith-Informed',
                description: 'Values-driven development with eternal perspective',
                emoji: '✨'
              },
              {
                title: 'Growth-Oriented',
                description: 'Systems that develop people, not just products',
                emoji: '🌱'
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                className="text-center p-6 glass rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{principle.emoji}</div>
                <h3 className="text-lg font-serif font-semibold mb-3 text-primary-800 dark:text-primary-200">
                  {principle.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}