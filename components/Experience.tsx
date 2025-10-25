'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Zap, Compass, Heart } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Amazon / One Medical',
      subtitle: 'Prime Health Benefit',
      description: 'Led frontend development for healthcare integration, demonstrating mastery in large-scale product design and user experience.',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      category: 'Mastery & Craft',
      achievement: 'Scaled healthcare access for millions'
    },
    {
      title: 'CleverApply',
      subtitle: 'SaaS Platform',
      description: 'Built comprehensive application management system for universities and agencies, creating meaningful impact in education technology.',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      category: 'Purposeful Impact',
      achievement: 'Streamlined admissions for 50+ institutions'
    },
    {
      title: 'CodeCompass',
      subtitle: 'Developer Coaching',
      description: 'Mentoring developers and startups through technical challenges and career growth, doing what I love most.',
      icon: Compass,
      color: 'from-purple-500 to-violet-500',
      category: 'What I Love',
      achievement: 'Guided 100+ developers to success'
    },
    {
      title: 'Human Driven Development',
      subtitle: 'Framework & Philosophy',
      description: 'Created a methodology for empathy in engineering, addressing what the world needs most in technology.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      category: 'What The World Needs',
      achievement: 'Adopted by teams worldwide'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-primary-800 transition-theme">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 gradient-text">
            Experience Highlights
          </h2>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto font-light">
            Real examples of ikigai in action across technology and humanity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-2xl glass soft-shadow p-8 h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <experience.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Category badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-300 rounded-full">
                    {experience.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-primary-800 dark:text-primary-200">
                  {experience.title}
                </h3>
                
                <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-4">
                  {experience.subtitle}
                </p>
                
                <p className="text-primary-600 dark:text-primary-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievement */}
                <div className="pt-4 border-t border-primary-200 dark:border-primary-600">
                  <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    <span className="text-accent-600 dark:text-accent-400">Achievement:</span> {experience.achievement}
                  </p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-lg text-primary-600 dark:text-primary-300 mb-6 font-light">
            Each project represents a different dimension of purpose-driven work
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium rounded-full hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const connectSection = document.getElementById('connect')
              connectSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}