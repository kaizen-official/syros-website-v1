import SpecialitiesClient from './specialitiesClient'

export const metadata = {
  title: 'Medical Specialities | Syros Healthcare',
  description: 'Explore healthcare specialities at Syros-managed hospitals - Emergency & Trauma, ICU & Critical Care, Internal Medicine, General Surgery, Orthopaedics, Obstetrics & Gynaecology, Diagnostics, and Preventive Health.',
  keywords: 'medical specialities, emergency care, ICU, internal medicine, surgery, orthopaedics, gynaecology, diagnostics, preventive health, Syros Healthcare',
  openGraph: {
    title: 'Medical Specialities | Syros Healthcare',
    description: 'Comprehensive healthcare specialities at Syros-managed hospitals - from Emergency Care to Preventive Health.',
    url: 'https://www.syroshealthcare.in/specialities',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Medical Specialities at Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Specialities | Syros Healthcare',
    description: 'Comprehensive healthcare specialities at Syros-managed hospitals.',
    images: ['https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/specialities',
  },
}

export default function SpecialitiesPage() {
  return <SpecialitiesClient />
}
