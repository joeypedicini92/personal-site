import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/case-studies-data'
import CaseStudyContent from '@/components/CaseStudyContent'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    notFound()
  }

  return <CaseStudyContent study={study} />
}
