'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Users, Heart, Brain, Lightbulb, Shield, Sparkles } from 'lucide-react'

export default function HumanDrivenDevelopment() {
  const principles = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Developer Well-being",
      description: "Prioritizing mental health, sustainable practices, and work-life balance as core development considerations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meaningful Collaboration",
      description: "Fostering genuine human connections through pair programming, transparent communication, and psychological safety."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Empathy-First Design",
      description: "Understanding real user needs and creating inclusive, accessible solutions that serve diverse communities."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Supporting personal growth, skill development, and knowledge sharing within development teams."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Psychological Safety",
      description: "Creating environments where developers feel safe to express concerns, share ideas, and learn from mistakes."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Human-Centered Values",
      description: "Balancing technical excellence with human factors, ensuring technology serves human flourishing."
    }
  ]

  const practices = [
    {
      category: "Team Dynamics",
      items: [
        "Daily stand-ups focused on collaboration over status updates",
        "Organic retrospectives with rotating facilitators",
        "Natural team building through paired programming",
        "Regular 1:1s for genuine human connection"
      ]
    },
    {
      category: "Project Management",
      items: [
        "Lightweight estimation with t-shirt sizes",
        "Expected dates instead of rigid deadlines",
        "Transparent communication about challenges",
        "Work distribution based on team preferences"
      ]
    },
    {
      category: "Development Practices",
      items: [
        "Pair programming for knowledge sharing and connection",
        "AI-assisted code reviews for basic quality checks",
        "Documentation written with empathy for future readers",
        "Strategic technical debt management based on developer feedback"
      ]
    },
    {
      category: "Performance & Growth",
      items: [
        "Continuous feedback and transparency",
        "Holistic evaluation including cultural contributions",
        "Personalized growth paths aligned with aspirations",
        "Open communication in all directions"
      ]
    }
  ]

  const resources = [
    {
      title: "Implementation Guide",
      description: "A comprehensive guide to implementing HDD principles in your organization",
      url: "https://codecompass.org/codecompass-blog/blog-posts/human-driven-development-a-high-level-implementation-guide",
      type: "Article"
    },
    {
      title: "Putting People First",
      description: "Core principles and benefits of Human Driven Development",
      url: "https://codecompass.org/codecompass-blog/blog-posts/human-driven-development-putting-people-first-in-software-engineering",
      type: "Article"
    },
    {
      title: "HDD Methodology",
      description: "Introduction to Human Driven Development as a new software development methodology",
      url: "https://www.linkedin.com/pulse/new-software-development-methodology-human-driven-joey-pedicini-58cpe/",
      type: "LinkedIn Article"
    },
    {
      title: "HDD Newsletter",
      description: "Stay updated with the latest insights and practices in Human Driven Development",
      url: "https://www.linkedin.com/newsletters/human-driven-development-7191793741806886913/",
      type: "Newsletter"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-primary-900 dark:to-primary-800">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/#philosophy" 
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Philosophy</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 gradient-text leading-tight">
              Human Driven Development
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 max-w-4xl mx-auto leading-relaxed">
              A software development methodology that prioritizes human factors, well-being, and meaningful collaboration while maintaining technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              What is Human Driven Development?
            </h2>
            <div className="space-y-6 text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
              <p>
                Human Driven Development (HDD) represents a paradigm shift in software engineering that prioritizes the human aspects of development over purely technical considerations. Unlike traditional methodologies that focus primarily on code and technical specifications, HDD acknowledges that software is created by humans, for humans.
              </p>
              <p>
                At its core, HDD emphasizes empathy, collaboration, and well-being in the software development process. This approach recognizes that happy, engaged, and well-supported developers create better software solutions. By focusing on the human elements of development, organizations can improve both team satisfaction and project outcomes.
              </p>
              <p>
                HDD isn&apos;t just another methodology—it&apos;s a fundamental shift in how we approach software development, ensuring that technology serves its ultimate purpose: helping people flourish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              Core Principles
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
              The foundational values that guide Human Driven Development practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="text-accent-600 dark:text-accent-400 mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary-800 dark:text-primary-200">
                  {principle.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Practices */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              Implementation Practices
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
              Practical strategies for implementing HDD principles in your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary-800 dark:text-primary-200">
                  {practice.category}
                </h3>
                <ul className="space-y-3">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-primary-600 dark:text-primary-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              Benefits of HDD
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Higher user satisfaction and adoption rates",
                "Improved team morale and reduced burnout",
                "More sustainable and maintainable codebases",
                "Better alignment between technical solutions and user needs",
                "Reduced development costs through early problem identification",
                "Enhanced creativity and innovation through psychological safety"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-primary-700 dark:text-primary-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              Learn More
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-3xl mx-auto">
              Explore additional resources to deepen your understanding of Human Driven Development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-100 dark:bg-accent-900/30 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <ExternalLink className="w-5 h-5 text-primary-400 group-hover:text-accent-500 transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary-800 dark:text-primary-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary-800 dark:text-primary-200">
              Ready to Transform Your Development Culture?
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-8 leading-relaxed">
              Human Driven Development isn&apos;t just about writing better code—it&apos;s about creating better experiences for everyone involved in the software development process.
            </p>
            <Link
              href="/#connect"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-medium hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Let&apos;s Connect</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}