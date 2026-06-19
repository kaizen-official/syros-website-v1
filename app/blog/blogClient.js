"use client";

import BgLayout from '@/components/layout/bgLayout'
import PageHero from '@/components/layout/pageHero'
import articlesData from './articles.json'
import { motion } from 'motion/react'
import { useState } from 'react'
import Link from 'next/link'

const categories = ['All', ...new Set(articlesData.articles.map((a) => a.category))]

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articlesData.articles
    : articlesData.articles.filter((a) => a.category === activeCategory)

  return (
    <BgLayout>
      <PageHero
        label="Health Education"
        title="Insights for"
        highlight="Better Health"
        breadcrumb="Blog"
        description="Trusted health education from Syros Healthcare — practical guidance on prevention, emergencies, chronic conditions, and everyday wellbeing."
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Syros Healthcare Health Education Blog"
      />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Category Filter */}
          <div className='flex flex-wrap gap-2 justify-center mb-12'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#146F8A] text-white border-[#146F8A]'
                    : 'bg-white text-[#14191F] border-[#D8DEE6] hover:border-[#146F8A]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filtered.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className='bg-white rounded border border-[#D8DEE6] overflow-hidden hover:border-[#146F8A]/30 hover:shadow-lg transition-all group flex flex-col'
              >
                <div className='relative h-44 overflow-hidden'>
                  <img
                    src={article.image}
                    alt={article.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <span className='absolute top-3 left-3 bg-white/90 text-[#146F8A] text-[10px] font-mono px-2 py-1 rounded-full uppercase tracking-wide'>
                    {article.category}
                  </span>
                </div>
                <div className='p-5 flex flex-col flex-1'>
                  <div className='flex items-center gap-2 text-xs text-gray-400 mb-2'>
                    <span>{new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h2 className='text-base font-semibold text-[#14191F] mb-2 leading-snug group-hover:text-[#146F8A] transition-colors'>
                    {article.title}
                  </h2>
                  <p className='text-xs text-gray-500 leading-relaxed flex-1 mb-4'>{article.excerpt}</p>
                  <Link
                    href='/contact'
                    className='text-xs text-[#146F8A] font-semibold hover:underline inline-flex items-center gap-1'
                  >
                    Consult a specialist →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className='text-center text-sm text-gray-500 py-12'>No articles in this category yet.</p>
          )}
        </div>
      </section>

      <section className='py-12 bg-[#E9F4F6]'>
        <div className='max-w-2xl mx-auto px-4 text-center'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Stay Informed</p>
          <h2 className='text-2xl font-light text-[#14191F] mb-3' style={{ letterSpacing: '-0.02em' }}>
            Have a health concern?
          </h2>
          <p className='text-sm text-gray-600 mb-6'>
            Book a consultation with our specialists or reach our 24/7 emergency line for urgent care.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link href='/contact' className='bg-[#146F8A] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#0e5268] transition-colors'>
              Book Appointment
            </Link>
            <a href='tel:+919999999999' className='border border-[#146F8A] text-[#146F8A] px-6 py-3 rounded text-sm font-semibold hover:bg-white transition-colors'>
              Emergency: +91 99999 99999
            </a>
          </div>
        </div>
      </section>
    </BgLayout>
  )
}
