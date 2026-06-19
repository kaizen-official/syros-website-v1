"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function PrivacyPage() {
  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=80"
            alt="Privacy Policy - Syros Healthcare"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70'></div>
          <div className='absolute inset-0 opacity-[0.05]' style={{ backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-[#ACFEC0] transition-colors text-white/70'>
              <IconHome size={14} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={13} className='text-[#ACFEC0]' />
            <span className='text-[#ACFEC0]'>Privacy Policy</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>Legal</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
              Privacy <span className='text-[#ACFEC0]'>Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-10">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {/** Section 1 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="p-6 bg-white rounded-2xl shadow"
                variants={fadeUp}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">a) Personal Information</h3>
                <p className="mb-2">
                  We may collect information that personally identifies you, such as:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Contact details: name, email address, phone number, company name (when voluntarily provided-for inquiries, services, or job applications).
                  </li>
                  <li>
                    Transactional data: details about services you request or purchases (if applicable).
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="p-6 bg-white rounded-2xl shadow"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">b) Non-Personal Information</h3>
                <p className="mb-2">Automatically collected when you use our Site, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Browser type, operating system, IP address, device type.</li>
                  <li>Pages you view, time spent, referring URLs, search terms, and other clickstream data.</li>
                  <li>Cookies and similar tracking technologies to enhance your browsing experience.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/** Section 2 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and manage the requested services or resources.</li>
                <li>Respond to inquiries, comments, or customer support requests.</li>
                <li>Enhance and personalize your experience on our Site.</li>
                <li>Understand usage patterns to improve our Site and offerings.</li>
                <li>Communicate important information or updates about our services.</li>
                <li>Comply with legal obligations or enforce our policies.</li>
              </ul>
            </div>
          </motion.div>

          {/** Section 3 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">3. Disclosure of Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>With service providers (hosting, IT support, analytics, etc.).</li>
                <li>During legal processes, if required by law.</li>
                <li>In the event of a business transfer (merger, acquisition, sale of assets).</li>
                <li>With your explicit consent for specific purposes.</li>
              </ul>
            </div>
          </motion.div>

          {/** Section 4 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">4. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-2">We use cookies, web beacons, and similar methods to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences.</li>
                <li>Analyze Site usage and performance.</li>
                <li>Serve relevant content and enhance functionality.</li>
              </ul>
              <p className="mt-2">
                You can manage or disable cookies via your browser settings, but this may limit access to certain features.
              </p>
            </div>
          </motion.div>

          {/** Section 5 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">5. Data Security &amp; Retention</h2>
              <p>
                We implement reasonable safeguards to protect your information from unauthorized access or misuse. We retain your Personal Information only as long as necessary to fulfill purposes outlined in this Policy, unless a longer retention period is legally required.
              </p>
            </div>
          </motion.div>

          {/** Section 6 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
              <p>
                If your data is transferred internationally, we ensure appropriate protections-such as standard contractual clauses-are in place to maintain security and compliance.
              </p>
            </div>
          </motion.div>

          {/** Section 7 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="mb-2">Depending on applicable law, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access, correct, or update your personal information.</li>
                <li>Request deletion or restrict processing.</li>
                <li>Withdraw consent or object to certain processing.</li>
                <li>Lodge a complaint with a relevant data protection authority.</li>
              </ul>
            </div>
          </motion.div>

          {/** Section 8 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our Site is not intended for children under 13. We do not knowingly collect their data. If we learn we have, we&apos;ll delete it immediately.
              </p>
            </div>
          </motion.div>

          {/** Section 9 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We&apos;re not responsible for their privacy policies or content. Please review their policies before using those sites.
              </p>
            </div>
          </motion.div>

          {/** Section 10 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">10. Updates to This Policy</h2>
              <p>
                We may update this Policy from time to time. The Effective Date at the top will reflect the latest revision. If we make significant changes, we&apos;ll notify you (e.g., via Site notice or email). Please review periodically.
              </p>
            </div>
          </motion.div>

          {/** Section 11 */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Policy or wish to exercise your rights, contact us:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Company:</span> Syros Healthcare
                </li>
                <li>
                  <span className="font-semibold">Email:</span> info@syroshealthcare.in
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> +91 99999 99999
                </li>
                <li>
                  <span className="font-semibold">Address:</span> India
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}

export default PrivacyPage
