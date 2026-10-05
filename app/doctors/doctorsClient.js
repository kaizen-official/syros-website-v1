"use client";

import BgLayout from '@/components/layout/bgLayout'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import {
  IconArrowRight,
  IconCalendar,
  IconChevronRight,
  IconHome,
  IconSearch,
  IconStethoscope,
} from '@tabler/icons-react'
import { doctorCategories, doctorProfiles } from './data'

export default function DoctorsClient() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All specialities')

  const doctors = useMemo(() => {
    const query = search.trim().toLowerCase()

    return doctorProfiles.filter((doctor) => {
      const matchesCategory = category === 'All specialities' || doctor.category === category
      const matchesSearch = !query || [
        doctor.name,
        doctor.designation,
        doctor.qualifications,
        doctor.category,
        doctor.headline,
      ].some((value) => value.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <BgLayout>
      <section className='relative min-h-[72vh] mt-20 flex items-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=85'
            alt='Medical team at Gajraj Hospital'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#13315C]/95 via-[#146F8A]/82 to-[#146F8A]/45' />
          <div
            className='absolute inset-0 opacity-[0.06]'
            style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-20 py-20 text-white'>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-2 text-xs mb-8 font-mono'
          >
            <Link href='/' className='flex items-center gap-1 text-white/70 hover:text-[#ACFEC0] transition-colors'>
              <IconHome size={14} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Our Doctors</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className='max-w-3xl'
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Gajraj Hospital · Managed by Syros Healthcare</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5' />
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5'>
              Meet Your <span className='text-[#ACFEC0]'>Care Team</span>
            </h1>
            <p className='text-base md:text-lg text-white/75 max-w-2xl leading-relaxed'>
              Experienced specialists delivering evidence-based, patient-centred care across medicine, surgery, critical care, women&apos;s health, orthopaedics, cardiology and plastic surgery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='relative z-10 -mt-10 pb-6'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='bg-white border border-[#D8DEE6] shadow-xl rounded-xl p-4 md:p-5'>
            <div className='relative'>
              <IconSearch size={19} className='absolute left-4 top-1/2 -translate-y-1/2 text-[#146F8A]' />
              <input
                type='search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder='Search by doctor, speciality or qualification'
                aria-label='Search doctors'
                className='w-full rounded-lg border border-[#D8DEE6] bg-[#F7FBFC] pl-11 pr-4 py-3 text-sm text-[#14191F] outline-none focus:border-[#146F8A] focus:ring-2 focus:ring-[#146F8A]/10'
              />
            </div>

            <div className='flex gap-2 overflow-x-auto mt-4 pb-1' aria-label='Filter doctors by speciality'>
              {['All specialities', ...doctorCategories].map((item) => (
                <button
                  key={item}
                  type='button'
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${category === item
                      ? 'border-[#146F8A] bg-[#146F8A] text-white'
                      : 'border-[#D8DEE6] bg-white text-gray-600 hover:border-[#146F8A]/50 hover:text-[#146F8A]'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-end justify-between gap-4 mb-8'>
            <div>
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-2 font-mono'>Specialist Directory</p>
              <h2 className='text-3xl md:text-4xl font-light text-[#14191F]'>Doctors at <span className='text-[#146F8A]'>Gajraj Hospital</span></h2>
            </div>
            <p className='hidden sm:block text-xs text-gray-500'>{doctors.length} {doctors.length === 1 ? 'doctor' : 'doctors'}</p>
          </div>

          {doctors.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {doctors.map((doctor, index) => (
                <motion.article
                  key={doctor.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className='group bg-white rounded-xl border border-[#D8DEE6] overflow-hidden hover:border-[#146F8A]/45 hover:shadow-xl transition-all duration-300 flex flex-col'
                >
                  <Link href={`/doctors/${doctor.slug}`} className='block relative h-72 overflow-hidden bg-gradient-to-br from-[#E9F4F6] to-white'>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      style={{ objectPosition: doctor.imagePosition }}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.025]'
                    />
                    <div className='absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#13315C]/45 to-transparent' />
                    <span className='absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] font-mono uppercase tracking-wide text-[#146F8A] shadow-sm'>
                      Gajraj Hospital
                    </span>
                  </Link>

                  <div className='p-6 flex flex-col flex-1'>
                    <p className='text-[11px] leading-relaxed tracking-[0.12em] uppercase text-[#146F8A] font-mono mb-2'>{doctor.category}</p>
                    <h3 className='text-2xl font-semibold text-[#14191F] mb-1'>{doctor.name}</h3>
                    <p className='text-sm font-medium text-[#1F6E5C] mb-1'>{doctor.designation}</p>
                    <p className='text-xs text-gray-500 leading-relaxed mb-4'>{doctor.qualifications}</p>
                    <p className='text-sm text-gray-600 leading-relaxed mb-6 flex-1'>{doctor.headline}</p>

                    <div className='flex gap-3 pt-4 border-t border-[#D8DEE6]'>
                      <Link
                        href={`/doctors/${doctor.slug}`}
                        className='inline-flex flex-1 items-center justify-center gap-2 rounded bg-[#146F8A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#0e5268] transition-colors'
                      >
                        View Profile <IconArrowRight size={15} />
                      </Link>
                      <Link
                        href={`/contact?doctor=${encodeURIComponent(doctor.name)}`}
                        aria-label={`Book an appointment with ${doctor.name}`}
                        className='inline-flex items-center justify-center rounded border border-[#146F8A] px-3 text-[#146F8A] hover:bg-[#E9F4F6] transition-colors'
                      >
                        <IconCalendar size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className='bg-white border border-[#D8DEE6] rounded-xl py-16 px-6 text-center'>
              <IconStethoscope size={34} className='text-[#146F8A] mx-auto mb-4' />
              <h3 className='text-xl text-[#14191F] mb-2'>No doctors found</h3>
              <p className='text-sm text-gray-500 mb-5'>Try another doctor name, qualification or speciality.</p>
              <button
                type='button'
                onClick={() => { setSearch(''); setCategory('All specialities') }}
                className='text-sm font-semibold text-[#146F8A] hover:underline'
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className='py-14 bg-[#13315C] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-3 font-mono'>Need Help Choosing?</p>
          <h2 className='text-3xl md:text-4xl font-light mb-4'>We&apos;ll connect you with the right specialist.</h2>
          <p className='text-sm text-white/70 max-w-2xl mx-auto mb-7'>Share your health concern with our team and we will help you identify the most appropriate doctor and consultation pathway.</p>
          <Link href='/contact' className='inline-flex items-center gap-2 rounded bg-[#ACFEC0] px-6 py-3 text-sm font-semibold text-[#14191F] hover:bg-white transition-colors'>
            Book an Appointment <IconArrowRight size={17} />
          </Link>
        </div>
      </section>
    </BgLayout>
  )
}
