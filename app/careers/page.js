import CareersPageClient from './careersClient'

export const metadata = {
  title: 'Careers | Join Syros Healthcare',
  description: 'Build a meaningful career in healthcare with Syros. We are hiring doctors, nurses, RMOs, hospital administrators, and healthcare IT professionals across our managed hospitals.',
  keywords: 'careers at Syros Healthcare, healthcare jobs India, hospital jobs, doctor jobs, nursing jobs, RMO jobs, healthcare administrator, hospital management jobs, join Syros',
  openGraph: {
    title: 'Careers | Join Syros Healthcare',
    description: 'Build a meaningful career in healthcare with Syros. We are hiring doctors, nurses, RMOs, hospital administrators, and healthcare IT professionals across our managed hospitals.',
    url: 'https://www.syroshealthcare.in/careers',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Careers at Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Join Syros Healthcare',
    description: 'Build a meaningful career in healthcare with Syros. We are hiring doctors, nurses, RMOs, and hospital administrators.',
    images: ['https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/careers',
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}
