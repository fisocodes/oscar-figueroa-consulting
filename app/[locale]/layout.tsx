import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@i18n/routing'
import { Metadata } from 'next'
import React from 'react'

import '../globals.css'
import '@fontsource-variable/oxanium'
import '@fontsource-variable/montserrat'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map(locale => ({ locale }))
}

export const metadata: Metadata = {
  robots: process.env.ROBOTS
}

export default async function LocaleLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <html lang={locale} className='scroll-smooth'>
      <body className='bg-slate-100'>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
