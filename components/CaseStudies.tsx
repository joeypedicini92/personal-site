'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Users, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-studies-data'

const categoryIcons = {
  Coaching: Lightbulb,
  Mentorship: Users,
  Leadership: TrendingUp,
}

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="case-studies"
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Case Studies
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Real stories of transformation through coaching, mentorship, and technical leadership.
          Each journey is unique, but they all share a commitment to growth and human-centered development.
        </p>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => {
          const Icon = categoryIcons[study.category]
          
          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <div className="group h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 cursor-pointer">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${study.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {study.category}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {study.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                    {study.title}
                  </h3>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
                    {study.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">
                    {study.summary}
                  </p>

                  {/* Outcome Badge */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                      <TrendingUp className="w-4 h-4 text-green-700 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        {study.outcome}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        +{study.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-4 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-4xl mx-auto text-center mt-16"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Ready to write your own success story?
        </p>
        <Link href="#connect">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Let&apos;s Work Together
          </button>
        </Link>
      </motion.div>
    </section>
  )
}
