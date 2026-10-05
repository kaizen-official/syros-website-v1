import DoctorsClient from './doctorsClient'

export const metadata = {
  title: 'Doctors at Gajraj Hospital, Karnal',
  description: 'Meet specialists at Gajraj Hospital, Karnal, managed by Syros Healthcare. Find physicians and surgeons across medicine, surgery, critical care, women\'s health, orthopaedics, cardiology and plastic surgery.',
  keywords: 'Gajraj Hospital doctors, doctors in Karnal, physician in Karnal, surgeon in Karnal, cardiologist in Karnal, gynaecologist in Karnal, orthopaedic surgeon in Karnal',
  openGraph: {
    title: 'Doctors at Gajraj Hospital, Karnal',
    description: 'Meet the specialist medical team at Gajraj Hospital, Karnal, managed by Syros Healthcare.',
    url: 'https://www.syroshealthcare.in/doctors',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: '/doctors/dr-aabid-amin-bhat.png',
        width: 1200,
        height: 630,
        alt: 'Doctors at Gajraj Hospital, Karnal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doctors at Gajraj Hospital, Karnal',
    description: 'Meet the specialist medical team at Gajraj Hospital, Karnal, managed by Syros Healthcare.',
    images: ['/doctors/dr-aabid-amin-bhat.png'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/doctors',
  },
}

export default function DoctorsPage() {
  return <DoctorsClient />
}
