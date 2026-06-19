"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import { motion } from 'motion/react'
import {
  IconShieldCheck, IconClipboardList, IconHeart, IconCertificate,
  IconAward, IconActivity, IconUsers, IconMessageCircle,
} from '@tabler/icons-react'
import Link from 'next/link'

const pillars = [
  { icon: IconClipboardList, title: 'Clinical Protocols', desc: 'Evidence-based care pathways, standardised treatment protocols, and structured clinical rounds across all departments.' },
  { icon: IconShieldCheck, title: 'Infection Control', desc: 'WHO-aligned hygiene standards, sterilisation SOPs, isolation protocols, and continuous staff training on infection prevention.' },
  { icon: IconHeart, title: 'Patient Safety', desc: 'Zero-harm commitment with incident reporting, root-cause analysis, and corrective action tracking at every managed unit.' },
  { icon: IconCertificate, title: 'Digital Documentation', desc: 'Paperless EMR systems ensuring every clinical decision, prescription, and procedure is recorded, traceable, and auditable.' },
  { icon: IconAward, title: 'Ethical Billing', desc: 'Transparent, itemised billing with no hidden charges, no unnecessary procedures, and clear patient communication on costs.' },
  { icon: IconActivity, title: 'NABH-Oriented Systems', desc: 'Quality frameworks aligned with NABH standards — policies, audits, indicators, and continuous improvement cycles.' },
]

const commitments = [
  { icon: IconUsers, title: 'ICU Care Standards', desc: 'Ventilator protocols, sepsis bundles, nursing ratios, and intensivist-led rounds in every critical care unit.' },
  { icon: IconMessageCircle, title: 'Grievance Redressal', desc: 'Structured feedback channels, defined response timelines, and transparent resolution for patient and family concerns.' },
  { icon: IconShieldCheck, title: 'Quality Indicators', desc: 'Monthly tracking of clinical outcomes, infection rates, readmissions, and patient satisfaction — reviewed and acted upon.' },
  { icon: IconHeart, title: 'Compassionate Experience', desc: 'Staff training on empathy, communication, and dignity — because systems alone do not heal; people do.' },
]

export default function QualityClient() {
  return (
    <BgLayout>
      <PageHero
        label="Quality & Governance"
        title="Care You Can"
        highlight="Trust"
        breadcrumb="Quality & Governance"
        description="Syros believes that good healthcare is not dependent only on doctors, but on systems, protocols, documentation, compassion, and accountability."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Quality and Governance at Syros Healthcare"
      />

      {/* Intro */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className='text-sm text-gray-600 leading-relaxed mb-6'>
              Every hospital managed by Syros operates under a unified clinical governance framework. This means the same standards of safety, documentation, infection control, and ethical practice — whether you visit us in a metro city or a tier-3 town.
            </p>
            <div className='bg-[#E9F4F6] rounded border border-[#146F8A]/20 p-6'>
              <p className='text-base text-[#14191F] leading-relaxed italic' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
                &ldquo;We bring discipline to the bedside, accountability to the boardroom, and compassion to every interaction.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className='py-12 bg-white/60'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Framework</p>
            <h2 className='text-3xl md:text-4xl font-light text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Six Pillars of <span className='text-[#146F8A]'>Clinical Governance</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className='bg-white rounded border border-[#D8DEE6] p-6 hover:border-[#146F8A]/30 hover:shadow-md transition-all'
              >
                <div className='w-10 h-10 bg-[#E9F4F6] rounded flex items-center justify-center mb-4'>
                  <Icon size={20} className='text-[#146F8A]' />
                </div>
                <h3 className='text-sm font-semibold text-[#14191F] mb-2'>{title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Commitments */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Patient Commitments</p>
            <h2 className='text-3xl md:text-4xl font-light text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              What Every Patient <span className='text-[#146F8A]'>Can Expect</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {commitments.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className='flex gap-4 bg-white rounded border border-[#D8DEE6] p-6'
              >
                <div className='w-10 h-10 bg-[#ACFEC0] rounded flex items-center justify-center flex-shrink-0'>
                  <Icon size={18} className='text-[#1F6E5C]' />
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-[#14191F] mb-1'>{title}</h3>
                  <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-14 bg-[#14191F]'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-3 font-mono'>Partner With Us</p>
          <h2 className='text-2xl md:text-3xl font-light text-white mb-4' style={{ letterSpacing: '-0.02em' }}>
            Bring These Standards to Your Hospital
          </h2>
          <p className='text-sm text-white/60 mb-8 leading-relaxed'>
            Syros deploys its full quality and governance framework through the OMA partnership model.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/partner' className='bg-[#ACFEC0] text-[#14191F] px-6 py-3 rounded text-sm font-semibold hover:bg-white transition-colors'>
              Explore OMA Partnership
            </Link>
            <Link href='/contact' className='border border-white/30 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-white/10 transition-colors'>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </BgLayout>
  )
}
