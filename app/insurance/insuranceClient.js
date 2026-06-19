"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import { motion } from 'motion/react'
import { IconFileText, IconPhone, IconShieldCheck, IconBuildingHospital, IconAlertCircle } from '@tabler/icons-react'
import Link from 'next/link'

const admissionDocs = [
  'Valid photo ID (Aadhaar / Passport / Voter ID)',
  'Health insurance card or policy document',
  'TPA approval letter (for planned admissions)',
  'Previous medical records and prescriptions',
  'Referral letter from treating physician (if applicable)',
  'Corporate authorization letter (for corporate panels)',
]

const processSteps = [
  { step: '01', title: 'Verify Coverage', desc: 'Present your insurance card at the front desk. Our team verifies your policy and TPA empanelment status.' },
  { step: '02', title: 'Pre-Authorisation', desc: 'For planned procedures, we coordinate pre-authorisation with your TPA before admission.' },
  { step: '03', title: 'Cashless Admission', desc: 'Once approved, you are admitted under cashless coverage with transparent billing throughout your stay.' },
  { step: '04', title: 'Discharge & Claims', desc: 'Final bills are shared with the TPA. We assist with claim documentation and follow-up if needed.' },
]

export default function InsuranceClient() {
  return (
    <BgLayout>
      <PageHero
        label="Insurance & TPA"
        title="Cashless"
        highlight="Healthcare"
        breadcrumb="Insurance & TPA"
        description="Transparent insurance coordination at every Syros-managed hospital — from pre-authorisation to discharge and claims assistance."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Insurance and TPA at Syros Healthcare"
      />

      {/* Important Notice */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-amber-50 border border-amber-200 rounded p-5 flex gap-4'
          >
            <IconAlertCircle size={22} className='text-amber-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='text-sm font-semibold text-amber-800 mb-1'>Panel Information</p>
              <p className='text-xs text-amber-700 leading-relaxed'>
                Insurance and TPA empanelment varies by hospital location. We only display panels that are actively empanelled at each unit. Please contact our insurance desk to confirm cashless availability for your specific policy before admission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Support */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Coverage Types</p>
            <h2 className='text-3xl md:text-4xl font-light text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Insurance We <span className='text-[#146F8A]'>Coordinate</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {[
              { icon: IconShieldCheck, title: 'Cashless Insurance', desc: 'Third-party administrator (TPA) cashless admissions for empanelled insurance policies.' },
              { icon: IconBuildingHospital, title: 'Corporate Tie-Ups', desc: 'Corporate health panels and employee wellness programs at select Syros hospitals.' },
              { icon: IconFileText, title: 'Government Panels', desc: 'ECHS, CGHS, ESIC and other government empanelments — only where actively confirmed at the unit.' },
              { icon: IconPhone, title: 'Insurance Desk', desc: 'Dedicated desk to assist with pre-authorisation, documentation, and claim follow-up.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className='bg-white rounded border border-[#D8DEE6] p-6 hover:border-[#146F8A]/30 transition-all'
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

      {/* Process */}
      <section className='py-12 bg-white/60'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>How It Works</p>
            <h2 className='text-2xl md:text-3xl font-light text-[#14191F]' style={{ letterSpacing: '-0.02em' }}>
              Cashless Admission <span className='text-[#146F8A]'>Process</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className='text-center'>
                <div className='w-10 h-10 rounded-full bg-[#146F8A] text-white text-xs font-mono font-semibold flex items-center justify-center mx-auto mb-4'>{step}</div>
                <h3 className='text-sm font-semibold text-[#14191F] mb-2'>{title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            <div>
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Admission</p>
              <h2 className='text-2xl md:text-3xl font-light text-[#14191F] mb-5' style={{ letterSpacing: '-0.02em' }}>
                Documents <span className='text-[#146F8A]'>Required</span>
              </h2>
              <p className='text-sm text-gray-600 leading-relaxed mb-6'>
                Please carry the following documents for a smooth cashless admission experience. Additional documents may be requested based on your insurer or TPA.
              </p>
              <ul className='space-y-3'>
                {admissionDocs.map((doc) => (
                  <li key={doc} className='flex items-start gap-3 text-sm text-gray-600'>
                    <div className='w-5 h-5 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-[#1F6E5C] text-xs'>✓</span>
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-[#14191F] rounded p-8 text-white'>
              <p className='text-xs tracking-widest uppercase text-[#ACFEC0] font-mono mb-3'>Insurance Desk</p>
              <h3 className='text-xl font-light mb-4' style={{ letterSpacing: '-0.02em' }}>Need help with your policy?</h3>
              <p className='text-sm text-white/60 leading-relaxed mb-6'>
                Our insurance desk assists with panel verification, pre-authorisation, documentation, and claim queries at every Syros-managed hospital.
              </p>
              <div className='space-y-3 mb-6'>
                <a href='tel:+919999999998' className='flex items-center gap-3 text-sm text-white hover:text-[#ACFEC0] transition-colors'>
                  <IconPhone size={16} className='text-[#ACFEC0]' />
                  +91 99999 99998 (Insurance Desk)
                </a>
                <a href='mailto:insurance@syroshealthcare.in' className='flex items-center gap-3 text-sm text-white hover:text-[#ACFEC0] transition-colors'>
                  <IconFileText size={16} className='text-[#ACFEC0]' />
                  insurance@syroshealthcare.in
                </a>
              </div>
              <Link href='/contact' className='inline-block bg-[#ACFEC0] text-[#14191F] px-5 py-2.5 rounded text-sm font-semibold hover:bg-white transition-colors'>
                Send Insurance Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BgLayout>
  )
}
