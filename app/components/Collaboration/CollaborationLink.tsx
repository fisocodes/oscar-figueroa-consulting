import { useTranslations } from 'next-intl'
import React from 'react'

interface CollaborationLink extends React.FC<{
  href: string
}> {}

export const Link: CollaborationLink = ({ href }): React.ReactElement => {
  const t = useTranslations('components.VisitWebsite')
  return <a href={href} target='_blank' rel='noopener noreferrer' className='underline lg:text-xl text-slate-700'>{t('label')}</a>
}
