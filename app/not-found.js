"use client";

import BgLayout from '@/components/layout/bgLayout';
import Link from 'next/link';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <BgLayout>
      <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl w-full text-center'>
          <div className='mb-8'>
            <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Error</p>
            <h1 className='text-9xl font-light text-[#146F8A]' style={{ letterSpacing: '-0.04em' }}>404</h1>
            <h2 className='text-3xl font-light text-[#14191F] mt-4 mb-4' style={{ letterSpacing: '-0.02em' }}>
              Page Not Found
            </h2>
            <p className='text-base text-gray-600 mb-8 leading-relaxed'>
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => window.history.back()}
              className='flex items-center gap-2 bg-[#E9F4F6] text-[#14191F] px-6 py-3 rounded text-sm font-medium hover:bg-[#D8DEE6] transition-all'
            >
              <IconArrowLeft size={18} />
              Go Back
            </button>
            <Link href='/'>
              <button className='flex items-center gap-2 bg-[#146F8A] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#0e5268] transition-all shadow-md hover:shadow-lg'>
                <IconHome size={18} />
                Go Home
              </button>
            </Link>
          </div>

          <div className='mt-12'>
            <p className='text-sm text-gray-500 mb-4'>Looking for something specific?</p>
            <div className='flex flex-wrap justify-center gap-3 text-sm'>
              {[
                { href: '/about', label: 'About Syros' },
                { href: '/specialities', label: 'Specialities' },
                { href: '/partner', label: 'Partner With Us' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact Us' },
              ].map(({ href, label }, i, arr) => (
                <span key={href} className='flex items-center gap-3'>
                  <Link href={href} className='text-[#146F8A] hover:text-[#0e5268] font-medium transition-colors'>
                    {label}
                  </Link>
                  {i < arr.length - 1 && <span className='text-gray-300'>|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BgLayout>
  );
}
