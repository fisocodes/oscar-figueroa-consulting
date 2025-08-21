import { HeroSection, CollaborationsSection, TestimonialsSection } from 'app/components'
import Footer from 'app/components/Footer'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import React from 'react'

export async function generateMetadata ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.home' })
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: process.env.DOMAIN,
      languages: {
        'en-AU': process.env.EN_AU_DOMAIN,
        'es-MX': process.env.ES_MX_DOMAIN
      }
    }
  }
}

export default async function HomePage ({ params }: { params: Promise<{ locale: string }> }): Promise<React.ReactNode> {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <main>
        <HeroSection />
        <CollaborationsSection />
        <TestimonialsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
