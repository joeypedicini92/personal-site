'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, CheckCircle2, Quote } from 'lucide-react'
import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies-data'

interface CaseStudyContentProps {
  study: CaseStudy
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link href="/#case-studies">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Case Studies</span>
          </motion.button>
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${study.color} text-white font-medium text-sm`}>
            {study.category}
          </span>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{study.duration}</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
          {study.title}
        </h1>
        <p className="text-2xl text-purple-600 dark:text-purple-400 font-medium mb-6">
          {study.subtitle}
        </p>

        {/* Outcome Highlight */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-100 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-800 mb-8">
          <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400" />
          <span className="text-lg font-medium text-green-700 dark:text-green-300">
            {study.outcome}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 pb-20"
      >
        {/* Summary */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {study.summary}
          </p>
        </div>

        {/* The Challenge */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            The Challenge
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {study.story.challenge}
          </p>
        </div>

        {/* The Approach */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 dark:text-white">
            The Approach
          </h2>
          <ul className="space-y-4">
            {study.story.approach.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* The Results */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 dark:text-white">
            The Results
          </h2>
          <ul className="space-y-4">
            {study.story.results.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* The Impact */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            The Impact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {study.story.impact}
          </p>
        </div>

        {/* Testimonial (if available) */}
        {study.story.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
          >
            <Quote className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
              &ldquo;{study.story.testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              — {study.story.testimonial.author}
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in a similar transformation?
          </p>
          <Link href="/#connect">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
