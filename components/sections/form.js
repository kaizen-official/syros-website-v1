'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconCheck, IconX, IconPhone, IconMail, IconUser, IconBuildingHospital } from '@tabler/icons-react';

function ContactForm() {
  const [activeTab, setActiveTab] = useState('appointment'); // 'appointment' | 'partner'
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: activeTab,
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          service: formData.service || (activeTab === 'partner' ? 'Hospital Partnership Enquiry' : 'General Appointment'),
          message: formData.message || `${activeTab === 'partner' ? 'Partnership' : 'Appointment'} enquiry from homepage - Source: ${window.location.pathname}`
        })
      });

      const result = await response.json();

      if (result.success) {
        resetForm();
        setShowThankYou(true);
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch {
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#146F8A] via-[#13315C] to-[#146F8A] relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
      </div>
      {/* Pulse dot accent */}
      <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-[#ACFEC0]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <p className='text-[#ACFEC0] text-xs tracking-[0.2em] uppercase mb-4 font-mono'>
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight" style={{ letterSpacing: '-0.025em' }}>
              Your Care Begins<br />
              <em className="not-italic text-[#ACFEC0]">Here.</em>
            </h2>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-6'></div>

            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Whether you need an appointment, have a health query, or want to explore a hospital partnership - our team responds within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Book an Appointment",
                  sub: "OPD consultations across all specialities"
                },
                {
                  title: "Hospital Partnership (OMA)",
                  sub: "Explore how Syros can transform your hospital"
                },
                {
                  title: "Emergency Enquiries",
                  sub: "24/7 emergency line available always"
                }
              ].map(({ title, sub }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <IconCheck size={20} className="text-[#ACFEC0]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-white/60 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency contact */}
            <div className='mt-10 border border-white/20 rounded p-5 bg-white/5 backdrop-blur-sm'>
              <p className='text-xs tracking-widest uppercase text-[#ACFEC0] mb-2 font-mono'>24/7 Emergency</p>
              <a href="tel:+919999999999" className='text-2xl font-semibold text-white hover:text-[#ACFEC0] transition-colors flex items-center gap-2'>
                <IconPhone size={20} />
                +91 99999 99999
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded shadow-2xl p-7 md:p-9"
          >
            {/* Tab switcher */}
            <div className="flex rounded overflow-hidden border border-[#D8DEE6] mb-6">
              <button
                onClick={() => setActiveTab('appointment')}
                className={`flex-1 py-3 text-sm font-semibold transition-colors duration-200 ${activeTab === 'appointment' ? 'bg-[#146F8A] text-white' : 'bg-white text-gray-600 hover:bg-[#E9F4F6]'}`}
              >
                Book Appointment
              </button>
              <button
                onClick={() => setActiveTab('partner')}
                className={`flex-1 py-3 text-sm font-semibold transition-colors duration-200 ${activeTab === 'partner' ? 'bg-[#146F8A] text-white' : 'bg-white text-gray-600 hover:bg-[#E9F4F6]'}`}
              >
                Partner With Us
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <IconUser size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleInputChange}
                    required disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] transition-all disabled:bg-gray-100 text-[#14191F] outline-none text-sm"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <IconPhone size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleInputChange}
                    required disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] transition-all disabled:bg-gray-100 text-[#14191F] outline-none text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <IconMail size={17} className="text-gray-400" />
                  </div>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] transition-all disabled:bg-gray-100 text-[#14191F] outline-none text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Dynamic field based on tab */}
              {activeTab === 'appointment' ? (
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Speciality / Department
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] transition-all text-[#14191F] outline-none text-sm">
                    <option value="">Select speciality</option>
                    <option>Emergency & Trauma</option>
                    <option>ICU & Critical Care</option>
                    <option>Internal Medicine</option>
                    <option>General Surgery</option>
                    <option>Orthopaedics</option>
                    <option>Obstetrics & Gynaecology</option>
                    <option>Diagnostics</option>
                    <option>Preventive Health Checkup</option>
                    <option>Other</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    About Your Hospital
                  </label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#E9F4F6] rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] transition-all text-[#14191F] outline-none text-sm resize-none"
                    placeholder="Hospital name, location, bed strength, current challenges…"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#146F8A] text-white py-3.5 px-8 rounded font-semibold text-sm hover:bg-[#0e5268] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none mt-1"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  activeTab === 'appointment' ? 'Request Appointment' : 'Submit Partnership Enquiry'
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Your information is kept confidential. We respond within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded p-8 md:p-10 max-w-sm w-full text-center shadow-2xl relative"
            >
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <IconX size={16} />
              </button>

              <div className="w-16 h-16 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-5">
                <IconCheck size={32} className="text-[#1F6E5C]" />
              </div>

              <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-2 font-mono'>Syros Healthcare</p>
              <h3 className="text-2xl font-semibold text-[#14191F] mb-3">Request Received</h3>
              <p className="text-sm text-gray-600 mb-5">
                Our team will reach out to you within 24 hours.
              </p>

              <div className="bg-[#E9F4F6] rounded p-3.5 mb-4">
                <p className="text-xs text-gray-500 mb-1">For urgent care or emergency:</p>
                <a href="tel:+919999999999" className="text-[#146F8A] font-semibold text-sm hover:underline">
                  +91 99999 99999
                </a>
              </div>

              <p className="text-xs text-gray-400">
                This message closes in 5 seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default ContactForm;
