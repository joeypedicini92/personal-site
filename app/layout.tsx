import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joey Pedicini - Technologist • Coach • Mentor',
  description: 'Building better humans through better software. Personal website of Joey Pedicini, a fractional CTO, software consultant, and leadership coach who believes in human-driven development.',
  keywords: ['Joey Pedicini', 'Fractional CTO', 'Software Consultant', 'Leadership Coach', 'Human Driven Development', 'CodeCompass', 'Technology', 'Philosophy'],
  authors: [{ name: 'Joey Pedicini', url: 'https://www.linkedin.com/in/joey-p-a3343924/' }],
  creator: 'Joey Pedicini',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joeypedicini.com',
    title: 'Joey Pedicini - Technologist • Coach • Mentor',
    description: 'Building better humans through better software.',
    siteName: 'Joey Pedicini',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joey Pedicini - Personal Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joey Pedicini - Technologist • Coach • Mentor',
    description: 'Building better humans through better software.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-smooth transition-theme`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}