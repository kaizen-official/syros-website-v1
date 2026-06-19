import AboutPageClient from './aboutClient'

export const metadata = {
  title: 'About Syros Healthcare - Our Story, Mission & OMA Model',
  description: 'Learn about Syros Healthcare, a modern hospital operations and management company bringing clinical excellence, ethical governance, and compassionate care to Tier-2 and Tier-3 India through the OMA model.',
  keywords: 'about Syros Healthcare, hospital management company, OMA model, Dr Aabid Amin Bhat, healthcare governance, hospital transformation India',
  openGraph: {
    title: 'About Syros Healthcare - Our Story, Mission & OMA Model',
    description: 'Hospital operations and management company bringing metro-grade care to underserved communities through the OMA partnership model.',
    url: 'https://www.syroshealthcare.in/about',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'About Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Syros Healthcare - Our Story, Mission & OMA Model',
    description: 'Hospital operations and management company bringing metro-grade care to underserved communities.',
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
