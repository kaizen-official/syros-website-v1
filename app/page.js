import BgLayout from "@/components/layout/bgLayout";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import WhyUS from "@/components/sections/why-us";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";

const Clients = dynamic(() => import("@/components/sections/clients"), {
  loading: () => <div className="h-48" />,
});
const MissionVision = dynamic(() => import("@/components/sections/mission-vision"), {
  loading: () => <div className="h-48" />,
});
const SafetyCertifications = dynamic(() => import("@/components/sections/safety").then(mod => mod.SafetyCertifications), {
  loading: () => <div className="h-48" />,
});
const ContactForm = dynamic(() => import("@/components/sections/form"), {
  loading: () => <div className="h-48" />,
});
const Offering = dynamic(() => import("@/components/sections/offering"), {
  loading: () => <div className="h-48" />,
});
const Faqs = dynamic(() => import("@/components/sections/faqs"), {
  loading: () => <div className="h-48" />,
});

export const metadata = {
  title: 'Syros Healthcare - Transforming Hospitals. Strengthening Care. Building Trust.',
  description: 'Syros Healthcare partners with hospitals through an OMA model to deliver clinical excellence, ethical governance, technology-enabled operations, and patient-centric care across India.',
  keywords: 'hospital management company India, OMA partnership, healthcare operations, clinical governance, hospital transformation, NABH, ICU management, Syros Healthcare',
  openGraph: {
    title: 'Syros Healthcare - Transforming Hospitals. Strengthening Care.',
    description: 'Healthcare operations and management company bringing metro-grade critical care to Tier-2 and Tier-3 India.',
    url: 'https://www.syroshealthcare.in',
    siteName: 'Syros Healthcare',
    images: [
      {
        url: 'https://www.syroshealthcare.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Syros Healthcare',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syros Healthcare - Transforming Hospitals. Strengthening Care.',
    description: 'Healthcare operations and management company bringing compassionate, disciplined care to every hospital we operate.',
    images: ['https://www.syroshealthcare.in/logo.png'],
  },
  alternates: {
    canonical: 'https://www.syroshealthcare.in',
  },
}

export default function Home() {
  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            poster="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
          {/* Layered overlay - teal-dominant with cool cast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#146F8A]/40 via-[#13315C]/20 to-[#146F8A]/10" />
          {/* Pulse dot grid */}
          {/* <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
            }}
          /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-30 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <p
              className="text-[#ACFEC0] text-sm tracking-[0.2em] uppercase mb-6 font-mono"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Syros Healthcare
            </p>

            {/* Divider rule */}
            <div className="w-12 h-0.5 bg-[#ACFEC0] mb-8" />

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
              style={{ letterSpacing: '-0.025em' }}>
              Transforming Hospitals.<br />
              <em className="not-italic font-normal text-[#ACFEC0]">Strengthening Care.</em><br />
              Building Trust.
            </h1>

            {/* Brand belief */}
            <p className="text-xl md:text-2xl text-white/70 mb-10 font-light leading-relaxed max-w-xl">
              Healing is a blessing that flourishes where compassion, expertise, and integrity come together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#ACFEC0] text-[#14191F] px-8 py-4 rounded font-semibold text-base hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E9F4F6] to-transparent" />
      </section>

      <Services />
      <WhyUS />
      <Suspense fallback={<div className="h-48" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <MissionVision />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <SafetyCertifications />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Offering />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Faqs />
      </Suspense>
    </BgLayout>
  );
}
