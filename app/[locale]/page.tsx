'use client'

import Collaboration from 'app/components/Collaboration'
import Footer from 'app/components/Footer'
import HeroHeader from 'app/components/HeroHeader'
import Looper from 'app/components/Looper'
import Testimonial from 'app/components/Testimonial'
import { CollaborationsItem } from 'messages/interfaces/CollaborationsItem'
import { HeroHeaderItem } from 'messages/interfaces/HeroHeaderItem'
import { TestimonialsItem } from 'messages/interfaces/TestimonialsItem'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

function createHeroHeader (data: HeroHeaderItem, index: number): React.ReactElement<typeof HeroHeader> {
  return (
    <HeroHeader key={index}>
      <HeroHeader.Title level={index === 0 ? 1 : 2}>{data.title}</HeroHeader.Title>
      <HeroHeader.Description>{data.description}</HeroHeader.Description>
    </HeroHeader>
  )
}

function createCollaboration (data: CollaborationsItem): React.ReactElement<typeof Collaboration> {
  return (
    <Collaboration>
      <Collaboration.Svg src={data.imageSrc} alt={data.alt} />
      <Collaboration.Motto>{data.motto}</Collaboration.Motto>
      <Collaboration.Description>{data.description}</Collaboration.Description>
      {data.url !== undefined ? <Collaboration.Link href={data.url} /> : undefined}
    </Collaboration>
  )
}

function createTestimonial (data: TestimonialsItem): React.ReactElement<typeof Testimonial> {
  return (
    <Testimonial>
      <Testimonial.Quote>{data.quote}</Testimonial.Quote>
      <Testimonial.Footer>
        <Testimonial.Name>{`${data.firtName} ${data.lastName}`}</Testimonial.Name>
        <Testimonial.Role>{data.role}</Testimonial.Role>
        <Testimonial.LinkedIn href={data.linkedIn} />
      </Testimonial.Footer>
    </Testimonial>
  )
}

export default function HomePage (): React.ReactNode {
  const locale = useLocale()
  const t = useTranslations('home')
  const heroHeaders = t.raw('heroHeader.items').map(createHeroHeader)
  const collaborations = t.raw('collaborations.items').map(createCollaboration)
  const testimonials = t.raw('testimonials.items').map(createTestimonial)

  return (
    <>
      <header className='min-h-dvh'>
        <Looper>
          {heroHeaders}
        </Looper>
      </header>
      <main>
        <section className='min-h-dvh flex flex-col items-center p-[10%]'>
          <h2 className='text-4xl lg:text-6xl font-[Oxanium_Variable] text-slate-700 font-medium mb-20'>{locale === 'en-AU' ? 'Collaborations' : 'Colaboraciones'}</h2>
          <ul className='flex flex-col items-center gap-20'>
            {collaborations.map((collaboration: any, index: number) => <li key={index}>{collaboration}</li>)}
          </ul>
        </section>
        <section className='min-h-dvh flex flex-col items-center p-[10%]'>
          <h2 className='text-4xl lg:text-6xl font-[Oxanium_Variable] text-slate-700 font-medium mb-20'>{locale === 'en-AU' ? 'Testimonials' : 'Testimonios'}</h2>
          <ul className='flex flex-col items-center gap-20'>
            {testimonials.map((testimonial: any, index: number) => <li key={index}>{testimonial}</li>)}
          </ul>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}
