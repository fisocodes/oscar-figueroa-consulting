'use client'

import Collaboration from 'app/components/Collaboration'
import Footer from 'app/components/Footer'
import HeroHeader from 'app/components/HeroHeader'
import Looper from 'app/components/Looper'
import { CollaborationsItem } from 'messages/interfaces/CollaborationsItem'
import { HeroHeaderItem } from 'messages/interfaces/HeroHeaderItem'
import { useTranslations } from 'next-intl'
import React from 'react'

function createHeroHeader (data: HeroHeaderItem, index: number): React.ReactElement<typeof HeroHeader> {
  return (
    <HeroHeader key={index}>
      <HeroHeader.Title level={index === 0 ? 1 : 2}>{data.title}</HeroHeader.Title>
      <HeroHeader.Description>{data.description}</HeroHeader.Description>
    </HeroHeader>
  )
}

function createCollaboration (data: CollaborationsItem): React.ReactElement<typeof Collaboration> {
  return (
    <Collaboration>
      <Collaboration.Svg src={data.imageSrc} alt={data.alt} url={data.url} />
      <Collaboration.Description>{data.description}</Collaboration.Description>
    </Collaboration>
  )
}

export default function HomePage (): React.ReactNode {
  const t = useTranslations('home')
  const heroHeaders = t.raw('heroHeader.items').map(createHeroHeader)
  const collaborations = t.raw('collaborations.items').map(createCollaboration)

  return (
    <>
      <header className='snap-center'>
        <Looper>
          {heroHeaders}
        </Looper>
      </header>
      <main>
        <section className='snap-center h-dvh flex flex-col lg:justify-center justify-evenly items-center'>
          <h2 className='text-4xl lg:text-6xl font-[Oxanium_Variable] text-slate-700 font-medium'>Collaborations</h2>
          <ul className='flex grow max-h-2/3 flex-col lg:flex-row items-center lg:justify-center justify-evenly mx-10'>
            {collaborations.map((collaboration: any, index: number) => <li key={index}>{collaboration}</li>)}
          </ul>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}
