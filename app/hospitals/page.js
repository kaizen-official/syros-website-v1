import HospitalsClient from './hospitalsClient'

export const metadata = {
  title: 'Our Hospitals | Syros Healthcare',
  description: 'Syros Healthcare operates hospitals under OMA partnerships - bringing clinical governance, quality systems, and ethical care to communities across India.',
  keywords: 'Syros hospitals, OMA managed hospitals, hospitals in India, Syros Healthcare locations, hospital network',
  openGraph: {
    title: 'Our Hospitals | Syros Healthcare',
    description: 'Syros Healthcare operates hospitals under OMA partnerships - bringing clinical governance, quality systems, and ethical care to communities across India.',
    url: 'https://www.syroshealthcare.in/hospitals',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Syros Healthcare Hospitals',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Hospitals | Syros Healthcare',
    description: 'Syros-managed hospitals - bringing governance, quality, and ethical care to communities.',
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/hospitals',
  },
}

export default function HospitalsPage() {
  return <HospitalsClient />
}
