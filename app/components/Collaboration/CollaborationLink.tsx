import { useLocale } from 'next-intl'
import React from 'react'

interface CollaborationLink extends React.FC<{
  href: string
}> {}

export const Link: CollaborationLink = ({ href }): React.ReactElement => {
  const locale = useLocale()
  return <a href={href} target='_blank' rel='noopener noreferrer' className='underline lg:text-xl text-slate-700'>{locale === 'en-AU' ? 'Visit website' : 'Visitar sitio web'}</a>
}
