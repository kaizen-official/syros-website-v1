"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import { motion } from 'motion/react'
import { IconQuote, IconStethoscope, IconTarget, IconUsers, IconAward } from '@tabler/icons-react'
import Link from 'next/link'

const highlights = [
  { icon: IconStethoscope, title: 'Clinical Vision', desc: 'Building hospitals where medical decisions are ethical, evidence-based, and patient-first — never driven by commercial pressure.' },
  { icon: IconTarget, title: 'Operational Discipline', desc: 'Translating clinical standards into daily systems — rounds, audits, documentation, and accountability at every level.' },
  { icon: IconUsers, title: 'Doctor & Staff Ecosystem', desc: 'Creating environments where clinicians feel supported, respected, and empowered to practice medicine with integrity.' },
  { icon: IconAward, title: 'Institution Building', desc: 'Transforming underperforming hospitals into trusted, growth-oriented healthcare institutions through the Syros OMA model.' },
]

const focusAreas = [
  'Hospital operations and clinical governance',
  'ICU, emergency, and critical care strengthening',
  'Ethical billing and revenue transparency',
  'Doctor empanelment and specialist engagement',
  'Digital EMR and healthcare technology',
  'Tier-2 and tier-3 healthcare access',
]

export default function LeadershipClient() {
  return (
    <BgLayout>
      <PageHero
        label="Medical Leadership"
        title="Leading With"
        highlight="Purpose & Precision"
        breadcrumb="Leadership"
        description="The vision behind Syros Healthcare — building hospitals where patients feel safe, doctors feel supported, and systems work with discipline, compassion, and transparency."
        image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Syros Healthcare Leadership"
      />

      {/* Founder Profile */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 items-start'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='lg:col-span-2'
            >
              <div className='relative'>
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Aabid Amin Bhat"
                  className='w-full aspect-[4/5] object-cover rounded border border-[#D8DEE6] shadow-lg'
                />
                <div className='absolute bottom-4 left-4 right-4 bg-[#14191F]/90 backdrop-blur-sm rounded p-4 border border-white/10'>
                  <p className='text-[#ACFEC0] text-xs tracking-widest uppercase font-mono mb-1'>Founder & Chairman</p>
                  <p className='text-white font-semibold text-lg'>Dr. Aabid Amin Bhat</p>
                  <p className='text-white/60 text-sm'>Founder-Director / Chairman & CEO</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='lg:col-span-3'
            >
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Founder Message</p>
              <h2 className='text-3xl md:text-4xl font-light text-[#14191F] mb-5' style={{ letterSpacing: '-0.025em' }}>
                A Vision for <span className='text-[#146F8A]'>Better Hospitals</span>
              </h2>

              <div className='bg-[#E9F4F6] rounded border-l-4 border-[#146F8A] p-6 mb-8'>
                <IconQuote size={24} className='text-[#146F8A] mb-3 opacity-60' />
                <p className='text-base text-[#14191F] leading-relaxed italic' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
                  &ldquo;At Syros, our vision is to create hospitals where patients feel safe, doctors feel supported, and systems work with discipline, compassion, and transparency.&rdquo;
                </p>
                <p className='text-sm text-gray-500 mt-3'>— Dr. Aabid Amin Bhat</p>
              </div>

              <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                Dr. Aabid Amin Bhat founded Syros Healthcare with a clear conviction: that quality hospital care in India should not be limited to metro cities or premium institutions. Millions in tier-2 and tier-3 cities deserve hospitals that are ethically run, clinically sound, and operationally disciplined.
              </p>
              <p className='text-sm text-gray-600 leading-relaxed mb-8'>
                Under his leadership, Syros partners with hospital owners through the Operations and Management Agreement (OMA) model — taking responsibility for clinical governance, operations, technology, branding, and financial discipline while preserving ownership and building long-term institutional trust.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                {[
                  { label: 'Role', value: 'Founder-Director / Chairman & CEO' },
                  { label: 'Organisation', value: 'Syros Healthcare' },
                  { label: 'Focus', value: 'Hospital transformation & OMA partnerships' },
                  { label: 'Geography', value: 'Tier-2 & Tier-3 India' },
                ].map(({ label, value }) => (
                  <div key={label} className='bg-white rounded border border-[#D8DEE6] p-4'>
                    <p className='text-xs text-gray-400 uppercase tracking-widest font-mono mb-1'>{label}</p>
                    <p className='text-sm font-medium text-[#14191F]'>{value}</p>
                  </div>
                ))}
              </div>

              <div className='flex gap-3 flex-wrap'>
                <Link href='/leadership' className='inline-block border border-[#D8DEE6] text-[#14191F] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#E9F4F6] transition-colors'>
                  Meet Our Leadership
                </Link>
                <Link href='/contact' className='inline-block bg-[#146F8A] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors'>
                  Connect With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Focus */}
      <section className='py-16 bg-white/60'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Leadership Focus</p>
            <h2 className='text-3xl md:text-4xl font-light text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              What Drives <span className='text-[#146F8A]'>Our Direction</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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

      {/* Areas of Impact */}
      <section className='py-16'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Areas of Impact</p>
          <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-8' style={{ letterSpacing: '-0.02em' }}>
            Building Healthcare <span className='text-[#146F8A]'>Institutions That Last</span>
          </h2>
          <div className='flex flex-wrap justify-center gap-3'>
            {focusAreas.map((area) => (
              <span key={area} className='bg-[#E9F4F6] text-[#14191F] text-xs font-medium px-4 py-2 rounded-full border border-[#D8DEE6]'>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </BgLayout>
  )
}
