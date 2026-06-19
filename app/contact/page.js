import ContactPageClient from './contactClient'

export const metadata = {
  title: 'Contact Syros Healthcare - Book Appointment or Partner With Us',
  description: 'Contact Syros Healthcare to book an appointment, reach our 24/7 emergency line, or enquire about hospital partnership under the OMA model. We respond within 24 hours.',
  keywords: 'contact Syros Healthcare, book appointment, hospital partnership enquiry, OMA enquiry, emergency contact, patient appointment',
  openGraph: {
    title: 'Contact Syros Healthcare - Book Appointment or Partner With Us',
    description: 'Book an appointment, reach our emergency line, or enquire about hospital partnership. Syros Healthcare responds within 24 hours.',
    url: 'https://www.syroshealthcare.in/contact',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://www.syroshealthcare.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Syros Healthcare - Book Appointment or Partner With Us',
    description: 'Book an appointment or enquire about hospital partnership. Syros Healthcare responds within 24 hours.',
    images: ['https://www.syroshealthcare.in/logo.png'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
