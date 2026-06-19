"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight } from '@tabler/icons-react';

export default function PageHero({ label, title, highlight, description, breadcrumb, image, imageAlt }) {
  return (
    <section className='relative h-[70vh] mt-20 flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src={image}
          alt={imageAlt || title}
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#13315C]/85 to-[#146F8A]/70' />
        <div
          className='absolute inset-0 opacity-[0.06]'
          style={{
            backgroundImage: 'radial-gradient(circle, #ACFEC0 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white w-full'>
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
          <span className='text-[#ACFEC0]'>{breadcrumb}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className='text-xs tracking-[0.2em] uppercase text-[#ACFEC0] mb-4 font-mono'>{label}</p>
          <div className='w-10 h-0.5 bg-[#ACFEC0] mb-5' />
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light mb-4' style={{ letterSpacing: '-0.025em' }}>
            {title}{' '}
            {highlight && <span className='text-[#ACFEC0]'>{highlight}</span>}
          </h1>
          {description && (
            <p className='text-base text-white/70 max-w-xl leading-relaxed'>{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
