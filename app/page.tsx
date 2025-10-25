import Hero from '@/components/Hero'
import Ikigai from '@/components/Ikigai'
import Experience from '@/components/Experience'
import Philosophy from '@/components/Philosophy'
import Connect from '@/components/Connect'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Sections */}
      <Hero />
      <Ikigai />
      <Experience />
      <Philosophy />
      <Connect />
    </main>
  )
}