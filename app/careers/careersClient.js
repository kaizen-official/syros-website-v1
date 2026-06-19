"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconBriefcase, IconMapPin, IconUsers, IconTrophy, IconHeart, IconRocket, IconCheck, IconClock, IconMessageCircle, IconTarget, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import careersData from './content.json'

function CareersPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    expectedSalary: '',
    applyFor: ''
  });

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      expectedSalary: '',
      applyFor: ''
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'careers',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          expectedSalary: formData.expectedSalary,
          applyFor: formData.applyFor
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowThankYou(true);
        resetForm();
      } else {
        alert("Error: " + (data.error || 'Failed to submit application'));
      }

    } catch (error) {
      console.error(error);
      alert("Failed to submit application. Please try again.");
    }

    setIsSubmitting(false);
  };


  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=80"
            alt="Careers at Syros Healthcare"
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.06]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>

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
            <span className='text-[#ACFEC0]'>Careers</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Join Our Team</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Build Your Career in <span className='text-[#ACFEC0]'>Healthcare</span>
            </h1>
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>
              Join a team where medicine is practiced with discipline, compassion, and integrity - at every hospital we operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join With Us Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Why Syros</p>
              <h2 className='text-4xl md:text-5xl font-light mb-2 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                Join <span className='text-[#146F8A]'>Syros Healthcare</span>
              </h2>
              <div className='w-10 h-0.5 bg-[#146F8A] mb-6'></div>
              <p className='text-base text-gray-600 mb-6 leading-relaxed'>
                At Syros, healthcare professionals work in environments built for clinical excellence - with structured governance, digital systems, mentorship, and the satisfaction of delivering meaningful care to underserved communities.
              </p>

              <div className='space-y-4'>
                {[
                  { title: 'Structured Clinical Environment', desc: 'Protocols, rounds, audit systems, and specialist mentorship that make you a better clinician.' },
                  { title: 'Ethical & Transparent Workplace', desc: 'No unethical practices - ever. Honest billing, patient-first culture, and clean governance.' },
                  { title: 'Growth Across Multiple Hospitals', desc: 'Syros operates multiple hospitals - giving you exposure, mobility, and advancement opportunities.' },
                ].map(({ title, desc }) => (
                  <div key={title} className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <IconCheck size={14} className='text-[#1F6E5C]' />
                    </div>
                    <div>
                      <h3 className='text-sm font-semibold text-[#14191F] mb-0.5'>{title}</h3>
                      <p className='text-sm text-gray-600'>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Syros Healthcare Team"
                className='rounded border border-[#D8DEE6] shadow-xl w-full object-cover'
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Opportunities</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Open <span className='text-[#146F8A]'>Positions</span>
            </h2>
            <p className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Join Syros Healthcare and contribute to transforming hospitals into trusted, disciplined care institutions.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {careersData.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 rounded border border-[#D8DEE6] hover:border-[#146F8A]/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-start justify-between mb-4'>
                  <IconBriefcase size={28} className='text-[#146F8A]' />
                  <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>Open</span>
                </div>
                <h3 className='text-base font-semibold text-[#14191F] hover:text-[#146F8A] mb-3 transition-colors'>{job.title}</h3>
                <div className='flex items-center gap-2 text-gray-600 mb-4'>
                  <IconMapPin size={18} />
                  <span className='text-sm'>{job.location}</span>
                </div>
                <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                  {job.description}
                </p>
                <a
                  href='#apply'
                  className='inline-block bg-[#146F8A] text-white text-sm font-semibold hover:bg-[#0e5268] py-2 px-4 rounded transition-colors duration-300'
                >
                  Apply Now →
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* Why Choose Our Company */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Culture</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Why Work at <span className='text-[#146F8A]'>Syros Healthcare</span>
            </h2>
            <p className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              A workplace where clinical standards are high, systems are fair, and your growth matters.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* Efficient Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='bg-white p-8 rounded border border-[#D8DEE6] hover:border-[#146F8A]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-12 h-12 bg-[#E9F4F6] rounded flex items-center justify-center mb-5'>
                <IconMessageCircle size={24} className='text-[#146F8A]' />
              </div>
              <h3 className='text-lg font-semibold text-[#14191F] mb-3'>Clinical Development</h3>
              <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
                Structured clinical mentorship, continuous medical education, and exposure to multi-specialty cases across all our managed hospitals.
              </p>
              <p className='text-xs text-gray-500'>
                CME programs, case reviews, and protocol training ensure you grow as a clinician, not just as an employee.
              </p>
            </motion.div>

            {/* Inclusive Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-white p-8 rounded border border-[#D8DEE6] hover:border-[#146F8A]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-12 h-12 bg-[#E9F4F6] rounded flex items-center justify-center mb-5'>
                <IconHeart size={24} className='text-[#146F8A]' />
              </div>
              <h3 className='text-lg font-semibold text-[#14191F] mb-3'>Ethical Workplace</h3>
              <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
                No unethical referrals, no unnecessary procedures, no irrational prescribing. Syros operates on zero-compromise ethical standards.
              </p>
              <p className='text-xs text-gray-500'>
                You can practice medicine with your conscience intact - every day, every shift, every patient.
              </p>
            </motion.div>

            {/* Growth Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-white p-8 rounded border border-[#D8DEE6] hover:border-[#146F8A]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-12 h-12 bg-[#E9F4F6] rounded flex items-center justify-center mb-5'>
                <IconRocket size={24} className='text-[#146F8A]' />
              </div>
              <h3 className='text-lg font-semibold text-[#14191F] mb-3'>Career Growth</h3>
              <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
                Syros manages multiple hospitals - giving you the opportunity to grow into leadership roles, speciality coordination, or hospital management over time.
              </p>
              <div className='space-y-2 text-xs text-gray-600'>
                {['Clinical leadership tracks', 'Hospital management roles', 'Performance-based advancement'].map(item => (
                  <div key={item} className='flex items-center gap-2'>
                    <div className='w-4 h-4 rounded-full bg-[#ACFEC0] flex items-center justify-center flex-shrink-0'>
                      <IconCheck size={10} className='text-[#1F6E5C]' />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Make an Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='bg-white p-8 rounded border border-[#D8DEE6] hover:border-[#146F8A]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:col-span-3'
            >
              <div className='max-w-3xl mx-auto text-center'>
                <div className='w-12 h-12 bg-[#E9F4F6] rounded flex items-center justify-center mb-5 mx-auto'>
                  <IconTarget size={24} className='text-[#146F8A]' />
                </div>
                <h3 className='text-lg font-semibold text-[#14191F] mb-3'>Impact at Scale</h3>
                <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
                  At Syros, your work improves access to quality healthcare for underserved communities. Every decision, every shift, every patient - it adds up to something meaningful.
                </p>
                <p className='text-xs text-gray-500'>
                  Be part of a healthcare transformation that changes lives - and communities - for the better.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id='apply' className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Apply</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Join <span className='text-[#146F8A]'>Syros Healthcare</span>
            </h2>
            <p className='text-base text-gray-600'>
              Submit your application and become part of the team transforming healthcare across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-white rounded border border-[#D8DEE6] shadow-lg p-8 md:p-12'
          >
            <form onSubmit={handleFormSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>

                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm'
                    placeholder='Enter your name'
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm'
                    placeholder='Enter your email'
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm'
                    placeholder='Enter your phone'
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor='city' className='block text-sm font-semibold text-gray-700 mb-2'>
                    City *
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm'
                    placeholder='Enter your city'
                  />
                </div>

                {/* Expected Salary */}
                <div>
                  <label htmlFor='expectedSalary' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Expected Salary (per month) *
                  </label>
                  <input
                    type='text'
                    id='expectedSalary'
                    name='expectedSalary'
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all disabled:bg-gray-50 text-sm'
                    placeholder='Enter expected salary (INR)'
                  />
                </div>

                {/* Apply For */}
                <div>
                  <label htmlFor='applyFor' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Apply For *
                  </label>
                  <select
                    id='applyFor'
                    name='applyFor'
                    value={formData.applyFor}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 rounded border border-[#D8DEE6] focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all bg-white disabled:bg-gray-50 text-sm'
                  >
                    <option value="">Select Role</option>
                    <optgroup label="Clinical">
                      <option value="Doctor / Consultant">Doctor / Consultant</option>
                      <option value="Resident Medical Officer (RMO)">Resident Medical Officer (RMO)</option>
                      <option value="Nurse / Staff Nurse">Nurse / Staff Nurse</option>
                      <option value="Paramedic / OT Technician">Paramedic / OT Technician</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Pharmacist">Pharmacist</option>
                    </optgroup>
                    <optgroup label="Operations & Admin">
                      <option value="Hospital Administrator">Hospital Administrator</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Front Desk / Patient Care Executive">Front Desk / Patient Care Executive</option>
                      <option value="Billing & Finance">Billing & Finance</option>
                      <option value="HR & Training">HR & Training</option>
                    </optgroup>
                    <optgroup label="Technology & Quality">
                      <option value="EMR / Healthcare IT">EMR / Healthcare IT</option>
                      <option value="Quality & Compliance Officer">Quality & Compliance Officer</option>
                      <option value="Digital Marketing / Outreach">Digital Marketing / Outreach</option>
                    </optgroup>
                    <option value="Other">Other (mention in email)</option>
                  </select>
                </div>

              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#146F8A] text-white py-3 px-8 rounded text-sm font-semibold hover:bg-[#0e5268] transition-all duration-300 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>

            </form>
          </motion.div>

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
              className='bg-white rounded-xl p-8 max-w-md w-full text-center shadow-2xl relative'
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
              >
                <IconX size={20} />
              </button>

              {/* Success Icon */}
              <div className='w-16 h-16 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-5'>
                <IconCheck size={32} className='text-[#1F6E5C]' />
              </div>

              <h3 className='text-2xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>Application Received</h3>
              <p className='text-gray-600 text-sm mb-5'>
                Thank you for your interest in joining Syros Healthcare. We&apos;ll review your application and be in touch.
              </p>

              <div className='bg-[#E9F4F6] rounded p-4 mb-5 text-left'>
                <p className='text-xs font-semibold text-[#146F8A] mb-1'>One more step:</p>
                <p className='text-xs text-gray-600 mb-2'>
                  Email your resume to complete your application:
                </p>
                <a href='mailto:careers@syroshealthcare.in' className='text-[#146F8A] font-semibold hover:underline text-sm'>
                  careers@syroshealthcare.in
                </a>
                <p className='text-xs text-gray-400 mt-1'>
                  Include your name and the role in the subject line
                </p>
              </div>

              <p className='text-xs text-gray-400'>
                This message will close automatically in 10 seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default CareersPage
