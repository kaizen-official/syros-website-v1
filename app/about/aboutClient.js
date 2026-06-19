"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconHeart, IconRocket, IconBulb, IconShieldCheck, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function AboutPage() {
  const teamStatsRef = useRef(null);
  const isInView = useInView(teamStatsRef, { once: true, margin: "-100px" });

  const [teamCounts, setTeamCounts] = useState({
    years: 0,
    hospitals: 0,
    doctors: 0,
    patients: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = duration / frameRate;

      const targets = { years: 5, hospitals: 12, doctors: 120, patients: 50000 };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const ease = 1 - Math.pow(1 - progress, 4);

        setTeamCounts({
          years: Math.floor(ease * targets.years),
          hospitals: Math.floor(ease * targets.hospitals),
          doctors: Math.floor(ease * targets.doctors),
          patients: Math.floor(ease * targets.patients)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setTeamCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const values = [
    {
      icon: IconHeart,
      title: "Compassion",
      description: "Every interaction - from triage to discharge - is guided by genuine care and respect for the patient as a person, not just a case."
    },
    {
      icon: IconShieldCheck,
      title: "Integrity",
      description: "Transparent billing, honest communication, and ethical clinical decisions are non-negotiable in every Syros-managed facility."
    },
    {
      icon: IconTarget,
      title: "Precision",
      description: "Evidence-based protocols, structured rounds, and audit systems ensure every clinical and operational decision is measured and accountable."
    },
    {
      icon: IconUsers,
      title: "Partnership",
      description: "Syros works alongside hospital owners, doctors, staff, and communities - not above them - to build institutions that last."
    },
    {
      icon: IconRocket,
      title: "Progress",
      description: "We continuously invest in technology, training, and systems to bring metro-grade care closer to underserved communities."
    },
    {
      icon: IconBulb,
      title: "Clarity",
      description: "Plain. Steady. Specific. We communicate clearly - with patients, families, staff, and partners - so trust can be built one interaction at a time."
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
            alt="About Syros Healthcare"
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
            <span className='text-[#ACFEC0]'>About Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Our Story</p>
            <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-5' style={{ letterSpacing: '-0.025em' }}>
              About <span className='text-[#ACFEC0]'>Syros Healthcare</span>
            </h1>
            <p className='text-lg text-white/70 max-w-2xl leading-relaxed'>
              A healthcare operations and management company built to transform hospitals with compassion, discipline, and clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Story</p>
              <h2 className='text-4xl md:text-5xl font-light mb-2 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                Why <span className='text-[#146F8A]'>Syros Exists</span>
              </h2>
              <div className='w-10 h-0.5 bg-[#146F8A] mb-6'></div>
              <p className='text-base text-gray-600 mb-4 leading-relaxed'>
                Syros Healthcare was created to bridge a critical gap in Indian healthcare. Tier-2 and tier-3 cities are home to millions of people who deserve quality, ethical, and well-governed hospital care - yet most hospitals in these geographies lack the systems, leadership bandwidth, and operational infrastructure to deliver it consistently.
              </p>
              <p className='text-base text-gray-600 mb-4 leading-relaxed'>
                We operate hospitals through an Operations and Management Agreement (OMA) model - taking full responsibility for clinical governance, staffing, quality, technology, branding, and financial management - while working in genuine partnership with the hospital owner. The result is a hospital that runs with discipline and grows with trust.
              </p>
              <p className='text-base text-gray-600 leading-relaxed italic' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
                &ldquo;Healing is a blessing that flourishes where compassion, expertise, and integrity come together.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative'
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                alt="Syros Healthcare team"
                className='rounded border border-[#D8DEE6] shadow-xl w-full object-cover'
              />
              <div className='absolute -bottom-4 -right-4 w-48 h-48 bg-[#146F8A]/10 rounded-full blur-3xl -z-10'></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Model */}
      <section className='py-16 bg-[#146F8A]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-3 font-mono'>How We Work</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-white' style={{ letterSpacing: '-0.025em' }}>
              The Syros OMA Model
            </h2>
            <p className='text-base text-white/70 max-w-2xl mx-auto leading-relaxed'>
              Simple in concept, powerful in practice. Syros manages - the hospital owner grows.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                step: "01",
                title: "Assessment",
                text: "We evaluate your hospital's current operations, infrastructure, clinical capability, team, and market position - and design a customised OMA plan."
              },
              {
                step: "02",
                title: "Integration",
                text: "Syros deploys its operations, clinical governance, quality, HR, and digital systems - running smoothly alongside your existing team."
              },
              {
                step: "03",
                title: "Transformation",
                text: "OPD footfall grows, clinical standards improve, billing becomes transparent, staff accountability strengthens, and the hospital earns community trust."
              }
            ].map(({ step, title, text }) => (
              <div key={step} className='bg-white/10 backdrop-blur-sm rounded p-7 border border-white/20 hover:bg-white/15 transition-colors duration-300'>
                <p className='text-[#ACFEC0] text-3xl font-light mb-3 font-mono'>{step}</p>
                <div className='w-8 h-0.5 bg-[#ACFEC0] mb-4'></div>
                <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
                <p className='text-white/70 text-sm leading-relaxed'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Founder</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Medical <span className='text-[#146F8A]'>Leadership</span>
            </h2>
          </div>

          <div className='max-w-3xl mx-auto'>
            <div className='bg-white rounded border border-[#D8DEE6] shadow-lg p-8 flex flex-col md:flex-row gap-8 items-start'>
              <div className='flex-shrink-0'>
                <div className='w-24 h-24 rounded bg-[#E9F4F6] border border-[#D8DEE6] flex items-center justify-center'>
                  <span className='text-4xl font-light text-[#146F8A]' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>A</span>
                </div>
              </div>
              <div>
                <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-1 font-mono'>Founder & Chairman</p>
                <h3 className='text-2xl font-semibold text-[#14191F] mb-1'>Dr. Aabid Amin Bhat</h3>
                <p className='text-sm text-gray-500 mb-4'>Founder-Director / Chairman & CEO, Syros Healthcare</p>
                <div className='w-8 h-0.5 bg-[#146F8A] mb-4'></div>
                <blockquote className='text-base text-gray-700 italic leading-relaxed mb-4' style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
                  &ldquo;At Syros, our vision is to create hospitals where patients feel safe, doctors feel supported, and systems work with discipline, compassion, and transparency.&rdquo;
                </blockquote>
                <Link href="/leadership" className='inline-block bg-[#146F8A] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors'>
                  Full Leadership Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-14'
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>What We Stand For</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
              Our Core <span className='text-[#146F8A]'>Values</span>
            </h2>
            <p className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              These principles guide every system we build, every hire we make, and every interaction we have.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className='bg-white p-7 rounded border border-[#D8DEE6] hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-11 h-11 bg-[#E9F4F6] rounded flex items-center justify-center mb-4'>
                    <Icon size={22} className='text-[#146F8A]' />
                  </div>
                  <h3 className='text-base font-semibold text-[#14191F] mb-2'>{value.title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <Clients />

      {/* Stats Banner */}
      <section className='py-16 bg-gradient-to-br from-[#146F8A] to-[#13315C] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-14'
          >
            <p className='text-[#ACFEC0] text-xs tracking-[0.2em] uppercase mb-3 font-mono'>By the Numbers</p>
            <h2 className='text-4xl md:text-5xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Healthcare Delivered
            </h2>
          </motion.div>

          <div ref={teamStatsRef} className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { value: `${teamCounts.years}+`, label: 'Years of Healthcare Leadership' },
              { value: `${teamCounts.hospitals}+`, label: 'Hospitals Under Management' },
              { value: `${teamCounts.doctors}+`, label: 'Empanelled Doctors' },
              { value: `${teamCounts.patients.toLocaleString()}+`, label: 'Patients Served' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className='text-center'
              >
                <div className='text-4xl md:text-5xl font-light mb-2 text-white'>{value}</div>
                <div className='text-white/60 text-sm font-medium'>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='bg-white rounded border border-[#D8DEE6] p-10 text-center relative overflow-hidden shadow-lg'
          >
            <div className='absolute top-0 right-0 w-32 h-32 bg-[#146F8A]/5 rounded-full -mr-16 -mt-16'></div>
            <div className='absolute top-5 right-8 w-2.5 h-2.5 rounded-full bg-[#ACFEC0]'></div>

            <div className='relative z-10'>
              <p className='text-xs tracking-widest uppercase text-[#146F8A] mb-3 font-mono'>Ready to Begin?</p>
              <h2 className='text-3xl md:text-4xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                Transform Your Hospital.<br />
                <span className='text-[#146F8A]'>Partner With Syros.</span>
              </h2>
              <p className='text-base text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed'>
                Whether you are a patient seeking care or a hospital owner seeking a disciplined management partner - we are ready to talk.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/contact'
                  className='inline-block bg-[#146F8A] text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-[#0e5268] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
                  Book Appointment
                </Link>
                <Link href='/partner'
                  className='inline-block border border-[#D8DEE6] text-[#14191F] px-8 py-3.5 rounded font-semibold text-sm hover:bg-[#E9F4F6] transition-all duration-300'>
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </BgLayout>
  )
}

export default AboutPage
