'use client'

import { CollaborationsItem } from 'messages/interfaces/CollaborationsItem'
import { useTranslations } from 'next-intl'
import React from 'react'
import Collaboration from './Collaboration'

function createCollaboration (data: CollaborationsItem): React.ReactElement<typeof Collaboration> {
  return (
    <Collaboration>
      <Collaboration.Svg src={data.imageSrc} alt={data.alt} />
      <Collaboration.Motto>{data.motto}</Collaboration.Motto>
      <Collaboration.Description>{data.description}</Collaboration.Description>
      {data.url !== undefined ? <Collaboration.Link href={data.url} /> : undefined}
    </Collaboration>
  )
}

export function CollaborationsSection (): React.ReactNode {
  const t = useTranslations('pages.home.sections.collaborations')
  const title = t('title')
  const collaborations: CollaborationsItem[] = t.raw('items')
  return (
    <section className='min-h-dvh flex flex-col items-center p-[10%]'>
      <h2 className='text-4xl lg:text-6xl font-[Oxanium_Variable] text-slate-700 font-medium mb-20'>{title}</h2>
      <ul className='flex flex-col items-center gap-20'>
        {collaborations.map((collaboration: any, index: number) => <li key={index}>{createCollaboration(collaboration)}</li>)}
      </ul>
    </section>
  )
}
