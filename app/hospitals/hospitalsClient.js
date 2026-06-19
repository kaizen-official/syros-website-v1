"use client";

import BgLayout from '@/components/layout/bgLayout'
import React from 'react'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconMapPin, IconPhone, IconClock, IconArrowRight, IconBuildingHospital, IconStethoscope } from '@tabler/icons-react'
import Link from 'next/link'

const hospitalFeatures = [
  { icon: IconBuildingHospital, title: 'Professional Operations', desc: 'Each Syros-managed hospital runs on standardised operational systems - covering staffing, facility, supply chain, and administration.' },
  { icon: IconStethoscope, title: 'Clinical Governance', desc: 'Medical protocols, infection control, clinical audits, and NABH-oriented quality standards are enforced at every unit.' },
  { icon: IconPhone, title: '24/7 Emergency', desc: 'All Syros hospitals maintain 24/7 emergency and critical care readiness - with trained staff and defined response protocols.' },
  { icon: IconClock, title: 'OPD & Scheduled Care', desc: 'Regular OPD schedules with specialist consultants, supported by digital appointment and documentation systems.' },
]

export default function HospitalsClient() {
  return (
    <BgLayout>
      {/* Hero */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80" alt="Syros Healthcare Hospitals" className='w-full h-full object-cover object-center' />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white'>
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='flex items-center gap-2 text-xs mb-6 font-mono'>
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'><IconHome size={14} /><span>Home</span></Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Our Hospitals</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Managed & Operated</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Our <span className='text-[#ACFEC0]'>Hospitals</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Every hospital managed and operated by Syros is marked by one line: <span className='text-[#ACFEC0] font-medium'>Managed and operated by Syros Healthcare under OMA partnership.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className='bg-[#E9F4F6] rounded border border-[#146F8A]/20 p-8'>
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Building Our Network</p>
              <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
                Hospital listings are being updated
              </h2>
              <p className='text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto'>
                Syros Healthcare is actively expanding its network of managed hospitals. Detailed hospital pages - including services, doctors, timings, location, and appointment details - will be published as each hospital comes onboard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Every Syros Hospital Offers */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-10'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Standard</p>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
              What Every <span className='text-[#146F8A]'>Syros Hospital</span> Offers
            </h2>
          </motion.div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {hospitalFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className='bg-white rounded border border-[#D8DEE6] p-6 text-center hover:border-[#146F8A]/40 hover:shadow-md transition-all'>
                <div className='w-12 h-12 bg-[#E9F4F6] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Icon size={22} className='text-[#146F8A]' />
                </div>
                <h3 className='text-sm font-semibold text-[#14191F] mb-2'>{title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OMA Badge */}
      <section className='py-12 bg-white/60'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className='inline-flex items-center gap-2 bg-[#146F8A] text-white text-xs font-mono px-4 py-2 rounded-full mb-6 tracking-widest uppercase'>
              OMA Partnership
            </div>
            <h2 className='text-xl md:text-2xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
              Are you a hospital owner?
            </h2>
            <p className='text-sm text-gray-600 mb-6 leading-relaxed'>
              If you own or operate a hospital or nursing home and are looking for professional management support, explore our OMA partnership model.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/partner'>
                <button className='flex items-center gap-2 bg-[#146F8A] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#0e5268] transition-all'>
                  Learn About OMA <IconArrowRight size={16} />
                </button>
              </Link>
              <Link href='/contact'>
                <button className='flex items-center gap-2 bg-white text-[#146F8A] border border-[#146F8A] text-sm font-semibold px-6 py-3 rounded hover:bg-[#E9F4F6] transition-all'>
                  <IconMapPin size={16} /> Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}
