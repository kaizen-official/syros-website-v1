"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconMapPin, IconPhone, IconMail, IconClock, IconCheck, IconX } from '@tabler/icons-react'
import Link from 'next/link'

function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      countryCode: '+91',
      message: ''
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Google Sheets
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: formData.fullName,
          email: formData.email || 'Not provided',
          phone: `${formData.countryCode} ${formData.phone}`,
          subject: 'Contact Form Submission',
          message: formData.message || 'No message provided'
        })
      });

      const result = await response.json();

      if (result.success) {
        resetForm();
        setShowThankYou(true);
      } else {
        console.error('Form submission failed:', result.error);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Syros Healthcare"
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white'>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-2 text-xs mb-6 font-mono'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'>
              <IconHome size={14} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Contact</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Contact Us</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Get In <span className='text-[#ACFEC0]'>Touch</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Book an appointment, enquire about a hospital partnership, or reach our emergency line. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>

            {/* Form Column - 3/5 width */}
            <div className='lg:col-span-3'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-[#F0F4F5] rounded-2xl shadow-2xl p-8 md:p-12'
              >
                <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-2 font-mono'>Syros Healthcare</p>
                <h2 className='text-2xl md:text-3xl font-semibold mb-2 text-[#14191F]' style={{ letterSpacing: '-0.02em' }}>Send Us a Message</h2>
                <p className='text-sm text-gray-600 mb-7'>
                  Appointment, partnership enquiry, insurance, or career - we handle all enquiries with care.
                </p>

                <form onSubmit={handleFormSubmit}>

                  {/* Full Name */}
                  <div className='mb-6'>
                    <label htmlFor='fullName' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                  className='w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-100 text-[#14191F] text-sm'
                    placeholder='Your full name'
                    />
                  </div>

                  {/* Email */}
                  <div className='mb-6'>
                    <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                  className='w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-100 text-[#14191F] text-sm'
                    placeholder='your@email.com (optional)'
                    />
                  </div>

                  {/* Phone Number */}
                  <div className='mb-6'>
                    <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone Number *
                    </label>
                    <div className='flex gap-2'>
                      <select
                        name='countryCode'
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className='px-3 py-2.5 rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all bg-[#E9F4F6] text-sm disabled:bg-gray-100'
                      >
                        <option value="+91">+91</option>
                        {/* <option value="+971">+971</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option> */}
                      </select>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='flex-1 px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-100 text-[#14191F] text-sm'
                        placeholder='Your phone number'
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className='mb-6'>
                    <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      disabled={isSubmitting}
                      className='w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-100 text-[#14191F] text-sm'
                      placeholder='Your message - appointment details, partnership enquiry, etc.'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-[#146F8A] text-white py-3.5 px-8 rounded font-semibold text-sm hover:bg-[#0e5268] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none'
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>

                </form>

                {/* Quick Call */}
                <div className='mt-8 text-center pt-8 border-t border-gray-200'>
                  <p className='text-gray-600 text-sm'>
                    24/7 Emergency Line:{' '}
                    <a href='tel:+919999999999' className='text-[#146F8A] font-semibold hover:underline'>
                      +91 99999 99999
                    </a>
                  </p>
                </div>

              </motion.div>
            </div>

            {/* Info Column - 2/5 width */}
            <div className='lg:col-span-2'>

              {/* Easy Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded border border-[#D8DEE6] shadow-lg p-7 mb-7'
              >
                <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-4 font-mono'>Enquiry Categories</p>
                <div className='space-y-4'>
                  {[
                    { label: 'Patient Appointment', desc: 'OPD consultations, health packages, diagnostic bookings' },
                    { label: 'Emergency', desc: '24/7 emergency and trauma care - call directly' },
                    { label: 'Insurance / TPA', desc: 'Cashless empanelment, claim assistance, panel queries' },
                    { label: 'Hospital Partnership', desc: 'OMA model, hospital transformation enquiries' },
                    { label: 'Career', desc: 'Doctors, nurses, RMOs, admin, and allied health' },
                  ].map(({ label, desc }) => (
                    <div key={label} className='flex gap-3 items-start'>
                      <div className='w-5 h-5 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-[#1F6E5C] text-xs font-bold'>✓</span>
                      </div>
                      <div>
                        <p className='text-sm font-semibold text-[#14191F]'>{label}</p>
                        <p className='text-xs text-gray-500'>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-white rounded border border-[#D8DEE6] shadow-lg p-7'
              >
                <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-4 font-mono'>Contact Details</p>
                <div className='space-y-4'>
                  <div className='flex gap-3 items-start'>
                    <IconPhone size={18} className='text-[#ACFEC0] flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-xs text-gray-500 mb-0.5'>24/7 Emergency</p>
                      <a href='tel:+919999999999' className='text-[#14191F] font-semibold text-sm hover:text-[#146F8A] transition-colors'>+91 99999 99999</a>
                    </div>
                  </div>
                  <div className='flex gap-3 items-start'>
                    <IconPhone size={18} className='text-[#146F8A] flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-xs text-gray-500 mb-0.5'>OPD / General</p>
                      <a href='tel:+919999999998' className='text-[#14191F] text-sm hover:text-[#146F8A] transition-colors'>+91 99999 99998</a>
                    </div>
                  </div>
                  <div className='flex gap-3 items-start'>
                    <IconMail size={18} className='text-[#146F8A] flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-xs text-gray-500 mb-0.5'>Email</p>
                      <a href='mailto:info@syroshealthcare.in' className='text-[#14191F] text-sm hover:text-[#146F8A] transition-colors'>info@syroshealthcare.in</a>
                    </div>
                  </div>
                  <div className='flex gap-3 items-start'>
                    <IconMapPin size={18} className='text-[#146F8A] flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-xs text-gray-500 mb-0.5'>Location</p>
                      <p className='text-[#14191F] text-sm'>India</p>
                    </div>
                  </div>
                  <div className='flex gap-3 items-start'>
                    <IconClock size={18} className='text-[#146F8A] flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-xs text-gray-500 mb-0.5'>OPD Hours</p>
                      <p className='text-[#14191F] text-sm'>Mon–Sat: 9:00 AM – 6:00 PM</p>
                      <p className='text-xs text-gray-500'>Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-0'>
        <div className='w-full h-96'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6640215063494!2d77.083597!3d28.669777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0468e9087c67%3A0xcdab21c4083d1b26!2sVerticale%20Elevators!5e0!3m2!1sen!2sin!4v1764846445193!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded p-8 max-w-sm w-full text-center shadow-2xl relative'
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
              >
                <IconX size={20} />
              </button>

              {/* Success Icon */}
              <div className='w-14 h-14 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-5'>
                <IconCheck size={28} className='text-[#1F6E5C]' />
              </div>

              <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-2 font-mono'>Syros Healthcare</p>
              <h3 className='text-xl font-semibold text-[#14191F] mb-2'>Message Received</h3>
              <p className='text-sm text-gray-600 mb-5'>
                Our team will respond within 24 hours.
              </p>

              <div className='bg-[#E9F4F6] rounded p-3.5'>
                <p className='text-xs text-gray-500 mb-1'>For urgent care:</p>
                <a href='tel:+919999999999' className='text-[#146F8A] font-semibold hover:underline text-sm'>
                  +91 99999 99999 (Emergency)
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default ContactPage
