"use client";

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaAmbulance } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#14191F] text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* WhatsApp Floating Button */}
        <div className="hidden md:block fixed bottom-6 right-6 z-40">
          <button
            onClick={() => window.open("https://wa.me/919999999999", "_blank")}
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-colors duration-200"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={36} />
          </button>
        </div>

        {/* Main Footer */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10'>

          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <img src="/logo.png" alt="Syros Healthcare" className='w-40 mb-4 brightness-0 invert' />
            <p className='text-gray-400 text-sm mb-3 leading-relaxed max-w-xs'>
              Healing is a blessing. Syros Healthcare partners with hospitals to deliver clinical excellence, ethical governance, and patient-centric care across India.
            </p>
            <p className='text-[#ACFEC0] text-xs tracking-widest uppercase mb-5 font-mono'>
              Managed & Operated by Syros Healthcare
            </p>

            {/* Social Links */}
            <div className='flex gap-3'>
              {[
                { href: "https://www.facebook.com/syroshealthcare", icon: FaFacebook, color: 'bg-[#146F8A]' },
                { href: "https://www.instagram.com/syroshealthcare/", icon: FaInstagram, color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500' },
                { href: "https://www.linkedin.com/company/syroshealthcare", icon: FaLinkedin, color: 'bg-[#2A6FB0]' },
                { href: "https://www.youtube.com/@syroshealthcare", icon: FaYoutube, color: 'bg-red-600' },
              ].map(({ href, icon: Icon, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${color} p-2 rounded-full hover:opacity-90 transition-opacity`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-sm font-semibold mb-4 tracking-widest uppercase text-white/60 font-mono'>Company</h3>
            <ul className='space-y-2.5'>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/leadership', label: 'Leadership' },
                { href: '/quality-governance', label: 'Quality & Governance' },
                { href: '/hospital-management', label: 'Hospital Management' },
                { href: '/partner', label: 'Partner With Us' },
                { href: '/careers', label: 'Careers' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className='text-gray-400 hover:text-[#ACFEC0] transition-colors text-sm'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Care */}
          <div>
            <h3 className='text-sm font-semibold mb-4 tracking-widest uppercase text-white/60 font-mono'>Patient Care</h3>
            <ul className='space-y-2.5'>
              {[
                { href: '/hospitals', label: 'Our Hospitals' },
                { href: '/specialities', label: 'Specialities' },
                { href: '/doctors', label: 'Doctors' },
                { href: '/health-packages', label: 'Health Packages' },
                { href: '/insurance', label: 'Insurance & TPA' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className='text-gray-400 hover:text-[#ACFEC0] transition-colors text-sm'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-sm font-semibold mb-4 tracking-widest uppercase text-white/60 font-mono'>Contact</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <FaAmbulance size={18} className='text-red-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs text-gray-500 mb-0.5'>24/7 Emergency</p>
                  <a href="tel:+919999999999" className='text-white font-semibold hover:text-[#ACFEC0] transition-colors text-sm'>
                    +91 99999 99999
                  </a>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <FaPhoneAlt size={16} className='text-[#ACFEC0] flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs text-gray-500 mb-0.5'>OPD / General</p>
                  <a href="tel:+919999999998" className='text-gray-400 hover:text-[#ACFEC0] transition-colors text-sm'>
                    +91 99999 99998
                  </a>
                </div>
              </li>
              <li className='flex items-center gap-3'>
                <MdEmail size={18} className='text-[#ACFEC0] flex-shrink-0' />
                <a href="mailto:info@syroshealthcare.in" className='text-gray-400 hover:text-[#ACFEC0] transition-colors text-sm break-all'>
                  info@syroshealthcare.in
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <FaMapMarkerAlt size={16} className='text-[#ACFEC0] flex-shrink-0 mt-1' />
                <span className='text-gray-400 text-sm'>
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2px rule divider */}
        <div className='border-t-2 border-[#146F8A]/30 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm text-center md:text-left'>
              © {currentYear} Syros Healthcare. All rights reserved.
            </p>
            <p className='text-[#ACFEC0] text-xs tracking-widest uppercase font-mono text-center'>
              Healing is a blessing
            </p>
            <div className='flex gap-5 text-sm'>
              <Link href="/privacy-policy" className='text-gray-500 hover:text-white transition-colors text-xs'>
                Privacy Policy
              </Link>
              <Link href="/contact" className='text-gray-500 hover:text-white transition-colors text-xs'>
                Partner Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
