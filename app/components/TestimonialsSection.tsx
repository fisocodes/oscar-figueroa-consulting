'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import Testimonial from './Testimonial'
import { TestimonialsItem } from 'messages/interfaces/TestimonialsItem'

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

export function TestimonialsSection (): React.ReactNode {
  const t = useTranslations('pages.home.sections.testimonials')
  const title = t('title')
  const testimonials: TestimonialsItem[] = t.raw('items')
  return (
    <section className='min-h-dvh flex flex-col items-center p-[10%]'>
      <h2 className='text-4xl lg:text-6xl font-[Oxanium_Variable] text-slate-700 font-medium mb-20'>{title}</h2>
      <ul className='flex flex-col items-center gap-20'>
        {testimonials.map((testimonial, index: number) => <li key={index}>{createTestimonial(testimonial)}</li>)}
      </ul>
    </section>
  )
}
