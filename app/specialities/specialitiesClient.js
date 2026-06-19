"use client";

import BgLayout from '@/components/layout/bgLayout'
import React from 'react'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

const specialities = [
  {
    title: 'Emergency & Trauma Care',
    tag: '24/7 Available',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    desc: 'Round-the-clock emergency services with trained emergency physicians, trauma protocols, and resuscitation-ready setup. Stabilisation and transfer within defined time windows.',
    services: ['Acute trauma management', 'Resuscitation & CPR', 'Emergency stabilisation', 'Ambulance coordination'],
  },
  {
    title: 'ICU & Critical Care',
    tag: 'Critical Care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    desc: 'Intensive care units with trained ICU nurses, ventilator management, continuous monitoring, and specialist intensivist rounds following structured ICU protocols.',
    services: ['Ventilator management', 'Multi-organ monitoring', 'Sepsis protocols', 'Post-surgical ICU care'],
  },
  {
    title: 'Internal Medicine',
    tag: 'General Medicine',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    desc: 'Comprehensive management of acute and chronic medical conditions by experienced physicians - diabetes, hypertension, infections, respiratory, gastro, and systemic diseases.',
    services: ['Diabetes management', 'Hypertension care', 'Respiratory conditions', 'Infectious diseases'],
  },
  {
    title: 'General Surgery',
    tag: 'Surgery',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80',
    desc: 'Elective and emergency surgical procedures with dedicated OT infrastructure, sterile protocols, post-operative care, and experienced surgical teams.',
    services: ['Laparoscopic procedures', 'Abdominal surgeries', 'Emergency surgeries', 'Wound & trauma surgery'],
  },
  {
    title: 'Orthopaedics',
    tag: 'Bone & Joint',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    desc: 'Fracture management, joint care, spine conditions, and physiotherapy-integrated orthopaedic treatment - for acute injuries and chronic musculoskeletal conditions.',
    services: ['Fracture fixation', 'Joint replacement', 'Spine care', 'Physiotherapy integration'],
  },
  {
    title: 'Obstetrics & Gynaecology',
    tag: 'Women\'s Health',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    desc: 'Safe motherhood, antenatal care, high-risk pregnancy management, normal and caesarean deliveries, and comprehensive women\'s health services with dedicated gynaecology OPD.',
    services: ['Antenatal care', 'Normal & C-section delivery', 'High-risk pregnancy', 'Gynaecology OPD'],
  },
  {
    title: 'Diagnostics & Imaging',
    tag: 'Lab & Radiology',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    desc: 'On-site laboratory, X-ray, ultrasound, ECG, and echocardiography - accurate diagnostics with fast turnaround for inpatient and outpatient needs.',
    services: ['Laboratory services', 'X-ray & ultrasound', 'ECG & Echo', 'Pathology & microbiology'],
  },
  {
    title: 'Preventive Health',
    tag: 'Health Packages',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    desc: 'Structured health checkup packages for individuals, seniors, and corporates - designed to detect risk early, prevent disease, and promote long-term wellbeing.',
    services: ['Basic health checkup', 'Executive health package', 'Senior citizen package', 'Diabetes & cardiac screening'],
  },
]

export default function SpecialitiesClient() {
  return (
    <BgLayout>
      {/* Hero */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1920&q=80" alt="Medical Specialities" className='w-full h-full object-cover object-center' />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white'>
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='flex items-center gap-2 text-xs mb-6 font-mono'>
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'><IconHome size={14} /><span>Home</span></Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Specialities</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Clinical Services</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Our <span className='text-[#ACFEC0]'>Specialities</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Comprehensive, protocol-driven clinical care across multiple specialities - delivered with compassion and accountability at every Syros-managed hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {specialities.map(({ title, tag, image, desc, services }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className='bg-white rounded border border-[#D8DEE6] overflow-hidden hover:shadow-xl hover:border-[#146F8A]/30 transition-all group'>
                <div className='relative h-48 overflow-hidden'>
                  <img src={image} alt={title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#14191F]/60 to-transparent'></div>
                  <span className='absolute top-3 left-3 bg-[#146F8A] text-white text-xs font-mono px-2.5 py-1 rounded-full tracking-wide'>{tag}</span>
                </div>
                <div className='p-6'>
                  <h2 className='text-lg font-semibold text-[#14191F] mb-2'>{title}</h2>
                  <p className='text-sm text-gray-600 leading-relaxed mb-4'>{desc}</p>
                  <div className='grid grid-cols-2 gap-1.5'>
                    {services.map(s => (
                      <div key={s} className='flex items-center gap-1.5 text-xs text-gray-500'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[#ACFEC0] flex-shrink-0'></div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-14'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
              Need a consultation or appointment?
            </h2>
            <p className='text-sm text-gray-600 mb-8'>
              Reach us to book an appointment, find a doctor, or enquire about any of our services.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='flex items-center gap-2 bg-[#146F8A] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#0e5268] transition-all'>
                  Book Appointment <IconArrowRight size={16} />
                </button>
              </Link>
              <Link href='/doctors'>
                <button className='flex items-center gap-2 bg-white text-[#146F8A] border border-[#146F8A] text-sm font-semibold px-6 py-3 rounded hover:bg-[#E9F4F6] transition-all'>
                  Find a Doctor <IconArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}
