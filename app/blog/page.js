import BlogClient from './blogClient'

export const metadata = {
  title: 'Health Education & Blog | Syros Healthcare',
  description: 'Health education articles from Syros Healthcare — preventive care, diabetes, hypertension, emergency signs, ICU awareness, seasonal health, and lifestyle guidance.',
  keywords: 'health blog India, preventive health tips, diabetes care, hypertension, heart attack symptoms, health education, Syros Healthcare',
  openGraph: {
    title: 'Health Education & Blog | Syros Healthcare',
    description: 'Trusted health education to help you make informed decisions about your wellbeing.',
    url: 'https://www.syroshealthcare.in/blog',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Syros Healthcare Blog' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/blog' },
}

export default function BlogPage() {
  return <BlogClient />
}
