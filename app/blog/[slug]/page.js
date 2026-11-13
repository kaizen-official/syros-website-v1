import Link from 'next/link'
import { notFound } from 'next/navigation'
import BgLayout from '@/components/layout/bgLayout'
import { articles } from '../articles.json'

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = articles.find((entry) => entry.slug === slug)

  if (!article) notFound()

  const canonical = `/blog/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: canonical,
      siteName: 'Syros Healthcare',
      locale: 'en_IN',
      publishedTime: article.date,
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = articles.find((entry) => entry.slug === slug)

  if (!article) notFound()

  const publishedDate = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(article.date))

  return (
    <BgLayout>
      <article className='mx-auto max-w-4xl px-4 pb-16 pt-28 sm:px-6 lg:pt-36'>
        <header className='mx-auto max-w-2xl'>
          <Link href='/blog' className='text-sm font-semibold text-[#146F8A] hover:underline'>
            ← Back to Blog
          </Link>
          <p className='mt-7 text-xs font-semibold uppercase tracking-wider text-[#146F8A]'>
            {article.category}
          </p>
          <h1 className='mt-3 text-4xl leading-tight text-[#14191F] sm:text-5xl'>
            {article.title}
          </h1>
          <p className='mt-3 flex flex-wrap items-center gap-x-2 text-sm text-gray-600'>
            <time dateTime={article.date}>{publishedDate}</time>
            <span aria-hidden='true'>·</span>
            <span>{article.readTime} read</span>
          </p>
          <p className='mt-5 text-lg leading-relaxed text-gray-700'>{article.excerpt}</p>
        </header>

        <img src={article.image} alt='' className='mt-8 aspect-[2/1] w-full rounded-lg object-cover' />

        <div className='mx-auto mt-9 max-w-2xl space-y-7'>
          {article.sections?.map(({ heading, text }) => (
            <section key={heading}>
              <h2 className='text-2xl font-semibold text-[#14191F]'>{heading}</h2>
              <p className='mt-2 text-base leading-relaxed text-gray-700'>{text}</p>
            </section>
          ))}

          {article.sources?.length > 0 && (
            <section className='border-t border-[#D8DEE6] pt-6'>
              <h2 className='text-xl font-semibold text-[#14191F]'>Sources</h2>
              <ul className='mt-2 space-y-1'>
                {article.sources.map(({ label, url }) => (
                  <li key={url}>
                    <a href={url} className='text-sm text-[#146F8A] underline underline-offset-4'>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </BgLayout>
  )
}
