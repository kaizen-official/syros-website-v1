"use client";

import { motion } from "motion/react"
import {
  IconShieldCheck,
  IconCertificate,
  IconAward,
  IconHeart,
  IconStethoscope,
  IconClipboardList,
  IconUsers,
  IconActivity,
} from '@tabler/icons-react'
import Link from 'next/link'

const qualityPillars = [
  { name: "Clinical Protocols", description: "Evidence-based care pathways", icon: IconClipboardList, color: "#146F8A" },
  { name: "Infection Control", description: "WHO-aligned hygiene standards", icon: IconShieldCheck, color: "#146F8A" },
  { name: "Patient Safety", description: "Zero-harm commitment", icon: IconHeart, color: "#146F8A" },
  { name: "Digital Documentation", description: "Paperless EMR systems", icon: IconCertificate, color: "#146F8A" },
  { name: "Ethical Billing", description: "Transparent, itemised bills", icon: IconAward, color: "#146F8A" },
  { name: "NABH-Oriented", description: "Quality accreditation pathway", icon: IconActivity, color: "#146F8A" },
]

export function SafetyCertifications() {
  return (
    <section className="py-16" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + Intro + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono">
              Quality & Governance
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-[#14191F]" style={{ letterSpacing: '-0.025em' }}>
              Care You Can <span className="text-[#146F8A]">Trust</span>
            </h2>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Syros believes that good healthcare is not dependent only on doctors, but on systems, protocols, documentation, compassion, and accountability. We bring all of this into every hospital we operate.
            </p>

            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              {[
                { bold: "Patient safety culture", rest: " - structured protocols and continuous training." },
                { bold: "Quality indicators", rest: " - tracked, reviewed, and improved monthly." },
                { bold: "Grievance redressal", rest: " - transparent feedback and rapid resolution." },
              ].map(({ bold, rest }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#146F8A] mt-2 flex-shrink-0"></span>
                  <span><strong>{bold}</strong>{rest}</span>
                </li>
              ))}
            </ul>

            <div className='flex gap-3 flex-wrap'>
              <Link href="/quality-governance" className="inline-block bg-[#146F8A] text-white py-2.5 px-5 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors">
                Quality & Governance
              </Link>
              <Link href="/about" className="inline-block border border-[#D8DEE6] text-[#14191F] py-2.5 px-5 rounded text-sm hover:shadow-sm transition">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Quality Pillars Grid */}
          <div className="md:col-span-2">

            {/* Featured Governance Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-7 bg-gradient-to-br from-[#146F8A] via-[#13315C] to-[#146F8A] rounded p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl -mr-28 -mt-28"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -ml-20 -mb-20"></div>
              {/* Pulse dot */}
              <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-[#ACFEC0]"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded flex items-center justify-center">
                    <IconActivity size={36} className="text-[#ACFEC0]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-light text-white" style={{ letterSpacing: '-0.02em' }}>
                      Clinical Governance Model
                    </h3>
                    <span className="bg-[#ACFEC0] text-[#14191F] px-2.5 py-0.5 rounded text-xs font-bold tracking-wide font-mono">ACTIVE</span>
                  </div>
                  <p className="text-white/85 text-sm mb-2">Structured oversight across every Syros-managed hospital</p>
                  <p className="text-white/70 text-sm max-w-xl leading-relaxed">
                    Every hospital we operate runs on a standardised governance framework - structured ward rounds, daily audit logs, mortality review, antibiotic stewardship, and a dedicated quality team. Not just care - accountable care.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Pillars */}
            <h4 className="text-base font-semibold text-[#14191F] mb-4 tracking-wide">Quality Standards We Maintain</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {qualityPillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-white rounded p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4 items-center border border-[#D8DEE6] hover:border-[#146F8A]/40"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 rounded flex items-center justify-center bg-[#E9F4F6]">
                        <Icon size={22} color="#146F8A" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#14191F]">{pillar.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{pillar.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Core Safety Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded border border-[#D8DEE6] p-7 md:p-10 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-[#14191F]">Our Core Patient Commitments</h3>
            <span className="text-xs text-gray-400 tracking-widest uppercase font-mono">Practiced • Documented • Reviewed</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: IconShieldCheck,
                title: "ICU Care Standards",
                text: "Intensive monitoring, ventilator protocols, and specialist-led rounds in every critical care unit."
              },
              {
                icon: IconHeart,
                title: "Compassionate Patient Experience",
                text: "Respectful communication, timely updates to families, and patient dignity at every touchpoint."
              },
              {
                icon: IconUsers,
                title: "Staff Training & Ethics",
                text: "Continuous education on clinical protocols, patient rights, ethical conduct, and emergency response."
              },
              {
                icon: IconStethoscope,
                title: "24/7 Medical Coverage",
                text: "Resident medical officers, on-call specialists, and senior consultants accessible around the clock."
              }
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#146F8A] rounded flex items-center justify-center flex-shrink-0">
                  <Icon size={22} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-[#14191F] mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
