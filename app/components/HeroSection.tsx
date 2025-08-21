import React from 'react'
import HeroHeader from './Hero'
import { HeroHeaderItem } from 'messages/interfaces/HeroHeaderItem'
import Looper from './Looper'
import { useTranslations } from 'next-intl'

function createHeroHeader (data: HeroHeaderItem, index: number): React.ReactElement<typeof HeroHeader> {
  return (
    <HeroHeader key={index}>
      <HeroHeader.Title level={index === 0 ? 1 : 2}>{data.headline}</HeroHeader.Title>
      <HeroHeader.Description>{data.subheadline}</HeroHeader.Description>
    </HeroHeader>
  )
}

export function HeroSection (): React.ReactNode {
  const headers: HeroHeaderItem[] = useTranslations('pages.home.sections.hero').raw('items')
  return (
    <section className='min-h-dvh'>
      <Looper>
        {headers.map(createHeroHeader)}
      </Looper>
    </section>
  )
}
