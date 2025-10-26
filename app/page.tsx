import Hero from '@/components/Hero'
import Ikigai from '@/components/Ikigai'
import Experience from '@/components/Experience'
import CaseStudies from '@/components/CaseStudies'
import Philosophy from '@/components/Philosophy'
import PhotoGallery from '@/components/PhotoGallery'
import Connect from '@/components/Connect'
import ThemeToggle from '@/components/ThemeToggle'
import BackgroundEffects from '@/components/BackgroundEffects'

export default function Home() {
  return (
    <main className="relative">
      {/* Enhanced animated background */}
      <BackgroundEffects />

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Sections */}
      <Hero />
      <Philosophy />
      <Ikigai />
      <Experience />
      <CaseStudies />
      
      <PhotoGallery />
      <Connect />
    </main>
  )
}