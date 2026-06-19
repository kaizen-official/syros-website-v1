import DoctorsClient from './doctorsClient'

export const metadata = {
  title: 'Our Doctors | Syros Healthcare',
  description: 'Meet the medical team at Syros Healthcare. Our empanelled doctors span Emergency Medicine, Internal Medicine, Surgery, Orthopaedics, Obstetrics, and more - all practicing in an ethical, governed clinical environment.',
  keywords: 'Syros doctors, empanelled doctors, find a doctor, medical team, specialists India, hospital doctors, consultants',
  openGraph: {
    title: 'Our Doctors | Syros Healthcare',
    description: 'Meet the medical team at Syros Healthcare - practicing in an ethical, governed clinical environment.',
    url: 'https://www.syroshealthcare.in/doctors',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Doctors at Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Doctors | Syros Healthcare',
    description: 'Meet the medical team at Syros Healthcare - ethical, experienced, and empanelled.',
    images: ['https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/doctors',
  },
}

export default function DoctorsPage() {
  return <DoctorsClient />
}
