'use client'

import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-slate-900/80 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-xl ${
              i % 4 === 0 ? 'w-64 h-64 bg-blue-200/20 dark:bg-blue-400/10' :
              i % 4 === 1 ? 'w-48 h-48 bg-purple-200/20 dark:bg-purple-400/10' :
              i % 4 === 2 ? 'w-56 h-56 bg-pink-200/20 dark:bg-pink-400/10' :
              'w-40 h-40 bg-indigo-200/20 dark:bg-indigo-400/10'
            }`}
            style={{
              left: `${(i * 30 + Math.random() * 20)}%`,
              top: `${(i * 15 + Math.random() * 20)}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Animated mesh lines */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,20 Q25,10 50,20 T100,20"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
          
          <motion.path
            d="M0,60 Q25,50 50,60 T100,60"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          />
          
          <motion.path
            d="M20,0 Q30,25 20,50 T20,100"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
          />
          
          <motion.path
            d="M80,0 Q70,25 80,50 T80,100"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-gradient-to-r from-transparent via-black to-transparent"></div>
    </div>
  )
}