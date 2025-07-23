import React from 'react'
import { Quote } from './Quote'
import { Footer } from './Footer'
import { Name } from './Name'
import { Role } from './Role'
import { LinkedIn } from './LinkedIn'

interface TestimonialRoot extends React.FC<{
  children: Array<React.ReactElement<typeof Quote> | React.ReactElement<typeof Footer>>
}> {
  Quote: typeof Quote
  Footer: typeof Footer
  Name: typeof Name
  Role: typeof Role
  LinkedIn: typeof LinkedIn
}

export const Testimonial: TestimonialRoot = ({ children }): React.ReactElement => {
  return (
    <blockquote className='flex flex-col gap-5 text-slate-700'>
      {children}
    </blockquote>
  )
}

Testimonial.Quote = Quote
Testimonial.Footer = Footer
Testimonial.Name = Name
Testimonial.Role = Role
Testimonial.LinkedIn = LinkedIn
