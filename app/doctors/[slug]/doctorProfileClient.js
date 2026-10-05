"use client";

import BgLayout from '@/components/layout/bgLayout'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  IconArrowLeft,
  IconArrowRight,
  IconAward,
  IconCalendar,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconHome,
  IconMapPin,
  IconRosetteDiscountCheck,
  IconStethoscope,
} from '@tabler/icons-react'

function ContentList({ items }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'>
      {items.map((item) => (
        <li key={item} className='flex items-start gap-3 text-sm leading-relaxed text-gray-600'>
          <span className='mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#ACFEC0]/55'>
            <IconCheck size={12} className='text-[#1F6E5C]' />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DoctorProfileClient({ doctor }) {
  const appointmentHref = `/contact?doctor=${encodeURIComponent(doctor.name)}`

  return (
    <BgLayout>
      <section className='relative overflow-hidden bg-[#13315C] pt-32 pb-16 md:pt-40 md:pb-20'>
        <div className='absolute inset-0 opacity-[0.07]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.4px, transparent 1.4px)', backgroundSize: '24px 24px' }} />
        <div className='absolute -top-20 -right-24 h-80 w-80 rounded-full bg-[#146F8A]/45 blur-3xl' />
        <div className='absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#ACFEC0]/10 blur-3xl' />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex flex-wrap items-center gap-2 text-xs font-mono mb-10'
          >
            <Link href='/' className='flex items-center gap-1 text-white/55 hover:text-[#ACFEC0] transition-colors'>
              <IconHome size={13} /> Home
            </Link>
            <IconChevronRight size={12} className='text-[#ACFEC0]' />
            <Link href='/doctors' className='text-white/55 hover:text-[#ACFEC0] transition-colors'>Doctors</Link>
            <IconChevronRight size={12} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>{doctor.name}</span>
          </motion.nav>

          <div className='grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-16 items-center'>
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className='inline-flex items-center gap-2 rounded-full border border-[#ACFEC0]/25 bg-white/5 px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase text-[#ACFEC0] font-mono mb-5'>
                <IconStethoscope size={14} /> {doctor.category}
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.05] mb-4'>{doctor.name}</h1>
              <p className='text-lg md:text-xl text-[#ACFEC0] mb-3'>{doctor.designation}</p>
              <p className='text-sm text-white/65 leading-relaxed mb-3'>{doctor.qualifications}</p>
              <p className='inline-flex items-center gap-2 text-sm text-white/75 mb-6'>
                <IconAward size={18} className='text-[#ACFEC0]' /> {doctor.experience}
              </p>
              <p className='text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light mb-8'>{doctor.headline}</p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link href={appointmentHref} className='inline-flex items-center justify-center gap-2 rounded bg-[#ACFEC0] px-6 py-3 text-sm font-semibold text-[#14191F] hover:bg-white transition-colors'>
                  <IconCalendar size={18} /> Book Appointment
                </Link>
                <Link href='/doctors' className='inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors'>
                  <IconArrowLeft size={17} /> All Doctors
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='relative max-w-sm lg:max-w-none mx-auto w-full'
            >
              <div className='absolute -inset-3 rounded-2xl border border-[#ACFEC0]/20' />
              <div className='relative aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-2xl'>
                <img src={doctor.image} alt={doctor.name} style={{ objectPosition: doctor.imagePosition }} className='h-full w-full object-cover' />
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#13315C]/70 to-transparent p-5 pt-16'>
                  <p className='text-xs text-white/65'>Consultant at</p>
                  <p className='text-sm font-semibold text-white'>Gajraj Hospital, Karnal</p>
                  <p className='text-[10px] text-[#ACFEC0] mt-1 uppercase tracking-widest font-mono'>Managed by Syros Healthcare</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-14 md:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14 items-start'>
            <div className='space-y-12'>
              <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>About the Doctor</p>
                <h2 className='text-3xl md:text-4xl font-light text-[#14191F] mb-6'>About {doctor.name.replace('Dr. ', '')}</h2>
                <div className='space-y-4 text-sm md:text-[15px] text-gray-600 leading-7'>
                  {doctor.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='rounded-xl bg-white border border-[#D8DEE6] p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[#E9F4F6]'>
                    <IconRosetteDiscountCheck size={22} className='text-[#146F8A]' />
                  </span>
                  <div>
                    <p className='text-[10px] tracking-[0.18em] uppercase text-[#146F8A] font-mono'>Clinical Focus</p>
                    <h2 className='text-2xl md:text-3xl font-light text-[#14191F]'>Areas of Expertise</h2>
                  </div>
                </div>
                <ContentList items={doctor.expertise} />
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>How We Can Help</p>
                <h2 className='text-3xl md:text-4xl font-light text-[#14191F] mb-6'>{doctor.servicesTitle}</h2>
                <ContentList items={doctor.services} />
              </motion.section>

              {doctor.detailSections?.map((section) => (
                <motion.section key={section.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='border-l-2 border-[#146F8A] pl-5 md:pl-7'>
                  <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-4'>{section.title}</h2>
                  <div className='space-y-3 text-sm md:text-[15px] text-gray-600 leading-7'>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </motion.section>
              ))}

              <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='relative overflow-hidden rounded-xl bg-[#E9F4F6] border border-[#146F8A]/15 p-7 md:p-9'>
                <div className='absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#ACFEC0]/35 blur-2xl' />
                <p className='relative text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Patient Care Message</p>
                <div className='relative space-y-3 text-base text-[#13315C] leading-7'>
                  {doctor.careMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </motion.section>

              {doctor.faqs && (
                <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Patient Information</p>
                  <h2 className='text-3xl md:text-4xl font-light text-[#14191F] mb-6'>Frequently Asked Questions</h2>
                  <div className='space-y-3'>
                    {doctor.faqs.map((faq) => (
                      <details key={faq.question} className='group rounded-lg bg-white border border-[#D8DEE6] p-5 open:border-[#146F8A]/40'>
                        <summary className='cursor-pointer list-none pr-7 text-sm font-semibold text-[#14191F] marker:hidden'>{faq.question}</summary>
                        <p className='pt-3 text-sm text-gray-600 leading-6'>{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            <aside className='lg:sticky lg:top-28 space-y-5'>
              <div className='rounded-xl bg-white border border-[#D8DEE6] p-6 shadow-sm'>
                <p className='text-xs tracking-[0.18em] uppercase text-[#146F8A] font-mono mb-2'>Book a Consultation</p>
                <h2 className='text-2xl font-light text-[#14191F] mb-3'>{doctor.name}</h2>
                <p className='text-sm text-gray-600 leading-6 mb-5'>{doctor.cta}</p>
                <Link href={appointmentHref} className='inline-flex w-full items-center justify-center gap-2 rounded bg-[#146F8A] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0e5268] transition-colors'>
                  <IconCalendar size={17} /> Book Appointment
                </Link>
              </div>

              <div className='rounded-xl bg-[#13315C] p-6 text-white'>
                <div className='flex items-start gap-3 mb-4'>
                  <IconMapPin size={20} className='text-[#ACFEC0] mt-0.5 flex-none' />
                  <div>
                    <p className='text-sm font-semibold'>Gajraj Hospital</p>
                    <p className='text-xs text-white/60 mt-1'>Karnal, Haryana</p>
                  </div>
                </div>
                <div className='flex items-start gap-3 border-t border-white/10 pt-4'>
                  <IconClock size={20} className='text-[#ACFEC0] mt-0.5 flex-none' />
                  <div>
                    <p className='text-sm font-semibold'>OPD Timings</p>
                    <p className='text-xs text-white/60 mt-1'>Contact the appointment desk for the latest schedule.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='bg-[#146F8A] py-14 text-white'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 text-center'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-3 font-mono'>Consultation</p>
          <h2 className='text-3xl md:text-4xl font-light mb-4'>Ready to speak with {doctor.name}?</h2>
          <p className='text-sm text-white/75 max-w-2xl mx-auto mb-7'>{doctor.cta}</p>
          <Link href={appointmentHref} className='inline-flex items-center gap-2 rounded bg-[#ACFEC0] px-6 py-3 text-sm font-semibold text-[#14191F] hover:bg-white transition-colors'>
            Request an Appointment <IconArrowRight size={17} />
          </Link>
        </div>
      </section>
    </BgLayout>
  )
}
