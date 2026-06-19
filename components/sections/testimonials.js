"use client";

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(0)

    const testimonials = [
        {
            name: "Ramesh Sharma",
            role: "Patient, General Surgery",
            content: "I was admitted for an emergency appendectomy at midnight. The response was immediate - the doctor explained everything clearly, the procedure went well, and the nursing staff checked on me every hour. I felt genuinely cared for.",
            rating: 5,
            company: "Syros-Managed Hospital"
        },
        {
            name: "Dr. Priya Nair",
            role: "Consultant Gynaecologist",
            content: "Syros brought a level of system and process I had not seen before in a tier-2 hospital. The EMR, structured rounds, and reliable RMO coverage give me confidence to focus on clinical care. The governance model is genuinely different.",
            rating: 5,
            company: "Empanelled Consultant"
        },
        {
            name: "Mohammed Rashid",
            role: "Hospital Owner & Partner",
            content: "We partnered with Syros for hospital management after struggling with operations for years. Within six months, OPD footfall doubled, billing became transparent, and staff discipline improved visibly. The transformation has been real.",
            rating: 5,
            company: "OMA Partner Hospital"
        },
        {
            name: "Kavitha Reddy",
            role: "Patient, ICU Recovery",
            content: "My father was in the ICU for ten days. Syros's team ensured daily family briefings, honest updates, and compassionate nursing. When he was discharged, the discharge summary was detailed and the billing completely transparent.",
            rating: 5,
            company: "Syros-Managed Hospital"
        },
        {
            name: "Dr. Arjun Mehta",
            role: "Resident Medical Officer",
            content: "Working under the Syros governance model has made me a better doctor. The morning rounds structure, protocol adherence, and mentorship from senior consultants are things you rarely find outside metropolitan hospitals.",
            rating: 5,
            company: "Syros Healthcare Team"
        },
        {
            name: "Sunita Gupta",
            role: "Patient, Obstetrics",
            content: "The maternity ward was calm, clean, and the staff were respectful throughout. My delivery was handled professionally and the post-natal care was thorough. I will always recommend this hospital to my family.",
            rating: 5,
            company: "Syros-Managed Hospital"
        }
    ];

    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const updateItems = () => {
            const w = window.innerWidth;
            if (w < 768) setItemsPerView(1);
            else if (w < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => handleNext(), 3500);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
        }
        return visible;
    };

    const categoryColor = (company) => {
        if (company.includes('Partner')) return 'text-[#2A6FB0]';
        if (company.includes('Team')) return 'text-[#1F6E5C]';
        return 'text-[#146F8A]';
    };

    return (
        <section className='py-16'>
            <div className='w-full lg:max-w-[100rem] mx-auto px-4'>

                <div className='text-center mb-14'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>
                            Voices of Trust
                        </p>
                        <h2 className='text-4xl md:text-5xl font-light mb-4 text-[#14191F]' style={{ letterSpacing: '-0.025em' }}>
                            What People <span className='text-[#146F8A]'>Say</span>
                        </h2>
                        <p className='text-base text-gray-600 max-w-xl mx-auto leading-relaxed'>
                            Patients, doctors, and hospital partners share their Syros experience.
                        </p>
                    </motion.div>
                </div>

                <div
                    className='relative'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button
                        onClick={handlePrev}
                        className='hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white hover:bg-[#E9F4F6] border border-[#D8DEE6] shadow-lg rounded-full p-2.5 transition-all duration-300 hover:scale-105 group'
                        aria-label="Previous testimonial"
                    >
                        <IconChevronLeft className='w-5 h-5 text-gray-600 group-hover:text-[#146F8A]' />
                    </button>

                    <button
                        onClick={handleNext}
                        className='hidden md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white hover:bg-[#E9F4F6] border border-[#D8DEE6] shadow-lg rounded-full p-2.5 transition-all duration-300 hover:scale-105 group'
                        aria-label="Next testimonial"
                    >
                        <IconChevronRight className='w-5 h-5 text-gray-600 group-hover:text-[#146F8A]' />
                    </button>

                    <div className='overflow-hidden px-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <AnimatePresence mode='popLayout' initial={false}>
                                {getVisibleTestimonials().map((testimonial) => (
                                    <motion.div
                                        key={testimonial.key}
                                        initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.3 } }}
                                        whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(20,111,138,0.08)" }}
                                        className='bg-white rounded border border-[#D8DEE6] p-7 shadow-md hover:shadow-xl transition-shadow duration-300'
                                    >
                                        {/* Stars */}
                                        <div className='flex gap-1 mb-4'>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className='w-4 h-4 text-[#B8924B] fill-current' viewBox='0 0 20 20'>
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className='text-gray-700 mb-5 leading-relaxed text-sm italic'
                                            style={{ fontFamily: 'var(--font-newsreader), Georgia, serif' }}>
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className='flex items-center gap-3.5 pt-4 border-t border-[#EEF1F5]'>
                                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#146F8A] to-[#13315C] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0'>
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-[#14191F] text-sm'>{testimonial.name}</h4>
                                                <p className='text-xs text-gray-500'>{testimonial.role}</p>
                                                <p className={`text-xs font-medium mt-0.5 ${categoryColor(testimonial.company)}`}>
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile navigation */}
                    <div className='flex md:hidden justify-center gap-3 mt-5'>
                        <button onClick={handlePrev} className='bg-white border border-[#D8DEE6] shadow rounded-full p-2.5'>
                            <IconChevronLeft className='w-4 h-4 text-gray-600' />
                        </button>
                        <button onClick={handleNext} className='bg-white border border-[#D8DEE6] shadow rounded-full p-2.5'>
                            <IconChevronRight className='w-4 h-4 text-gray-600' />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className='flex justify-center gap-2 mt-7'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-7 bg-[#146F8A]' : 'w-1.5 bg-[#D8DEE6] hover:bg-gray-400'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-center mt-14'
                >
                    <p className='text-base text-gray-500 mb-5'>
                        Join patients and partners who trust Syros Healthcare.
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className='bg-[#146F8A] text-white px-8 py-3.5 rounded font-semibold text-sm shadow-lg hover:bg-[#0e5268] transition-colors duration-300'
                        >
                            Book an Appointment
                        </motion.button>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials
