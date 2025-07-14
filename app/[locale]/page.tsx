'use client'

import HeroHeader from 'app/components/HeroHeader'
import Looper from 'app/components/Looper'
import { HeroHeaderItem } from 'messages/interfaces/HeroHeaderItem'
import { useTranslations } from 'next-intl'
import React from 'react'

function createHeroHeader (data: HeroHeaderItem, index: number): React.ReactElement {
  return (
    <HeroHeader key={index}>
      <HeroHeader.Title level={index === 0 ? 1 : 2}>{data.title}</HeroHeader.Title>
      <HeroHeader.Description>{data.description}</HeroHeader.Description>
    </HeroHeader>
  )
}

export default function HomePage (): React.ReactNode {
  const t = useTranslations('home')
  const heroHeaders = t.raw('heroHeader.items').map(createHeroHeader)

  return (
    <main>
      <header>
        <Looper>
          {heroHeaders}
        </Looper>
      </header>
    </main>
  )
}
