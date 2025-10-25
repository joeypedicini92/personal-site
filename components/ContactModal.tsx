'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Calendar } from 'lucide-react'
import { useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white dark:bg-primary-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-accent-500 to-accent-600 p-6 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Let&apos;s Work Together
                </h3>
                <p className="text-accent-100">
                  Ready to build something meaningful?
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Email */}
                <motion.div
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-primary-200">
                        Email Me
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        For project inquiries and collaboration
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:joey@codecompass.org"
                    className="block w-full p-3 bg-primary-50 dark:bg-primary-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-600 transition-colors duration-200 group-hover:scale-[1.02] transform"
                  >
                    <span className="text-primary-800 dark:text-primary-200 font-medium">
                      joey@codecompass.org
                    </span>
                  </a>
                </motion.div>

                {/* Calendly */}
                <motion.div
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-primary-200">
                        Schedule a Call
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        Book a time that works for both of us
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com/joey-pedicini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 group-hover:scale-[1.02] transform text-center font-medium"
                  >
                    Book a Meeting
                  </a>
                </motion.div>

                {/* Additional message */}
                <motion.div
                  className="text-center pt-4 border-t border-primary-200 dark:border-primary-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-primary-600 dark:text-primary-400 leading-relaxed">
                    Whether you need a fractional CTO, technical consulting, or leadership coaching, 
                    I&apos;m here to help you build technology that serves humanity.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}