import Image from 'next/image'
import { leadershipTeam } from '@/app/leadership/data'

export default function LeadershipTeam() {
  return (
    <section className='py-16 bg-white/60' aria-labelledby='leadership-team-heading'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p className='text-xs tracking-[0.2em] uppercase text-[#146F8A] mb-3 font-mono'>Our Leadership Team</p>
          <h2 id='leadership-team-heading' className='text-3xl md:text-5xl font-light text-[#14191F]'>People Guiding <span className='text-[#146F8A]'>Our Care</span></h2>
        </div>
        <nav aria-label='Leadership profiles' className='flex flex-wrap justify-center gap-3 mb-14'>
          {leadershipTeam.map(person => <a key={person.slug} href={`#${person.slug}`} className='rounded-full border border-[#146F8A]/25 bg-white px-4 py-2 text-sm text-[#146F8A] hover:bg-[#E9F4F6]'>{person.name}</a>)}
        </nav>
        <div className='space-y-16'>
          {leadershipTeam.map(person => (
            <article key={person.slug} id={person.slug} className='scroll-mt-28 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-12 border-t border-[#D8DEE6] pt-12'>
              <div>
                <div className='relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-xl border border-[#D8DEE6] bg-white'>
                  <Image src={person.image} alt={person.name} fill sizes='(max-width: 1023px) 90vw, 320px' className='object-cover object-top' />
                </div>
                <p className='mt-5 text-xs font-mono uppercase tracking-widest text-[#146F8A]'>{person.organisation}</p>
                <h3 className='mt-2 text-3xl text-[#14191F]'>{person.name}</h3>
                <p className='mt-2 text-base font-semibold text-[#146F8A]'>{person.role}</p>
                {person.experience && <p className='mt-3 text-sm text-gray-600 leading-relaxed'>{person.experience}</p>}
              </div>
              <div className='space-y-6 text-sm leading-7 text-gray-600'>
                <p className='text-base text-[#13315C]'>{person.introduction}</p>
                <div>
                  <h4 className='text-2xl text-[#14191F] mb-3'>Leadership Profile</h4>
                  {person.profile.map(paragraph => <p key={paragraph} className='mb-3'>{paragraph}</p>)}
                </div>
                {person.credentials && <div><h4 className='text-2xl text-[#14191F] mb-3'>{person.slug === 'raghav-mehta' ? 'Legal Credentials' : 'Clinical Credentials'}</h4><p>{person.credentials}</p></div>}
                <details className='rounded-lg border border-[#D8DEE6] bg-white px-5 py-4'>
                  <summary className='cursor-pointer font-semibold text-[#146F8A]'>Key Leadership Responsibilities</summary>
                  <ul className='list-disc pl-5 space-y-3 mt-4'>{person.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
                </details>
                <blockquote className='border-l-2 border-[#146F8A] pl-5 text-base italic text-[#13315C]'>
                  <p>&ldquo;{person.message}&rdquo;</p>
                  <footer className='mt-3 text-sm not-italic text-gray-500'>— {person.name}</footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
