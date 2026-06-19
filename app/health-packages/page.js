import HealthPackagesClient from './healthPackagesClient'

export const metadata = {
  title: 'Health Packages | Preventive Checkups | Syros Healthcare',
  description: 'Book preventive health checkup packages at Syros-managed hospitals — Basic, Executive, Diabetes, Cardiac, Senior Citizen, Women\'s Health, and more. Early detection saves lives.',
  keywords: 'health checkup packages, preventive health, executive health checkup, diabetes screening, cardiac screening, Syros Healthcare',
  openGraph: {
    title: 'Health Packages | Syros Healthcare',
    description: 'Structured health checkup packages designed to detect risk early and promote long-term wellbeing.',
    url: 'https://www.syroshealthcare.in/health-packages',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Health Packages at Syros Healthcare' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/health-packages' },
}

export default function HealthPackagesPage() {
  return <HealthPackagesClient />
}
