import { useLocale } from 'next-intl'
import React from 'react'

interface TestimonialLinkedIn extends React.FC<{
  href: string
}> {}

export const LinkedIn: TestimonialLinkedIn = ({ href }): React.ReactElement => {
  const locale = useLocale()
  return <a href={href} target='_blank' rel='noopener noreferrer' className='underline lg:text-xl'>{locale === 'en-AU' ? 'View LinkedIn profile' : 'Ver perfil de LinkedIn'}</a>
}
