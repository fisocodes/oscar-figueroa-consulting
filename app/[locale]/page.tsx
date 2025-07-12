import { setRequestLocale } from 'next-intl/server'
import React, { use } from 'react'

export default function HomePage ({ params }: { params: Promise<{ locale: string }> }): React.ReactNode {
  const { locale } = use(params)
  setRequestLocale(locale)
  return <main />
}
