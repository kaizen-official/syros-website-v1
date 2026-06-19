"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconTarget, IconEye, IconSparkles } from '@tabler/icons-react'

function MissionVision() {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='text-center mb-12'>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'
          >
            Our Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]'
            style={{ letterSpacing: '-0.025em' }}
          >
            Compassionate Care.<br />
            <span className='text-[#146F8A]'>Disciplined Systems.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'
          >
            Syros is built to operate hospitals with compassion, discipline, transparency, and clinical excellence - creating value for patients, doctors, hospital owners, and communities.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

          {/* Large Card - Brand Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='md:col-span-2 lg:col-span-2 md:row-span-2 rounded overflow-hidden text-white relative flex flex-col justify-end min-h-[480px]'
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-[#13315C]/90 via-[#146F8A]/50 to-transparent'></div>
            {/* Pulse dot */}
            <div className='absolute top-6 right-6 w-3 h-3 rounded-full bg-[#ACFEC0]'></div>

            <div className='relative z-10 p-8 md:p-10'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className='text-[#ACFEC0] text-xs tracking-widest uppercase mb-2 font-mono'>Syros Healthcare</p>
                <h3 className='text-3xl md:text-4xl font-light mb-3' style={{ letterSpacing: '-0.02em' }}>
                  Brand <span className='text-white font-normal'>Belief</span>
                </h3>
                <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-white/85 text-lg leading-relaxed mb-6 italic'
                style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}
              >
                &ldquo;Healing is a blessing that flourishes where compassion, expertise, and integrity come together.&rdquo;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/about"
                  className='inline-flex items-center gap-2 bg-white text-[#146F8A] px-6 py-3 rounded text-sm font-semibold hover:bg-[#E9F4F6] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
                >
                  Our Story
                  <IconSparkles size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-white rounded border border-[#D8DEE6] p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-12 h-12 bg-[#146F8A] rounded flex items-center justify-center mb-5'>
              <IconTarget size={24} className='text-white' />
            </div>

            <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-2 font-mono'>Mission</p>
            <h3 className='text-xl font-semibold text-[#14191F] mb-3'>Our Mission</h3>

            <p className='text-gray-600 text-sm leading-relaxed'>
              To partner with healthcare providers to deliver excellence in patient care, governance, technology, and operational performance - nurturing healthcare institutions that improve lives and serve communities with unwavering care.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-[#146F8A] rounded border border-[#146F8A] p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-12 h-12 bg-white/20 rounded flex items-center justify-center mb-5'>
              <IconEye size={24} className='text-white' />
            </div>

            <p className='text-xs tracking-widest uppercase text-[#ACFEC0] mb-2 font-mono'>Vision</p>
            <h3 className='text-xl font-semibold text-white mb-3'>Our Vision</h3>

            <p className='text-white/80 text-sm leading-relaxed'>
              To become the most trusted healthcare management partner, bringing compassionate and reliable care to every individual we serve across India - tertiary-grade critical care, closer to home.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision
