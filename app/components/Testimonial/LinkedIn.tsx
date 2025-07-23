import React from 'react'

interface TestimonialLinkedIn extends React.FC<{
  href: string
}> {}

export const LinkedIn: TestimonialLinkedIn = ({ href }): React.ReactElement =>
  <a href={href} target='_blank' rel='noopener noreferrer' className='underline lg:text-xl'>View LinkedIn profile</a>
