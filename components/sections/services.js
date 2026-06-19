"use client";

import { useState, useRef } from "react";
import {
  motion, AnimatePresence,
  useMotionValue, useMotionTemplate, useSpring, useTransform,
} from "motion/react";

function TiltCard({ image, isActive, isDimmed, onHover, onLeave }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 320, damping: 28 });
  const springY = useSpring(rawY, { stiffness: 320, damping: 28 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [11, -11]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-11, 11]);
  const imgX   = useTransform(springX, [-0.5, 0.5], ["-10px", "10px"]);
  const imgY   = useTransform(springY, [-0.5, 0.5], ["-10px", "10px"]);

  const spotX  = useMotionValue(50);
  const spotY  = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(160px circle at ${spotX}% ${spotY}%, rgba(172,254,192,0.22), transparent 80%)`;

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
    spotX.set(((e.clientX - left) / width) * 100);
    spotY.set(((e.clientY - top) / height) * 100);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    onHover();
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rawX.set(0);
    rawY.set(0);
    onLeave();
  }

  return (
    <div style={{ perspective: "900px" }} className="h-80 relative">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{
          scale:  isActive ? 1.035 : isDimmed ? 0.955 : 1,
          filter: isDimmed ? "brightness(0.45)" : "brightness(1)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`relative w-full h-full overflow-hidden rounded-xl cursor-pointer select-none ${isActive ? "z-10" : "z-0"}`}
      >
        {/* Parallax image */}
        <motion.div className="absolute inset-0 scale-[1.16]" style={{ x: imgX, y: imgY }}>
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        </motion.div>

        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: spotlight }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.18 }}
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isActive
              ? "linear-gradient(to top, rgba(20,25,31,0.97) 0%, rgba(20,25,31,0.52) 48%, rgba(20,25,31,0.06) 100%)"
              : "linear-gradient(to top, rgba(20,25,31,0.90) 0%, rgba(20,25,31,0.46) 58%, rgba(20,25,31,0.14) 100%)",
          }}
          transition={{ duration: 0.28 }}
        />

        {/* Scan line — only while this card is hovered */}
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              key="scan"
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ACFEC0]/55 to-transparent pointer-events-none z-20"
              initial={{ top: "-2px", opacity: 1 }}
              animate={{ top: "104%", opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              transition={{ duration: 1.6, ease: "linear", repeat: Infinity, repeatDelay: 0.9 }}
            />
          )}
        </AnimatePresence>

        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          animate={{
            boxShadow: isActive
              ? "inset 0 0 0 1.5px rgba(172,254,192,0.55), 0 28px 64px rgba(20,111,138,0.48)"
              : "inset 0 0 0 1px rgba(255,255,255,0.07)",
          }}
          transition={{ duration: 0.22 }}
        />

        {/* Code badge */}
        {/* <div className="absolute top-4 left-4 z-10">
          <motion.span
            className="text-[10px] font-mono tracking-[0.2em]"
            animate={{ color: isActive ? "#ACFEC0" : "rgba(255,255,255,0.38)" }}
            transition={{ duration: 0.18 }}
          >
            {image.code}
          </motion.span>
        </div> */}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <motion.div
            className="h-px bg-[#ACFEC0] mb-3 rounded-full origin-left"
            animate={{ scaleX: isActive ? 1 : 0.22, opacity: isActive ? 1 : 0.22 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          />
          <h3 className="text-white font-semibold text-[15px] leading-snug">
            {image.text}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, y: 9 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-white/65 text-xs leading-relaxed mt-2"
              >
                {image.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function SpecialityGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="hidden lg:grid grid-cols-4 gap-3 px-8">
      {images.map((image, i) => (
        <TiltCard
          key={i}
          image={image}
          isActive={activeIndex === i}
          isDimmed={activeIndex !== null && activeIndex !== i}
          onHover={() => setActiveIndex(i)}
          onLeave={() => setActiveIndex(null)}
        />
      ))}
    </div>
  );
}

function Services() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
            text: "Emergency & Trauma Care",
            description: "Round-the-clock emergency services with trained trauma teams, rapid triage, and life-saving interventions available 24 hours a day.",
            link: "/specialities",
            alt: "Emergency and Trauma Care",
            code: "# 01",
        },
        {
            src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
            text: "ICU & Critical Care",
            description: "Intensive care units staffed with critical care specialists, advanced monitoring, and ventilator support for complex medical and surgical cases.",
            link: "/specialities",
            alt: "ICU and Critical Care",
            code: "# 02",
        },
        {
            src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
            text: "Internal Medicine",
            description: "Comprehensive diagnosis and management of adult diseases - diabetes, hypertension, infections, and complex multi-system conditions.",
            link: "/specialities",
            alt: "Internal Medicine",
            code: "# 03",
        },
        {
            src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
            text: "General Surgery",
            description: "Laparoscopic and open surgical procedures performed with precision, including abdominal, hernia, gallbladder, and appendectomy surgeries.",
            link: "/specialities",
            alt: "General Surgery",
            code: "# 04",
        },
        {
            src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
            text: "Orthopaedics",
            description: "Bone, joint, and musculoskeletal care - fracture management, joint replacement, sports injuries, and physiotherapy rehabilitation.",
            link: "/specialities",
            alt: "Orthopaedics",
            code: "# 05",
        },
        {
            src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
            text: "Obstetrics & Gynaecology",
            description: "Safe deliveries, antenatal care, high-risk pregnancy management, and gynaecological procedures in a supportive, woman-centered environment.",
            link: "/specialities",
            alt: "Obstetrics and Gynaecology",
            code: "# 06",
        },
        {
            src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
            text: "Diagnostics",
            description: "Digital X-ray, ultrasound, ECG, echocardiography, and a fully equipped laboratory for accurate, fast diagnostic results.",
            link: "/specialities",
            alt: "Diagnostics",
            code: "# 07",
        },
        {
            src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
            text: "Preventive Health",
            description: "Health checkup packages, chronic disease screening, vaccination, and wellness programs designed to keep you ahead of illness.",
            link: "/specialities",
            alt: "Preventive Health Checkup",
            code: "# 08",
        }
    ];

    return (
        <section className="py-16">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-center text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono"
            >
                Clinical Services
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-light text-center mx-auto mb-4 text-[#14191F]"
                style={{ letterSpacing: '-0.025em' }}
            >
                Our <span className="text-[#146F8A]">Specialities</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-center mx-auto max-w-2xl mb-8 text-gray-600 leading-relaxed px-4"
            >
                From emergency trauma to preventive care - Syros delivers tertiary-grade clinical services with the warmth of a neighbourhood doctor.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {/* Desktop view */}
                <SpecialityGrid images={images} />

                {/* Mobile / Tablet view */}
                <div className="lg:hidden px-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {images.map((image, index) => (
                        <motion.a
                            key={index}
                            href={image.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            className="group relative overflow-hidden rounded shadow-lg border border-[#D8DEE6] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14191F]/90 via-[#14191F]/30 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-[#ACFEC0] text-xs tracking-widest uppercase mb-1 font-mono">{image.code}</p>
                                <h3 className="text-lg font-semibold text-white mb-1.5">
                                    {image.text}
                                </h3>
                                <p className="text-white/75 text-xs leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Services;
