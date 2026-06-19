import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#146F8A' },
    { media: '(prefers-color-scheme: dark)', color: '#146F8A' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.syroshealthcare.in'),
  title: {
    default: "Syros Healthcare - Transforming Hospitals. Strengthening Care.",
    template: "%s | Syros Healthcare"
  },
  description: "Syros Healthcare is a modern healthcare operations and management company that partners with hospitals through an OMA model to deliver clinical excellence, ethical governance, and patient-centric care across India.",
  keywords: [
    "hospital management",
    "healthcare operations",
    "OMA partnership",
    "hospital management company India",
    "clinical governance",
    "patient care",
    "ICU management",
    "healthcare administration",
    "hospital operations India",
    "tier 2 tier 3 hospital",
    "NABH accreditation",
    "healthcare management services",
    "Syros Healthcare",
    "hospital transformation",
    "medical management",
  ],
  authors: [{ name: "Syros Healthcare" }],
  creator: "Syros Healthcare",
  publisher: "Syros Healthcare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.syroshealthcare.in',
    siteName: 'Syros Healthcare',
    title: 'Syros Healthcare - Transforming Hospitals. Strengthening Care.',
    description: 'Healthcare operations and management company partnering with hospitals to deliver clinical excellence and patient-centric care.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Syros Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syros Healthcare - Transforming Hospitals. Strengthening Care.',
    description: 'Healthcare operations and management company delivering clinical excellence and ethical governance.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in',
  },
  category: 'healthcare',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Syros Healthcare',
    url: 'https://www.syroshealthcare.in',
    logo: 'https://www.syroshealthcare.in/logo.png',
    description: 'Healthcare operations and management company partnering with hospitals to deliver clinical excellence, ethical governance, and patient-centric care.',
    telephone: '+919999999999',
    email: 'info@syroshealthcare.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hospital Operations Management',
            description: 'Complete hospital operations under OMA partnership model',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clinical Governance',
            description: 'Evidence-based clinical protocols, quality standards, and NABH-oriented systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Patient Care Services',
            description: 'Emergency, ICU, general medicine, surgery, and preventive health services',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${newsreader.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
