import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import React, { use } from 'react'

export default function HomePage ({ params }: { params: Promise<{ locale: string }> }): React.ReactNode {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('HomePage')
  return <h1 className='text-3xl font-bold underline'>{t('title')}</h1>
}
