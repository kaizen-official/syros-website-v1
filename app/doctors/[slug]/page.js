import { notFound } from 'next/navigation'
import DoctorProfileClient from './doctorProfileClient'
import { doctorProfiles, getDoctorBySlug } from '../data'

export function generateStaticParams() {
  return doctorProfiles.map((doctor) => ({ slug: doctor.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    return { title: 'Doctor Not Found' }
  }

  const canonical = `https://www.syroshealthcare.in/doctors/${doctor.slug}`

  return {
    title: doctor.metaTitle,
    description: doctor.metaDescription,
    keywords: doctor.keywords,
    alternates: { canonical },
    openGraph: {
      title: doctor.metaTitle,
      description: doctor.metaDescription,
      url: canonical,
      siteName: 'Syros Healthcare',
      images: [{ url: doctor.image, alt: doctor.name }],
      locale: 'en_IN',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: doctor.metaTitle,
      description: doctor.metaDescription,
      images: [doctor.image],
    },
  }
}

export default async function DoctorProfilePage({ params }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  return <DoctorProfileClient doctor={doctor} />
}
