import PrivacyPageClient from './privacyClient'

export const metadata = {
  title: 'Privacy Policy | Syros Healthcare',
  description: 'Read the privacy policy of Syros Healthcare. Learn how we collect, use, and protect your personal information when you use our healthcare services and website.',
  keywords: 'privacy policy, data protection, Syros Healthcare privacy, personal information, healthcare data',
  openGraph: {
    title: 'Privacy Policy | Syros Healthcare',
    description: 'Read the privacy policy of Syros Healthcare. Learn how we collect, use, and protect your personal information when you use our healthcare services.',
    url: 'https://www.syroshealthcare.in/privacy-policy',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Syros Healthcare',
    description: 'Read the privacy policy of Syros Healthcare. Learn how we collect, use, and protect your personal information.',
    images: ['https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/privacy-policy',
  },
}

export default function PrivcyPage() {
  return <PrivacyPageClient />
}
