"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  IconHome, IconChevronRight, IconCheck, IconX,
  IconBuildingHospital, IconStethoscope, IconUsers, IconTrendingUp,
  IconShieldCheck, IconDeviceDesktop, IconStar, IconBriefcase,
  IconHeartHandshake, IconArrowRight
} from '@tabler/icons-react'
import Link from 'next/link'

const omaServices = [
  { icon: IconBuildingHospital, title: 'Hospital Operations Management', desc: 'Day-to-day operations, facility management, staffing, supply chain, and administrative systems - fully managed.' },
  { icon: IconStethoscope, title: 'Clinical Governance & Quality', desc: 'Medical protocols, clinical audits, infection control, patient safety, and NABH-oriented quality systems.' },
  { icon: IconUsers, title: 'Doctor & Staff Onboarding', desc: 'Specialist empanelment, RMO deployment, nursing governance, and allied health staffing frameworks.' },
  { icon: IconTrendingUp, title: 'Revenue Cycle Management', desc: 'Billing transparency, TPA/insurance coordination, corporate empanelment, and financial reporting.' },
  { icon: IconStar, title: 'Branding & Patient Outreach', desc: 'Brand identity, digital marketing, community health programs, and patient acquisition strategies.' },
  { icon: IconDeviceDesktop, title: 'Digital Healthcare Transformation', desc: 'EMR systems, telemedicine, analytics dashboards, and digital documentation across departments.' },
  { icon: IconShieldCheck, title: 'Compliance & Licensing', desc: 'Statutory compliance, licensing coordination, and regulatory readiness for all applicable frameworks.' },
  { icon: IconBriefcase, title: 'Procurement & Vendor Management', desc: 'Standardised procurement, vendor evaluation, cost control, and supply chain efficiency.' },
]

const whoCanPartner = [
  'Existing hospitals and nursing homes seeking professional management',
  'Diagnostic centres and specialty units wanting to expand services',
  'Healthcare entrepreneurs building new hospital facilities',
  'Hospital trusts and foundations improving operations and governance',
  'Tier-2 and tier-3 city healthcare facilities seeking urban-standard systems',
]

const processSteps = [
  { step: '01', title: 'Discovery & Assessment', desc: 'We assess your hospital, understand its strengths, gaps, patient volume, and growth potential. No obligation.' },
  { step: '02', title: 'OMA Proposal', desc: 'We present a detailed Operations and Management Agreement - clear terms, defined responsibilities, and aligned goals.' },
  { step: '03', title: 'Onboarding & Integration', desc: 'Syros deploys its operational, clinical, and administrative teams. Systems are built. Standards are established.' },
  { step: '04', title: 'Transformation & Growth', desc: 'Your hospital grows with disciplined management, improved patient trust, better outcomes, and sustainable revenue.' },
]

export default function PartnerClient() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', hospital: '', location: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'partner', _subject: 'New OMA Partnership Enquiry - Syros Healthcare', ...formData }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setShowThankYou(true)
        setFormData({ name: '', phone: '', email: '', hospital: '', location: '', message: '' })
      } else {
        alert('Error: ' + (data.error || 'Failed to submit. Please try again.'))
      }
    } catch {
      alert('Failed to submit. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <BgLayout>
      {/* Hero */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80"
            alt="Partner With Syros Healthcare"
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/90 to-[#146F8A]/75'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white'>
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='flex items-center gap-2 text-xs mb-6 font-mono'>
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'>
              <IconHome size={14} /><span>Home</span>
            </Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Partner With Us</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>OMA Partnership</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Transform Your Hospital.<br />
              <span className='text-[#ACFEC0]'>Partner With Syros.</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Syros does not merely run hospitals - it upgrades them into disciplined, trusted, growth-oriented healthcare institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is OMA */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Model</p>
              <h2 className='text-3xl md:text-4xl font-light mb-2 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                What is the <span className='text-[#146F8A]'>OMA Model?</span>
              </h2>
              <div className='w-10 h-0.5 bg-[#146F8A] mb-6'></div>
              <p className='text-base text-gray-600 mb-4 leading-relaxed'>
                An <strong className='text-[#14191F]'>Operations and Management Agreement (OMA)</strong> is a structured partnership where Syros Healthcare takes full or partial responsibility for managing your hospital - without acquiring ownership.
              </p>
              <p className='text-sm text-gray-600 mb-6 leading-relaxed'>
                You retain ownership. We bring the systems, clinical talent, governance frameworks, and operational discipline that transforms your hospital into a high-performing healthcare institution. It is a partnership built on shared goals, transparency, and measurable outcomes.
              </p>
              <div className='bg-[#E9F4F6] rounded p-5 border-l-4 border-[#146F8A]'>
                <p className='text-sm text-[#14191F] leading-relaxed italic'>
                  &ldquo;Syros Healthcare is built to operate hospitals with compassion, discipline, transparency, and clinical excellence - creating value for patients, doctors, hospital owners, and communities.&rdquo;
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className='text-base font-semibold text-[#14191F] mb-4'>Who can partner with Syros?</h3>
              <div className='space-y-3 mb-8'>
                {whoCanPartner.map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <div className='w-5 h-5 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <IconCheck size={11} className='text-[#1F6E5C]' />
                    </div>
                    <p className='text-sm text-gray-600'>{item}</p>
                  </div>
                ))}
              </div>
              <Link href='#enquire'>
                <button className='flex items-center gap-2 bg-[#146F8A] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#0e5268] transition-all'>
                  Send Partnership Enquiry <IconArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Syros Brings */}
      <section className='py-16 bg-white/60'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>What We Bring</p>
            <h2 className='text-3xl md:text-4xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Full-Spectrum <span className='text-[#146F8A]'>Hospital Management</span>
            </h2>
            <p className='text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Under the Syros OMA model, we manage every dimension of hospital performance - from the bedside to the boardroom.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {omaServices.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className='bg-white rounded border border-[#D8DEE6] p-5 hover:border-[#146F8A]/40 hover:shadow-md transition-all'>
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

      {/* Process */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>How It Works</p>
            <h2 className='text-3xl md:text-4xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              The <span className='text-[#146F8A]'>Partnership Process</span>
            </h2>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {processSteps.map(({ step, title, desc }, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className='relative'>
                {i < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-6 left-full w-full h-0.5 bg-[#D8DEE6] z-0' style={{ width: 'calc(100% - 3rem)', left: '3rem' }}></div>
                )}
                <div className='relative z-10 text-center'>
                  <div className='w-12 h-12 rounded-full bg-[#146F8A] text-white text-sm font-mono font-semibold flex items-center justify-center mx-auto mb-4'>{step}</div>
                  <h3 className='text-sm font-semibold text-[#14191F] mb-2'>{title}</h3>
                  <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id='enquire' className='py-16 bg-white/60'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-10'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Get in Touch</p>
            <h2 className='text-3xl md:text-4xl font-light mb-3 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Start Your <span className='text-[#146F8A]'>Partnership Conversation</span>
            </h2>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Share your hospital details and we will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className='bg-white rounded border border-[#D8DEE6] shadow-lg p-8'>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                {[
                  { id: 'name', label: 'Your Name *', type: 'text', placeholder: 'Full name', required: true },
                  { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false },
                  { id: 'hospital', label: 'Hospital / Facility Name *', type: 'text', placeholder: 'Name of your hospital or facility', required: true },
                  { id: 'location', label: 'City / Location *', type: 'text', placeholder: 'City, State', required: true },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className='block text-xs font-semibold text-gray-600 mb-1.5'>{label}</label>
                    <input type={type} id={id} name={id} value={formData[id]} onChange={handleChange} required={required} disabled={isSubmitting}
                      placeholder={placeholder}
                      className='w-full px-4 py-2.5 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm' />
                  </div>
                ))}
                <div className='md:col-span-2'>
                  <label htmlFor='message' className='block text-xs font-semibold text-gray-600 mb-1.5'>Tell us about your hospital</label>
                  <textarea id='message' name='message' value={formData.message} onChange={handleChange} disabled={isSubmitting} rows={4}
                    placeholder='Bed strength, current specialities, challenges, what you are looking for in a management partner...'
                    className='w-full px-4 py-2.5 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm resize-none' />
                </div>
              </div>
              <button type='submit' disabled={isSubmitting}
                className='w-full bg-[#146F8A] text-white py-3 px-8 rounded text-sm font-semibold hover:bg-[#0e5268] transition-all disabled:opacity-70 disabled:cursor-not-allowed'>
                {isSubmitting ? (
                  <span className='flex items-center justify-center gap-2'>
                    <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none'></circle>
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Partnership Enquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}
              className='bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-2xl relative'>
              <button onClick={() => setShowThankYou(false)} className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'>
                <IconX size={18} />
              </button>
              <div className='w-14 h-14 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconHeartHandshake size={28} className='text-[#1F6E5C]' />
              </div>
              <h3 className='text-xl font-light text-[#14191F] mb-2' style={{ letterSpacing: '-0.02em' }}>Enquiry Received</h3>
              <p className='text-sm text-gray-600 mb-4'>
                Thank you for your interest in partnering with Syros Healthcare. Our team will reach out within 24 hours.
              </p>
              <p className='text-xs text-gray-400'>For urgent discussions, call us at +91 99999 99999</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BgLayout>
  )
}
