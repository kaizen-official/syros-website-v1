"use client";

import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { motion } from 'motion/react'
import FloatCta from '../sections/floatCta';

function BgLayout({ children }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const listener = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const shouldAnimate = !reduceMotion;

  return (
    <>
      <Header />

      {/* Animated Background */}
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        {/* Pale Ice Blue base */}
        <div className='absolute inset-0 bg-[#E9F4F6]'></div>

        {/* Subtle gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#E9F4F6]/80 via-white/60 to-[#ACFEC0]/10'></div>

        {shouldAnimate && (
          <>
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='absolute top-20 left-10 w-72 h-72 bg-[#146F8A]/10 rounded-full blur-3xl'
            />

            <motion.div
              animate={{
                y: [0, 40, 0],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className='absolute top-40 right-20 w-96 h-96 bg-[#1F6E5C]/10 rounded-full blur-3xl'
            />
          </>
        )}

        {/* Pulse dot grid */}
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage: 'radial-gradient(circle, #146F8A 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <main className='relative z-0'>
        {children}
        <FloatCta />
      </main>
      <Footer />
    </>
  )
}

export default BgLayout
