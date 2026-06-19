"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconCheck } from '@tabler/icons-react'

function WhyUS() {
  const features = [
    {
      title: "Clinical Excellence & Governance",
      description: "Evidence-based protocols, structured rounds, consultant oversight, and NABH-oriented quality systems ensure every patient receives standardised, accountable care."
    },
    {
      title: "Patient Safety & Ethical Billing",
      description: "Transparent billing, infection control practices, digital documentation, and grievance redressal build the trust that patients and families deserve."
    },
    {
      title: "Technology-Enabled Operations",
      description: "Digital EMR, tele-ICU capabilities, AI-assisted triage, and real-time reporting bring metro-grade systems to every hospital we operate."
    }
  ];

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'
            >
              Our Difference
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl md:text-5xl font-light mb-1 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                Why Choose <span className='text-[#146F8A]'>Syros</span>
              </h2>
            </motion.div>

            <div className='w-12 h-0.5 bg-[#146F8A] my-5'></div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-base text-gray-600 mb-8 leading-relaxed'
            >
              Good healthcare is not dependent only on doctors - it depends on systems, protocols, documentation, compassion, and accountability. Syros brings all of this together under one disciplined operating model.
            </motion.p>

            <div className='space-y-6 mb-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className='flex gap-4'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-7 h-7 rounded-full bg-[#146F8A] flex items-center justify-center mt-0.5'>
                      <IconCheck size={16} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <h4 className='text-base font-semibold text-[#14191F] mb-1.5'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/about"
                className='inline-block bg-[#146F8A] text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-[#0e5268] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
              >
                About Syros
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            <div className='relative rounded overflow-hidden shadow-2xl border border-[#D8DEE6]'>
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                alt="Syros Healthcare - Doctor with patient"
                className='w-full h-auto object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#146F8A]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className='absolute -bottom-6 -left-6 bg-white rounded border border-[#D8DEE6] shadow-xl p-5 hidden lg:block'
            >
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-[#ACFEC0] flex items-center justify-center text-[#1F6E5C] font-bold text-lg'>
                  ✓
                </div>
                <div>
                  <p className='text-xl font-bold text-[#14191F]'>Patient-First</p>
                  <p className='text-xs text-gray-500'>Every system, every protocol</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-[#146F8A] rounded-full opacity-10 blur-2xl'></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyUS
