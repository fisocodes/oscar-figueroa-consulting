'use client'

import HeroHeader from 'app/components/HeroHeader'
import { HeroHeaderItem } from 'messages/interfaces/HeroHeaderItem'
import { useTranslations } from 'next-intl'
import React, { useEffect } from 'react'

export default function HomePage (): React.ReactNode {
  const t = useTranslations('home')

  const heroHeaders: HeroHeaderItem[] = t.raw('heroHeader.items')

  const heroHeaderComponents = heroHeaders.map((hh, i) =>
    <HeroHeader key={i}>
      <HeroHeader.Title level={i === 0 ? 1 : 2}>{hh.title}</HeroHeader.Title>
      <HeroHeader.Description>{hh.description}</HeroHeader.Description>
    </HeroHeader>
  )

  useEffect(() => {
    if (window !== undefined && document !== undefined) {
      const heroHeaders = Array.from(document.querySelectorAll('.hero-header'))

      const titleHeroHeader = heroHeaders.at(0)

      titleHeroHeader?.classList.remove('hidden')
      titleHeroHeader?.classList.add('flex')

      let heroHeaderIndex = 1
      setInterval(() => {
        console.log('Changing header')
        const previousHeroHeader = heroHeaders.at(heroHeaderIndex - 1)
        const currentHeroHeader = heroHeaders.at(heroHeaderIndex)

        previousHeroHeader?.classList.remove('flex')
        previousHeroHeader?.classList.add('hidden')

        currentHeroHeader?.classList.remove('hidden')
        currentHeroHeader?.classList.add('flex')

        heroHeaderIndex++

        if (heroHeaderIndex === heroHeaders.length) { heroHeaderIndex = 0 }
      }, 6000)
    }
  }, [])

  return (
    <main>
      <header>
        {heroHeaderComponents}
      </header>
    </main>
  )
}
