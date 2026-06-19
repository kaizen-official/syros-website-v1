"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaWhatsapp, FaTimes, FaCalendarAlt } from 'react-icons/fa'

function FloatCta() {
  const [isVisible, setIsVisible] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setIsVisible(footerRect.top > window.innerHeight)
      }
    }

    let ticking = false
    const throttled = () => {
      if (!ticking) {
        requestAnimationFrame(() => { handleScroll(); ticking = false })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttled, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', throttled)
  }, [])

  useEffect(() => {
    if (showForm || showThankYou) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [showForm, showThankYou])

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showThankYou])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'appointment',
          name: formData.get('name'),
          phone: formData.get('phone'),
          service: formData.get('service') || 'Mobile CTA',
          message: `Mobile Float CTA - Source: ${window.location.pathname}`
        })
      })

      const result = await response.json()
      if (result.success) {
        setShowForm(false)
        setShowThankYou(true)
        setIsSubmitting(false)
        form.reset()
      } else {
        alert('Failed to submit. Please try again.')
        setIsSubmitting(false)
      }
    } catch {
      alert('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Mobile bottom bar */}
      <section className='fixed bottom-0 sm:hidden left-0 right-0 flex justify-center z-40'>
        <div className='w-full flex shadow-2xl'>
          {/* Book Appointment */}
          <button
            onClick={() => setShowForm(true)}
            className='w-1/3 text-sm bg-[#146F8A] text-white py-3.5 font-semibold hover:bg-[#0e5268] transition-colors flex flex-col items-center justify-center gap-1'
          >
            <FaCalendarAlt className="text-base" />
            <span className='text-xs'>Appointment</span>
          </button>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/3 bg-green-500 hover:bg-green-600 flex flex-col items-center justify-center gap-1 transition-colors py-3.5"
          >
            <FaWhatsapp className="text-xl text-white" />
            <span className='text-xs text-white font-medium'>WhatsApp</span>
          </Link>

          {/* Call */}
          <Link
            href="tel:+919999999999"
            className="w-1/3 bg-white flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors border-l border-gray-100 py-3.5"
          >
            <FaPhone className="text-lg text-[#146F8A] rotate-90" />
            <span className='text-xs text-gray-700 font-medium'>Call Now</span>
          </Link>
        </div>
      </section>

      {/* Appointment Popup */}
      {showForm && (
        <div className='fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded shadow-2xl w-full max-w-sm relative'>
            <button
              onClick={() => setShowForm(false)}
              className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors'
            >
              <FaTimes className="text-lg" />
            </button>

            <div className='p-6'>
              <div className='flex items-center gap-2 mb-1'>
                <div className='w-2 h-2 rounded-full bg-[#ACFEC0]'></div>
                <span className='text-xs tracking-widest text-[#146F8A] uppercase font-mono'>Syros Healthcare</span>
              </div>
              <h2 className='text-xl font-semibold text-[#14191F] mb-1'>Book Appointment</h2>
              <p className='text-gray-500 text-xs mb-5'>We will call you to confirm details.</p>

              <form onSubmit={handleSubmit} className='space-y-3.5'>
                <div>
                  <label className='block text-xs font-medium text-gray-600 mb-1'>Full Name *</label>
                  <input type="text" name="name" required
                    className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-sm text-[#14191F]'
                    placeholder='Your name' />
                </div>

                <div>
                  <label className='block text-xs font-medium text-gray-600 mb-1'>Phone Number *</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10,15}"
                    className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-sm text-[#14191F]'
                    placeholder='+91 98765 43210' />
                </div>

                <div>
                  <label className='block text-xs font-medium text-gray-600 mb-1'>Department</label>
                  <select name="service"
                    className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-sm text-[#14191F] bg-white'>
                    <option value="">Select department</option>
                    <option>Emergency & Trauma</option>
                    <option>ICU & Critical Care</option>
                    <option>Internal Medicine</option>
                    <option>General Surgery</option>
                    <option>Orthopaedics</option>
                    <option>Obstetrics & Gynaecology</option>
                    <option>Diagnostics</option>
                    <option>Preventive Health</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className='w-full bg-[#146F8A] text-white py-3 rounded font-semibold text-sm hover:bg-[#0e5268] transition-colors mt-1 disabled:opacity-60'>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting…
                    </span>
                  ) : 'Confirm Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You */}
      {showThankYou && (
        <div className='fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded shadow-2xl w-full max-w-sm relative p-7 text-center'>
            <button onClick={() => setShowThankYou(false)} className='absolute top-4 right-4 text-gray-400 hover:text-gray-700'>
              <FaTimes className="text-lg" />
            </button>

            <div className='w-14 h-14 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className="w-7 h-7 text-[#1F6E5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <h2 className='text-xl font-semibold text-[#14191F] mb-1'>Request Received</h2>
            <p className='text-gray-500 text-sm'>We will contact you shortly.</p>
            <p className='text-gray-400 text-xs mt-5'>Closes in 5 seconds</p>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatCta;
