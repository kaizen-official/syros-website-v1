import QualityClient from './qualityClient'

export const metadata = {
  title: 'Quality & Governance | Syros Healthcare',
  description: 'Syros Healthcare maintains patient safety, clinical protocols, infection control, ethical billing, digital documentation, and NABH-oriented quality systems across every hospital we operate.',
  keywords: 'hospital quality standards, clinical governance, patient safety, NABH, infection control, ethical billing, Syros Healthcare',
  openGraph: {
    title: 'Quality & Governance | Syros Healthcare',
    description: 'Good healthcare depends on systems, protocols, documentation, compassion, and accountability — not doctors alone.',
    url: 'https://www.syroshealthcare.in/quality-governance',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Quality & Governance at Syros Healthcare' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/quality-governance' },
}

export default function QualityPage() {
  return <QualityClient />
}
