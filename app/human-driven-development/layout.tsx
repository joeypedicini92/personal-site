import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human Driven Development - Joey Pedicini',
  description: 'Learn about Human Driven Development (HDD), a software development methodology that prioritizes human factors, well-being, and meaningful collaboration while maintaining technical excellence.',
  keywords: 'human driven development, HDD, software development methodology, developer wellbeing, agile, software engineering, human-centered design',
  openGraph: {
    title: 'Human Driven Development - Joey Pedicini',
    description: 'A software development methodology that puts people first',
    type: 'website',
  },
}

export default function HumanDrivenDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}