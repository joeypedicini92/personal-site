'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const photos = [
  {
    id: 1,
    src: '/photos/IMG-20220323-WA0000.jpg',
    alt: 'Joey - March 2022',
    caption: 'Capturing moments in 2022'
  },
  {
    id: 2,
    src: '/photos/IMG-20220502-WA0010.jpg',
    alt: 'Joey - May 2022',
    caption: 'Spring adventures'
  },
  {
    id: 3,
    src: '/photos/IMG-20220831-WA0006.jpg',
    alt: 'Joey - August 2022',
    caption: 'Summer memories'
  },
  {
    id: 4,
    src: '/photos/IMG-20220927-WA0002.jpg',
    alt: 'Joey - September 2022',
    caption: 'Family time'
  },
  {
    id: 5,
    src: '/photos/IMG-20221031-WA0015.jpg',
    alt: 'Joey - October 2022',
    caption: 'Halloween season'
  },
  {
    id: 6,
    src: '/photos/IMG-20230107-WA0000.jpg',
    alt: 'Joey - January 2023',
    caption: 'New year, new moments'
  },
  {
    id: 7,
    src: '/photos/IMG-20230624-WA0000.jpg',
    alt: 'Joey - June 2023',
    caption: 'Mid-year reflections'
  },
  {
    id: 8,
    src: '/photos/IMG-20231230-WA0001.jpg',
    alt: 'Joey - December 2023',
    caption: 'Year-end celebrations'
  },
  {
    id: 9,
    src: '/photos/IMG-20240424-WA0015.jpg',
    alt: 'Joey - April 2024',
    caption: 'Spring 2024'
  },
  {
    id: 10,
    src: '/photos/IMG-20250516-WA0000.jpg',
    alt: 'Joey - May 2025',
    caption: 'Recent adventures'
  },
  {
    id: 11,
    src: '/photos/IMG-20250523-WA0000.jpeg',
    alt: 'Joey - May 2025',
    caption: 'Making memories'
  },
  {
    id: 12,
    src: '/photos/IMG-20250531-WA0006.jpeg',
    alt: 'Joey - May 2025',
    caption: 'Life in motion'
  },
  {
    id: 13,
    src: '/photos/IMG-20250723-WA0002.jpg',
    alt: 'Joey - July 2025',
    caption: 'Summer 2025'
  },
  {
    id: 14,
    src: '/photos/IMG_20250503_151653474.jpg',
    alt: 'Joey - May 2025',
    caption: 'Afternoon moments'
  },
  {
    id: 15,
    src: '/photos/IMG_20250805_173310.jpg',
    alt: 'Joey - August 2025',
    caption: 'Evening captures'
  },
  {
    id: 16,
    src: '/photos/PXL_20220514_141552857.jpg',
    alt: 'Joey - May 2022',
    caption: 'Outdoor adventures'
  },
  {
    id: 17,
    src: '/photos/PXL_20240720_122330935.jpg',
    alt: 'Joey - July 2024',
    caption: 'Weekend vibes'
  },
  {
    id: 18,
    src: '/photos/PXL_20250119_173026912.jpg',
    alt: 'Joey - January 2025',
    caption: 'New year moments'
  }
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photos" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 gradient-text">
            Life in Moments
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Behind every technologist is a human story. Here are glimpses into the moments that matter most—family, adventure, and the joy found in everyday life.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10"></div>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {photo.caption}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.find(p => p.id === selectedPhoto) && (
                <div className="relative">
                  <Image
                    src={photos.find(p => p.id === selectedPhoto)!.src}
                    alt={photos.find(p => p.id === selectedPhoto)!.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                    <p className="text-white text-lg font-medium">
                      {photos.find(p => p.id === selectedPhoto)!.caption}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
                  >
                    ✕
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl"></div>
    </section>
  )
}