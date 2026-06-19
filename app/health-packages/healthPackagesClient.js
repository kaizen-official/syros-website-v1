"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import packagesData from './packages.json'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { IconCheck, IconX } from '@tabler/icons-react'
import Link from 'next/link'

export default function HealthPackagesClient() {
  const [selected, setSelected] = useState(null)
  const [booking, setBooking] = useState({ name: '', phone: '', package: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  const handleBook = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: booking.name,
          phone: booking.phone,
          email: 'Not provided',
          subject: `Health Package Booking: ${booking.package}`,
          message: `Package enquiry: ${booking.package}`,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setShowThanks(true)
        setBooking({ name: '', phone: '', package: '' })
        setSelected(null)
      } else {
        alert('Failed to submit. Please try again.')
      }
    } catch {
      alert('Failed to submit. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <BgLayout>
      <PageHero
        label="Preventive Care"
        title="Health"
        highlight="Packages"
        breadcrumb="Health Packages"
        description="Structured checkup packages designed to detect risk early, prevent disease, and keep you ahead of illness — at every Syros-managed hospital."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Health Packages at Syros Healthcare"
      />

      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {packagesData.packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className='bg-white rounded border border-[#D8DEE6] overflow-hidden hover:border-[#146F8A]/40 hover:shadow-lg transition-all flex flex-col'
              >
                <div className='relative h-40 overflow-hidden'>
                  <img src={pkg.image} alt={pkg.name} className='w-full h-full object-cover' />
                  <span className='absolute top-3 left-3 bg-[#146F8A] text-white text-[10px] font-mono px-2 py-1 rounded-full tracking-wide uppercase'>
                    {pkg.tag}
                  </span>
                </div>
                <div className='p-5 flex flex-col flex-1'>
                  <h3 className='text-sm font-semibold text-[#14191F] mb-1'>{pkg.name}</h3>
                  <p className='text-[#146F8A] text-xs font-semibold mb-3'>{pkg.price}</p>
                  <ul className='space-y-1 mb-4 flex-1'>
                    {pkg.tests.slice(0, 4).map((t) => (
                      <li key={t} className='flex items-start gap-1.5 text-xs text-gray-500'>
                        <IconCheck size={12} className='text-[#1F6E5C] mt-0.5 flex-shrink-0' />
                        {t}
                      </li>
                    ))}
                    {pkg.tests.length > 4 && (
                      <li className='text-xs text-gray-400 pl-4'>+{pkg.tests.length - 4} more tests</li>
                    )}
                  </ul>
                  <button
                    onClick={() => { setSelected(pkg); setBooking((b) => ({ ...b, package: pkg.name })) }}
                    className='w-full bg-[#146F8A] text-white text-xs font-semibold py-2.5 rounded hover:bg-[#0e5268] transition-colors'
                  >
                    View & Book
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative'
            >
              <button onClick={() => setSelected(null)} className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10'>
                <IconX size={18} />
              </button>
              <img src={selected.image} alt={selected.name} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <p className='text-xs tracking-widest uppercase text-[#146F8A] font-mono mb-1'>{selected.tag}</p>
                <h3 className='text-xl font-semibold text-[#14191F] mb-1'>{selected.name}</h3>
                <p className='text-[#146F8A] text-sm font-semibold mb-4'>{selected.price}</p>

                <p className='text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide'>Tests Included</p>
                <ul className='space-y-1.5 mb-5'>
                  {selected.tests.map((t) => (
                    <li key={t} className='flex items-start gap-2 text-sm text-gray-600'>
                      <IconCheck size={14} className='text-[#1F6E5C] mt-0.5 flex-shrink-0' />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className='bg-[#E9F4F6] rounded p-4 mb-5'>
                  <p className='text-xs font-semibold text-[#146F8A] mb-1'>Preparation</p>
                  <p className='text-xs text-gray-600 leading-relaxed'>{selected.prep}</p>
                </div>

                <form onSubmit={handleBook} className='space-y-3'>
                  <input
                    type='text' required placeholder='Your name' value={booking.name}
                    onChange={(e) => setBooking((b) => ({ ...b, name: e.target.value }))}
                    className='w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] text-sm outline-none focus:border-[#146F8A]'
                  />
                  <input
                    type='tel' required placeholder='Phone number' value={booking.phone}
                    onChange={(e) => setBooking((b) => ({ ...b, phone: e.target.value }))}
                    className='w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] text-sm outline-none focus:border-[#146F8A]'
                  />
                  <button type='submit' disabled={isSubmitting}
                    className='w-full bg-[#146F8A] text-white py-3 rounded text-sm font-semibold hover:bg-[#0e5268] disabled:opacity-60'>
                    {isSubmitting ? 'Booking…' : 'Book This Package'}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showThanks && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className='bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-2xl'>
              <div className='w-14 h-14 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-4'>
                <IconCheck size={28} className='text-[#1F6E5C]' />
              </div>
              <h3 className='text-lg font-semibold text-[#14191F] mb-2'>Booking Request Received</h3>
              <p className='text-sm text-gray-600 mb-4'>We will contact you to confirm your health package and appointment slot.</p>
              <button onClick={() => setShowThanks(false)} className='text-sm text-[#146F8A] font-semibold hover:underline'>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className='py-10'>
        <div className='max-w-2xl mx-auto px-4 text-center'>
          <p className='text-xs text-gray-400 leading-relaxed'>
            Package availability and pricing may vary by hospital location. Contact us for the latest rates at your nearest Syros-managed unit.
          </p>
          <Link href='/contact' className='inline-block mt-4 text-sm text-[#146F8A] font-semibold hover:underline'>
            Contact for more information →
          </Link>
        </div>
      </section>
    </BgLayout>
  )
}
