import InsuranceClient from './insuranceClient'

export const metadata = {
  title: 'Insurance & TPA | Cashless Healthcare | Syros Healthcare',
  description: 'Learn about cashless insurance, TPA empanelment, and panel coordination at Syros-managed hospitals. Documents required for admission and insurance desk contact.',
  keywords: 'cashless insurance hospital, TPA empanelment, health insurance India, hospital insurance desk, Syros Healthcare',
  openGraph: {
    title: 'Insurance & TPA | Syros Healthcare',
    description: 'Transparent insurance coordination and cashless healthcare at Syros-managed hospitals.',
    url: 'https://www.syroshealthcare.in/insurance',
    siteName: 'Syros Healthcare',
    images: [{ url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Insurance and TPA at Syros Healthcare' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.syroshealthcare.in/insurance' },
}

export default function InsurancePage() {
  return <InsuranceClient />
}
