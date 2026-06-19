"use client";

import BgLayout from '@/components/layout/bgLayout'
import React from 'react'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconArrowRight, IconCheck, IconUserCheck } from '@tabler/icons-react'
import Link from 'next/link'

const specialties = [
  'Emergency Medicine', 'Internal Medicine', 'General Surgery',
  'Orthopaedics', 'Obstetrics & Gynaecology', 'Critical Care',
  'Paediatrics', 'Diagnostics & Radiology', 'Anaesthesiology',
  'Pathology', 'Physiotherapy', 'Preventive Medicine',
]

const doctorStandards = [
  { title: 'Ethical Practice', desc: 'All Syros doctors are expected to uphold zero-tolerance ethical standards - no irrational prescriptions, no unnecessary investigations.' },
  { title: 'Protocol-Driven Care', desc: 'Every doctor practices within Syros clinical protocols and documentation standards - ensuring consistency and quality of care.' },
  { title: 'Continuous Education', desc: 'Regular CME sessions, case reviews, and specialist mentorship are built into the clinical environment at all Syros hospitals.' },
  { title: 'Patient-First Philosophy', desc: 'Doctors at Syros are evaluated not only on clinical outcomes but on patient communication, satisfaction, and compassion.' },
]

export default function DoctorsClient() {
  return (
    <BgLayout>
      {/* Hero */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1920&q=80" alt="Doctors at Syros Healthcare" className='w-full h-full object-cover object-center' />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white'>
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='flex items-center gap-2 text-xs mb-6 font-mono'>
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'><IconHome size={14} /><span>Home</span></Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Our Doctors</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Medical Team</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Our <span className='text-[#ACFEC0]'>Doctors</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Experienced, ethical, and empanelled specialists - practicing in a governed clinical environment built for quality and patient trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Building Profiles Note */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className='bg-[#E9F4F6] rounded border border-[#146F8A]/20 p-8'>
              <div className='w-12 h-12 bg-[#146F8A]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconUserCheck size={22} className='text-[#146F8A]' />
              </div>
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Doctor Profiles Coming Soon</p>
              <h2 className='text-xl md:text-2xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
                We are building our doctor directory
              </h2>
              <p className='text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto'>
                Individual doctor profiles - with speciality, qualifications, experience, OPD timings, and appointment booking - will be published for each hospital as our network grows.
                In the meantime, contact us to connect with the right specialist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties We Cover */}
      <section className='py-12'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-10'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Specialities</p>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
              Doctors Across <span className='text-[#146F8A]'>All Specialities</span>
            </h2>
          </motion.div>
          <div className='flex flex-wrap gap-3 justify-center'>
            {specialties.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
                className='flex items-center gap-1.5 bg-white border border-[#D8DEE6] text-[#14191F] text-xs font-medium px-4 py-2 rounded-full hover:border-[#146F8A]/40 hover:bg-[#E9F4F6] transition-all'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#ACFEC0]'></div>
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Standards */}
      <section className='py-12 bg-white/60'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-10'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Standard</p>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F]' style={{ letterSpacing: '-0.02em' }}>
              What Defines a <span className='text-[#146F8A]'>Syros Doctor</span>
            </h2>
          </motion.div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {doctorStandards.map(({ title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex items-start gap-4 bg-white rounded border border-[#D8DEE6] p-5'>
                <div className='w-8 h-8 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <IconCheck size={14} className='text-[#1F6E5C]' />
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

      {/* Are You a Doctor? */}
      <section className='py-14'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
              Are you a doctor or healthcare professional?
            </h2>
            <p className='text-sm text-gray-600 mb-7'>
              Join Syros as an empanelled consultant or full-time clinician. Practice with integrity in a structured, governed environment.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/careers'>
                <button className='flex items-center gap-2 bg-[#146F8A] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#0e5268] transition-all'>
                  View Career Opportunities <IconArrowRight size={16} />
                </button>
              </Link>
              <Link href='/contact'>
                <button className='flex items-center gap-2 bg-white text-[#146F8A] border border-[#146F8A] text-sm font-semibold px-6 py-3 rounded hover:bg-[#E9F4F6] transition-all'>
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}
