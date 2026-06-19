import PartnerClient from './partnerClient'

export const metadata = {
  title: 'Partner With Us | Hospital OMA Partnership | Syros Healthcare',
  description: 'Partner with Syros Healthcare through our Operations and Management Agreement (OMA) model. We manage hospital operations, clinical governance, branding, digital systems, and revenue - transforming hospitals into trusted care institutions.',
  keywords: 'hospital OMA partnership, hospital management company India, partner with healthcare company, hospital operations management, clinical governance, OMA model, hospital transformation',
  openGraph: {
    title: 'Partner With Us | Hospital OMA Partnership | Syros Healthcare',
    description: 'Transform your hospital with Syros. Our OMA model covers clinical governance, operations, branding, digital systems, and revenue management.',
    url: 'https://www.syroshealthcare.in/partner',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Partner With Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner With Us | Hospital OMA Partnership | Syros Healthcare',
    description: 'Transform your hospital with Syros. Our OMA model covers clinical governance, operations, branding, and revenue management.',
    images: ['https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/partner',
  },
}

export default function PartnerPage() {
  return <PartnerClient />
}
