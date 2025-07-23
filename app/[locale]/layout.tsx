import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@i18n/routing'
import React from 'react'

import '../globals.css'
import '@fontsource-variable/oxanium'
import '@fontsource-variable/montserrat'

export function generateStaticParams (): any[] {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) { notFound() }

  setRequestLocale(locale)

  return (
    <html lang={locale} className='scroll-smooth'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className='bg-slate-100'>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
