'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex items-center justify-center w-14 h-14 glass rounded-full soft-shadow hover:shadow-lg transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.6 }}
      />
      
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-amber-500" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary-800 dark:bg-primary-200 text-primary-100 dark:text-primary-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-800 dark:bg-primary-200 rotate-45" />
      </div>
    </motion.button>
  )
}