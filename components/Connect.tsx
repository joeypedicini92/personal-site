'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Linkedin, 
  Instagram, 
  Youtube, 
  Music, 
  ExternalLink,
  MessageCircle,
  Compass,
  Heart,
  Users,
  BookOpen
} from 'lucide-react'

export default function Connect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joey-p-a3343924/',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-600',
      description: 'Professional network and career insights'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/holistic_cto',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      description: 'Personal posts about life, philosophy, and growth'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@holistic_cto',
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      description: 'Personal videos about faith, struggles, and Bible studies'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/1bygXaDLZHtDGYtCSBzoCR',
      icon: Music,
      color: 'from-green-500 to-green-600',
      description: 'Original music I&apos;ve created and composed'
    }
  ]

  const platforms = [
    {
      name: 'MentorCruise',
      url: 'https://mentorcruise.com/mentor/joeypedicini',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      description: 'One-on-one mentoring for developers and leaders'
    },
    {
      name: 'CodeCompass',
      url: 'https://codecompass.org',
      icon: Compass,
      color: 'from-cyan-500 to-blue-600',
      description: 'Startup development and technical consulting'
    },
    {
      name: 'Human Driven Development',
      url: 'https://humandrivendevelopment.dev',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      description: 'Framework for empathy in engineering'
    },
    {
      name: 'Bonjournl',
      url: 'https://bonjournl.com',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-600',
      description: 'Mindful journaling and reflection tools'
    }
  ]

  const LinkCard = ({ item, index }: { item: any; index: number }) => (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden rounded-2xl glass soft-shadow p-6 h-full transition-all duration-300 group-hover:shadow-2xl">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 5 }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-2 text-primary-800 dark:text-primary-200 group-hover:text-primary-900 dark:group-hover:text-primary-100 transition-colors duration-300">
          {item.name}
        </h3>
        
        <p className="text-sm text-primary-600 dark:text-primary-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Link indicator */}
        <div className="flex items-center text-xs text-primary-500 dark:text-primary-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
          <ExternalLink className="w-3 h-3 mr-1" />
          <span>Visit</span>
        </div>

        {/* Hover effect */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        />
      </div>
    </motion.a>
  )

  return (
    <section id="connect" className="section-padding bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-primary-800 transition-theme">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 gradient-text leading-relaxed py-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto font-light mb-8">
            Join me in building technology that serves humanity
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8 text-primary-800 dark:text-primary-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Social & Content
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <LinkCard key={link.name} item={link} index={index} />
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8 text-primary-800 dark:text-primary-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Platforms & Projects
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <LinkCard key={platform.name} item={platform} index={index + socialLinks.length} />
            ))}
          </div>
        </div>

        {/* Discord Community CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex flex-col items-center p-8 glass rounded-3xl max-w-md mx-auto">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            
            <h4 className="text-xl font-serif font-semibold mb-3 text-primary-800 dark:text-primary-200">
              Join Our Community
            </h4>
            
            <p className="text-primary-600 dark:text-primary-300 mb-6 text-center leading-relaxed">
              Connect with fellow developers, leaders, and human-centered technologists in our Discord community.
            </p>
            
            <motion.a
              href="https://discord.gg/RBZWcWvV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-primary-200 dark:border-primary-600 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-primary-600 dark:text-primary-400 font-light">
            Built with ❤️ using Next.js, TypeScript, TailwindCSS, and Framer Motion
          </p>
          <p className="text-sm text-primary-500 dark:text-primary-500 mt-2">
            © 2024 Joey Pedicini • All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  )
}