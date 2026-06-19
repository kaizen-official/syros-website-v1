"use client";

import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { IconMenu2, IconX, IconChevronDown, IconPhone, IconCalendar } from '@tabler/icons-react'
import { FaTimes } from 'react-icons/fa'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [careOpen, setCareOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef(null);

    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 100);
    });

    useEffect(() => {
        if (showForm || showThankYou) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [showForm, showThankYou])

    useEffect(() => {
        if (showThankYou) {
            const timer = setTimeout(() => setShowThankYou(false), 5000)
            return () => clearTimeout(timer)
        }
    }, [showThankYou])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'appointment',
                    name: formData.get('name'),
                    email: formData.get('email') || 'Not provided',
                    phone: formData.get('phone'),
                    service: formData.get('service') || 'General Appointment',
                    message: `Header CTA - Source: ${window.location.pathname}`
                })
            })

            const result = await response.json()

            if (result.success) {
                setShowForm(false)
                setShowThankYou(true)
                setIsSubmitting(false)
                form.reset()
            } else {
                alert('Failed to submit. Please try again.')
                setIsSubmitting(false)
            }
        } catch {
            alert('Something went wrong. Please try again.')
            setIsSubmitting(false)
        }
    }

    const aboutLinks = [
        { href: '/about', label: 'About Us' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/quality-governance', label: 'Quality & Governance' },
        { href: '/hospital-management', label: 'Hospital Management' },
    ];

    const careLinks = [
        { href: '/specialities', label: 'Specialities' },
        { href: '/doctors', label: 'Doctors' },
        { href: '/health-packages', label: 'Health Packages' },
        { href: '/insurance', label: 'Insurance & TPA' },
    ];

    const navLinks = [
        { href: '/hospitals', label: 'Our Hospitals' },
        { href: '/partner', label: 'Partner With Us' },
        { href: '/blog', label: 'Blog' },
        { href: '/careers', label: 'Careers' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header ref={ref}>
            {/* Desktop Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    backdropFilter: visible ? "blur(12px)" : "none",
                    boxShadow: visible
                        ? "0 0 24px rgba(20,111,138,0.08), 0 1px 1px rgba(0,0,0,0.04), 0 0 0 1px rgba(20,111,138,0.06)"
                        : "0 10px 40px -10px rgba(0,0,0,0.2)",
                    width: visible ? "90%" : "100%",
                    borderRadius: visible ? "0 0 24px 24px" : "0 0 12px 12px",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className='fixed top-0 left-0 right-0 hidden lg:flex flex-row justify-between mx-auto py-3 px-8 items-center z-50 bg-white/95'
            >
                <Link href="/">
                    <img src="/logo.png" alt="Syros Healthcare" className='w-44 h-auto' />
                </Link>

                <nav onMouseLeave={() => { setHovered(null); setAboutOpen(false); setCareOpen(false); }}>
                    <ul className='flex flex-row items-center gap-1 xl:gap-2 text-base xl:text-[15px] text-[#14191F]'>
                        {/* About dropdown */}
                        <li
                            className='relative'
                            onMouseEnter={() => { setAboutOpen(true); setCareOpen(false); setHovered('about'); }}
                        >
                            <button className='relative px-3 py-2 inline-flex items-center gap-1 font-medium hover:text-[#146F8A] transition-colors duration-200'>
                                About
                                <IconChevronDown size={14} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                {hovered === 'about' && (
                                    <motion.div layoutId="hovered" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#146F8A]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                )}
                            </button>
                            <AnimatePresence>
                                {aboutOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className='absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-[#D8DEE6] py-2 z-50'
                                    >
                                        {aboutLinks.map((link) => (
                                            <Link key={link.href} href={link.href} className='block px-4 py-2.5 text-sm text-[#14191F] hover:bg-[#E9F4F6] hover:text-[#146F8A] transition-colors'>
                                                {link.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Care dropdown */}
                        <li
                            className='relative'
                            onMouseEnter={() => { setCareOpen(true); setAboutOpen(false); setHovered('care'); }}
                        >
                            <button className='relative px-3 py-2 inline-flex items-center gap-1 font-medium hover:text-[#146F8A] transition-colors duration-200'>
                                Patient Care
                                <IconChevronDown size={14} className={`transition-transform ${careOpen ? 'rotate-180' : ''}`} />
                                {hovered === 'care' && (
                                    <motion.div layoutId="hovered" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#146F8A]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                )}
                            </button>
                            <AnimatePresence>
                                {careOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className='absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-[#D8DEE6] py-2 z-50'
                                    >
                                        {careLinks.map((link) => (
                                            <Link key={link.href} href={link.href} className='block px-4 py-2.5 text-sm text-[#14191F] hover:bg-[#E9F4F6] hover:text-[#146F8A] transition-colors'>
                                                {link.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {navLinks.map((link) => (
                            <li key={link.href} className='relative'>
                                <Link
                                    href={link.href}
                                    onMouseEnter={() => setHovered(link.href)}
                                    className='relative px-3 py-2 inline-block font-medium hover:text-[#146F8A] transition-colors duration-200'
                                >
                                    {hovered === link.href && (
                                        <motion.div
                                            layoutId="hovered"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#146F8A]"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className='relative z-20'>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex flex-row items-center gap-3'>
                    {/* <Link
                        href="tel:+919999999999"
                        className='hidden xl:flex items-center gap-1.5 text-sm font-semibold text-[#146F8A] hover:text-[#0e5268] transition-colors duration-200'
                    >
                        <IconPhone size={16} />
                        Emergency: +91 99999 99999
                    </Link> */}

                    <button
                        onClick={() => setShowForm(true)}
                        className='bg-[#146F8A] text-white ml-2 rounded px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 relative overflow-hidden hover:bg-[#0e5268] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5'
                    >
                        <IconCalendar size={16} />
                        <span className='relative z-10'>Book Appointment</span>
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: ['100%', '100%', '-100%'], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)', transform: 'skewX(-20deg)' }}
                        />
                    </button>
                </div>
            </motion.div>

            {/* Mobile Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className='fixed top-0 left-0 right-0 bg-white/95 flex lg:hidden flex-col max-w-[calc(100vw-2rem)] mx-auto mt-3 rounded-xl shadow-xl z-50 backdrop-blur-sm'
            >
                <div className='flex flex-row justify-between items-center px-4 py-3'>
                    <Link href="/">
                        <img src="/logo.png" alt="Syros Healthcare" className='w-36 h-auto' />
                    </Link>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-[#14191F]'>
                        {mobileMenuOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='overflow-hidden'
                        >
                            <nav className='px-4 pb-5'>
                                <ul className='flex flex-col gap-1 text-base'>
                                    <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className='block py-2 text-[#14191F] hover:text-[#146F8A] transition-colors font-medium'>Home</Link></li>

                                    <li className='pt-2'>
                                        <p className='text-xs tracking-widest uppercase text-gray-400 font-mono px-0 py-1'>About</p>
                                    </li>
                                    {aboutLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className='block py-2 pl-3 text-[#14191F] hover:text-[#146F8A] transition-colors font-medium'>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}

                                    <li className='pt-2'>
                                        <p className='text-xs tracking-widest uppercase text-gray-400 font-mono px-0 py-1'>Patient Care</p>
                                    </li>
                                    {careLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className='block py-2 pl-3 text-[#14191F] hover:text-[#146F8A] transition-colors font-medium'>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}

                                    <li className='pt-2'>
                                        <p className='text-xs tracking-widest uppercase text-gray-400 font-mono px-0 py-1'>More</p>
                                    </li>
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className='block py-2 text-[#14191F] hover:text-[#146F8A] transition-colors font-medium'>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className='flex flex-col gap-3 mt-5 pt-5 border-t border-gray-100'>
                                    <Link href="tel:+919999999999" className='text-center border border-[#146F8A]/30 rounded px-4 py-2.5 text-sm font-medium text-[#146F8A]'>
                                        Emergency: +91 99999 99999
                                    </Link>

                                    <button
                                        onClick={() => { setMobileMenuOpen(false); setShowForm(true); }}
                                        className='bg-[#146F8A] text-white text-center rounded px-4 py-3 text-sm font-semibold relative overflow-hidden'
                                    >
                                        <span className='relative z-10'>Book Appointment</span>
                                    </button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Appointment Popup Form */}
            {showForm && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative'>
                        <button
                            onClick={() => setShowForm(false)}
                            className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors'
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className='p-6'>
                            <div className='flex items-center gap-2 mb-1'>
                                <div className='w-2 h-2 rounded-full bg-[#ACFEC0]'></div>
                                <span className='text-xs tracking-widest text-[#146F8A] uppercase font-mono'>Syros Healthcare</span>
                            </div>
                            <h2 className='text-2xl font-semibold text-[#14191F] mb-1'>Book an Appointment</h2>
                            <p className='text-gray-500 text-sm mb-5'>We will contact you to confirm the details.</p>

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <input type="hidden" name="_subject" value="New Appointment Request - Syros Healthcare" />

                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
                                    <input type="text" id="name" name="name" required
                                        className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-[#14191F]'
                                        placeholder='Your name' />
                                </div>

                                <div>
                                    <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>Phone Number *</label>
                                    <input type="tel" id="phone" name="phone" required pattern="[0-9]{10,15}"
                                        className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-[#14191F]'
                                        placeholder='+91 98765 43210' />
                                </div>

                                <div>
                                    <label htmlFor="service" className='block text-sm font-medium text-gray-700 mb-1'>Department / Speciality</label>
                                    <select id="service" name="service"
                                        className='w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-[#146F8A]/30 focus:border-[#146F8A] outline-none transition-all text-[#14191F] bg-white'>
                                        <option value="">Select a department</option>
                                        <option>Emergency & Trauma</option>
                                        <option>ICU & Critical Care</option>
                                        <option>Internal Medicine</option>
                                        <option>General Surgery</option>
                                        <option>Orthopaedics</option>
                                        <option>Obstetrics & Gynaecology</option>
                                        <option>Diagnostics</option>
                                        <option>Preventive Health Checkup</option>
                                    </select>
                                </div>

                                <button type="submit" disabled={isSubmitting}
                                    className='w-full bg-[#146F8A] text-white py-3 rounded font-semibold hover:bg-[#0e5268] transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed'>
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : 'Confirm Appointment'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}
            {showThankYou && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative p-8 text-center'>
                        <button onClick={() => setShowThankYou(false)} className='absolute top-4 right-4 text-gray-400 hover:text-gray-700'>
                            <FaTimes className="text-xl" />
                        </button>

                        <div className='w-16 h-16 bg-[#ACFEC0] rounded-full flex items-center justify-center mx-auto mb-4'>
                            <svg className="w-8 h-8 text-[#1F6E5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <h2 className='text-2xl font-semibold text-[#14191F] mb-2'>Request Received</h2>
                        <p className='text-gray-500 text-sm mb-1'>We will contact you shortly to confirm your appointment.</p>
                        <p className='text-gray-400 text-xs mt-5'>This window closes automatically in 5 seconds.</p>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
