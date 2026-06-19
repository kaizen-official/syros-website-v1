"use client";

import Link from 'next/link'
import { motion } from 'motion/react'

function Offering() {
  const offerings = [
    {
      heading: "HOSPITAL OPERATIONS MANAGEMENT",
      description: "Syros assumes full operational responsibility - administration, clinical systems, HR, vendor management, and daily hospital workflow - under a structured OMA agreement.",
      points: [
        "Complete hospital administration",
        "Medical and non-medical staffing",
        "Vendor and procurement control",
        "SOPs for all departments",
        "Revenue cycle management",
        "Financial discipline & reporting"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
      imagePosition: "right"
    },
    {
      heading: "CLINICAL GOVERNANCE & QUALITY",
      description: "Evidence-based clinical protocols, NABH-oriented quality systems, infection control practices, and structured specialist engagement to elevate care standards across every department.",
      points: [
        "Evidence-based clinical protocols",
        "NABH-oriented quality systems",
        "Infection control practices",
        "Antibiotic stewardship",
        "Mortality & morbidity review",
        "Specialist onboarding framework"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80",
      imagePosition: "left"
    },
    {
      heading: "BRANDING, MARKETING & OUTREACH",
      description: "A strong healthcare brand builds patient trust. Syros handles digital presence, community outreach, TPA empanelment, and corporate tie-ups to grow your hospital's footprint.",
      points: [
        "Hospital branding & visual identity",
        "Digital marketing & SEO",
        "Community health camps",
        "TPA & insurance empanelment",
        "Corporate tie-ups",
        "Patient experience programs"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=900&q=80",
      imagePosition: "right"
    },
    {
      heading: "DIGITAL HEALTHCARE TRANSFORMATION",
      description: "Paperless, accountable, and efficient - Syros deploys digital EMR, billing systems, tele-ICU capabilities, and real-time reporting dashboards across every managed unit.",
      points: [
        "Digital EMR implementation",
        "Paperless billing & documentation",
        "Tele-ICU & remote monitoring",
        "Pharmacy management system",
        "Real-time dashboards",
        "Compliance & statutory reporting"
      ],
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80",
      imagePosition: "left"
    }
  ];

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>

        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>
            OMA Partnership
          </p>
          <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
            Hospital Management <span className='text-[#146F8A]'>Services</span>
          </h2>
          <div className='w-10 h-0.5 bg-[#146F8A] mx-auto mb-5'></div>
          <p className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Syros does not merely &ldquo;run&rdquo; hospitals - it upgrades them into disciplined, trusted, growth-oriented healthcare institutions through its Operations and Management Agreement model.
          </p>
        </div>

        {/* Offering Items */}
        <div className='space-y-16'>
          {offerings.map((offering, index) => (
            <div key={index} className='relative'>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${offering.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>

                {/* Content */}
                <div className={offering.imagePosition === 'left' ? 'lg:col-start-2' : ''}>
                  <div className='mb-6'>
                    <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-2 font-mono'>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className='text-2xl md:text-3xl font-semibold text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
                      {offering.heading}
                    </h3>
                    <div className='w-10 h-0.5 bg-[#146F8A] mb-5'></div>
                    <p className='text-base text-gray-600 leading-relaxed'>
                      {offering.description}
                    </p>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {offering.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className='flex items-center gap-3 p-3.5 bg-white border border-[#D8DEE6] rounded hover:border-[#146F8A]/40 hover:bg-[#E9F4F6] transition-all duration-300 group cursor-default'
                      >
                        <div className='w-5 h-5 rounded-full bg-[#E9F4F6] group-hover:bg-[#146F8A] flex items-center justify-center transition-all duration-300 flex-shrink-0 border border-[#146F8A]/20'>
                          <p className='text-[#146F8A] group-hover:text-white transition-colors duration-300 text-xs leading-none'>✓</p>
                        </div>
                        <span className='text-gray-700 group-hover:text-[#14191F] text-sm font-medium transition-colors duration-300'>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={offering.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className='relative rounded overflow-hidden shadow-xl border border-[#D8DEE6] group'>
                    <img
                      src={offering.image}
                      alt={offering.heading}
                      className='w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#146F8A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    {/* Code label */}
                    <div className='absolute top-4 left-4 bg-[#14191F]/80 backdrop-blur-sm rounded px-2.5 py-1'>
                      <p className='text-[#ACFEC0] text-xs tracking-widest font-mono'>
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {index < offerings.length - 1 && (
                <div className='mt-16 border-b-2 border-[#D8DEE6]'></div>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <Link href='/hospital-management' className='inline-block bg-[#146F8A] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors'>
            View All Hospital Management Services
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Offering
