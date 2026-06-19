import HospitalManagementClient from './hospitalManagementClient'

export const metadata = {
  title: 'Hospital Management Services | Syros Healthcare',
  description: 'Syros provides complete hospital operations, medical administration, quality systems, HR planning, revenue cycle management, digital transformation, and compliance under its OMA model.',
  keywords: 'hospital management services, OMA operations, medical administration, revenue cycle, digital healthcare transformation, hospital compliance India',
  openGraph: {
    title: 'Hospital Management Services | Syros Healthcare',
    description: 'Full-spectrum hospital management — operations, governance, branding, and digital systems for growth-oriented healthcare institutions.',
    url: 'https://www.syroshealthcare.in/hospital-management',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Hospital Management Services' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/hospital-management' },
}

export default function HospitalManagementPage() {
  return <HospitalManagementClient />
}
