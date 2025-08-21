import { useTranslations } from 'next-intl'
import React from 'react'

interface TestimonialLinkedIn extends React.FC<{
  href: string
}> {}

export const LinkedIn: TestimonialLinkedIn = ({ href }): React.ReactElement => {
  const t = useTranslations('components.ViewLinkedIn')
  return <a href={href} target='_blank' rel='noopener noreferrer' className='underline lg:text-xl'>{t('label')}</a>
}
