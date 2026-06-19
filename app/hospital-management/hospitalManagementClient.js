"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import { motion } from 'motion/react'
import { IconCheck } from '@tabler/icons-react'
import Link from 'next/link'

const services = [
  {
    title: 'Complete Hospital Operations',
    desc: 'End-to-end administration — staffing, supply chain, facility management, and daily workflow across all departments.',
    points: ['Medical & non-medical administration', 'SOPs for every department', 'Vendor & procurement control', 'Facility & asset management'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Medical Administration & Quality',
    desc: 'Clinical governance, NABH-oriented quality systems, infection control, and structured specialist engagement frameworks.',
    points: ['Evidence-based clinical protocols', 'NABH-oriented quality systems', 'Infection control practices', 'Mortality & morbidity review'],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'HR & Manpower Planning',
    desc: 'Structured recruitment, training, performance management, and retention strategies for clinical and non-clinical staff.',
    points: ['Doctor & nurse onboarding', 'RMO deployment framework', 'Training & CME programs', 'Performance-based accountability'],
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Revenue Cycle & TPA Coordination',
    desc: 'Transparent billing, insurance empanelment, TPA coordination, and corporate tie-ups to grow sustainable revenue.',
    points: ['Revenue cycle management', 'TPA & insurance coordination', 'Corporate empanelment', 'Ethical billing practices'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Branding & Patient Outreach',
    desc: 'Hospital identity, digital marketing, community health programs, and patient experience improvement.',
    points: ['Brand identity & visual systems', 'Digital marketing & SEO', 'Community health camps', 'Patient experience programs'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Digital Healthcare Transformation',
    desc: 'EMR, paperless billing, tele-ICU, pharmacy systems, and real-time reporting dashboards.',
    points: ['Digital EMR implementation', 'Paperless documentation', 'Tele-ICU & remote monitoring', 'Compliance & statutory reporting'],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
  },
]

export default function HospitalManagementClient() {
  return (
    <BgLayout>
      <PageHero
        label="OMA Services"
        title="Hospital Management"
        highlight="Services"
        breadcrumb="Hospital Management"
        description="Syros does not merely run hospitals — it upgrades them into disciplined, trusted, growth-oriented healthcare institutions through structured operations and management."
        image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Hospital Management Services"
      />

      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16'>
          <p className='text-sm text-gray-600 leading-relaxed'>
            Under the Syros Operations and Management Agreement (OMA), we take responsibility for every dimension of hospital performance — from clinical governance and staffing to branding, billing, and digital systems — while the hospital owner retains ownership and shares in the growth.
          </p>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20'>
          {services.map(({ title, desc, points, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-2 font-mono'>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-4' style={{ letterSpacing: '-0.02em' }}>
                  {title}
                </h2>
                <p className='text-sm text-gray-600 leading-relaxed mb-5'>{desc}</p>
                <ul className='space-y-2'>
                  {points.map((point) => (
                    <li key={point} className='flex items-center gap-2 text-sm text-gray-600'>
                      <div className='w-5 h-5 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0'>
                        <IconCheck size={11} className='text-[#1F6E5C]' />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={image}
                  alt={title}
                  className='w-full aspect-[4/3] object-cover rounded border border-[#D8DEE6] shadow-lg'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='py-14'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-4' style={{ letterSpacing: '-0.02em' }}>
            Ready to transform your hospital?
          </h2>
          <p className='text-sm text-gray-600 mb-8'>
            Speak with our partnerships team about how Syros can manage and upgrade your healthcare facility.
          </p>
          <Link href='/partner' className='inline-block bg-[#146F8A] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors'>
            Partner With Syros
          </Link>
        </div>
      </section>
    </BgLayout>
  )
}
