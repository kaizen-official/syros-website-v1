import LeadershipClient from './leadershipClient'

export const metadata = {
  title: 'Leadership | Dr. Aabid Amin Bhat | Syros Healthcare',
  description: 'Meet Dr. Aabid Amin Bhat, Founder-Director and Chairman & CEO of Syros Healthcare. Learn about the medical leadership driving ethical hospital governance and transformation across India.',
  keywords: 'Dr Aabid Amin Bhat, Syros Healthcare leadership, founder CEO, medical leadership India, hospital management leader',
  openGraph: {
    title: 'Leadership | Syros Healthcare',
    description: 'Medical leadership committed to hospitals where patients feel safe, doctors feel supported, and systems work with discipline and transparency.',
    url: 'https://www.syroshealthcare.in/leadership',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Syros Healthcare Leadership' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/leadership' },
}

export default function LeadershipPage() {
  return <LeadershipClient />
}
