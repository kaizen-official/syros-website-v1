"use client";

import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useInView } from 'motion/react'
import { IconHospital, IconUsers, IconStethoscope, IconHeart } from '@tabler/icons-react'

function Clients() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    hospitals: 0,
    patients: 0,
    doctors: 0,
    satisfaction: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = duration / frameRate;

      const targets = {
        hospitals: 12,
        patients: 50000,
        doctors: 120,
        satisfaction: 97
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          hospitals: Math.floor(easeOutQuart * targets.hospitals),
          patients: Math.floor(easeOutQuart * targets.patients),
          doctors: Math.floor(easeOutQuart * targets.doctors),
          satisfaction: Math.floor(easeOutQuart * targets.satisfaction)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  return (
    <section className='py-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>
            Our Impact
          </p>
          <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
            Trusted by <span className='text-[#146F8A]'>Patients & Partners</span>
          </h2>
          <p className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Syros operates hospitals where patients feel safe, doctors feel supported, and systems work with discipline, compassion, and transparency.
          </p>
        </motion.div>
      </div>

      {/* Brand belief quote */}
      <div className='max-w-4xl mx-auto px-4 mb-16'>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='border-l-2 border-[#146F8A] pl-6 py-2'
        >
          <p className='text-xl md:text-2xl font-light text-[#14191F] italic leading-relaxed' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
            &ldquo;At Syros, our vision is to create hospitals where patients feel safe, doctors feel supported, and systems work with discipline, compassion, and transparency.&rdquo;
          </p>
          <footer className='mt-3'>
            <p className='text-sm text-[#146F8A] font-semibold'>Dr. Aabid Amin Bhat</p>
            <p className='text-xs text-gray-500 tracking-widest uppercase font-mono'>Founder & Chairman, Syros Healthcare</p>
          </footer>
        </motion.blockquote>
      </div>

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            {
              icon: IconHospital,
              value: `${counts.hospitals}+`,
              label: 'Hospitals Managed',
              color: 'bg-[#146F8A]',
            },
            {
              icon: IconUsers,
              value: `${counts.patients.toLocaleString()}+`,
              label: 'Patients Served',
              color: 'bg-[#146F8A]',
            },
            {
              icon: IconStethoscope,
              value: `${counts.doctors}+`,
              label: 'Empanelled Doctors',
              color: 'bg-[#146F8A]',
            },
            {
              icon: IconHeart,
              value: `${counts.satisfaction}%`,
              label: 'Patient Satisfaction',
              color: 'bg-[#146F8A]',
            },
          ].map(({ icon: Icon, value, label, color }) => (
            <motion.div
              key={label}
              whileHover={{ y: -6 }}
              className='relative text-center bg-white hover:bg-[#146F8A] rounded border border-[#D8DEE6] shadow-lg hover:shadow-xl transition-all duration-300 pt-14 pb-7 px-5 group'
            >
              <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
                <div className={`w-14 h-14 ${color} group-hover:bg-[#0e5268] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300`}>
                  <Icon className='w-7 h-7 text-white' stroke={1.5} />
                </div>
              </div>
              <p className='text-3xl md:text-4xl font-bold text-[#146F8A] group-hover:text-white mb-1.5 transition-colors duration-300'>
                {value}
              </p>
              <p className='text-gray-600 group-hover:text-white/80 text-sm font-medium transition-colors duration-300'>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Clients
