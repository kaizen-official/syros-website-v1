"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an OMA and how does Syros work with hospitals?",
      answer: "An Operations and Management Agreement (OMA) is a model where Syros Healthcare takes full operational responsibility for running a hospital - including clinical governance, staffing, quality systems, digital systems, branding, revenue cycle, and compliance - while the hospital owner retains ownership. Syros brings the systems, expertise, and management bandwidth that most standalone hospitals lack, transforming them into disciplined, growth-oriented institutions."
    },
    {
      question: "Who can partner with Syros Healthcare?",
      answer: "Syros partners with existing hospitals, nursing homes, diagnostic centres, specialty units, and healthcare entrepreneurs who want professional management and growth. Whether your hospital has 20 beds or 200, Syros can assess your current state and propose a structured OMA model tailored to your location, patient load, and goals."
    },
    {
      question: "What services do Syros-managed hospitals provide?",
      answer: "Syros-managed hospitals offer Emergency & Trauma Care, ICU & Critical Care, Internal Medicine, General Surgery, Orthopaedics, Obstetrics & Gynaecology, Paediatrics, Dialysis, Diagnostics (X-ray, Ultrasound, Echo, Lab), Preventive Health Checkups, Day Care Procedures, and more - depending on the hospital's capacity and infrastructure."
    },
    {
      question: "How does Syros ensure patient safety?",
      answer: "Patient safety is built into every protocol at Syros. We implement structured ward rounds, infection control standards, antibiotic stewardship, ICU care protocols, daily audit logs, mortality & morbidity reviews, and a transparent grievance redressal system. Our NABH-oriented approach means every process is documented, reviewed, and continuously improved."
    },
    {
      question: "Does Syros handle TPA, insurance, and government panel work?",
      answer: "Yes. Syros manages TPA and insurance empanelment, cashless facilities, ECHS/CGHS/ESIC coordination (where applicable), and corporate tie-ups. We maintain a dedicated insurance and billing desk at each managed hospital to ensure patients receive seamless cashless care and hospital revenue cycles are optimised."
    },
    {
      question: "How quickly can a hospital see results after partnering with Syros?",
      answer: "Initial operational improvements - cleaner documentation, structured rounds, better staff discipline, improved patient experience - typically become visible within 30–60 days. Revenue cycle optimisation and brand-building take 3–6 months. Sustained growth in OPD and IPD footfall usually becomes measurable within the first 6 months of the OMA."
    },
    {
      question: "What does Syros bring to a hospital beyond management?",
      answer: "Beyond operations, Syros brings: clinical leadership and specialist empanelment, digital EMR and billing systems, hospital branding and digital marketing, community health programs, training and capacity building for nurses and RMOs, quality improvement initiatives, and strategic planning for service expansion. We are a full-spectrum hospital transformation partner."
    },
    {
      question: "How do I book an appointment at a Syros-managed hospital?",
      answer: "You can book an appointment through this website by clicking 'Book Appointment', calling our OPD helpline, or via WhatsApp. Walk-ins are also welcome during OPD hours. Emergency services are available 24/7. Once submitted, our team will confirm your appointment and guide you on timings, preparation, and required documents."
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <section className='py-16'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='text-center mb-14'>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]'
            style={{ letterSpacing: '-0.025em' }}
          >
            Frequently Asked <span className='text-[#146F8A]'>Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'
          >
            Answers to questions from patients, doctors, and hospital partners about Syros Healthcare.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className='space-y-3'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className='bg-white border border-[#D8DEE6] rounded overflow-hidden hover:shadow-md transition-all duration-300'
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex items-center justify-between p-5 text-left hover:bg-[#E9F4F6]/50 transition-colors duration-200'
              >
                <h3 className='text-sm font-semibold text-[#14191F] pr-4 leading-snug'>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className='flex-shrink-0'
                >
                  <IconChevronDown size={20} className='text-[#146F8A]' />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className='overflow-hidden'
                  >
                    <div className='px-5 pb-5 border-t border-[#EEF1F5]'>
                      <p className='text-gray-600 text-sm leading-relaxed pt-4'>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12 p-8 bg-[#146F8A] rounded relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16'></div>
          <div className='absolute top-4 right-6 w-2.5 h-2.5 rounded-full bg-[#ACFEC0]'></div>
          <div className='relative z-10'>
            <p className='text-[#ACFEC0] text-xs tracking-widest uppercase mb-3 font-mono'>Healing is a blessing</p>
            <h3 className='text-2xl font-light text-white mb-2' style={{ letterSpacing: '-0.02em' }}>
              Still have questions?
            </h3>
            <p className='text-white/70 text-sm mb-6 leading-relaxed'>
              Our team is here to help - whether you&apos;re a patient, a doctor, or a hospital owner.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Link
                href='/contact'
                className='inline-block bg-white text-[#146F8A] px-7 py-2.5 rounded text-sm font-semibold hover:bg-[#E9F4F6] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'
              >
                Get in Touch
              </Link>
              <Link
                href='/contact'
                className='inline-block border border-white/40 text-white px-7 py-2.5 rounded text-sm font-semibold hover:bg-white/10 transition-all duration-300'
              >
                Partnership Enquiry
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs
