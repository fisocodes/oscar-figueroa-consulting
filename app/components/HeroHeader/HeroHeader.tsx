import React from 'react'
import { HeroHeaderTitle } from './HeroHeaderTitle'
import { HeroHeaderDescription } from './HeroHeaderDescription'
import { IconChevronCompactDown } from '@tabler/icons-react'

interface HeroHeaderProps {
  children: [
    React.ReactElement<typeof HeroHeaderTitle>,
    React.ReactElement<typeof HeroHeaderDescription>
  ]
}

export function HeroHeader ({ children }: HeroHeaderProps): React.ReactElement {
  return (
    <div className='h-dvh flex flex-col justify-center gap-10 p-15'>
      <div className='h-1/2 flex items-end'>
        {children[0]}
      </div>
      {children[1]}
      <div className='grow flex justify-center items-end'>
        <IconChevronCompactDown className='stroke-slate-700 animate-bounce' style={{ animationDuration: '2.5s' }} size={48} />
      </div>
    </div>
  )
}

HeroHeader.Title = HeroHeaderTitle
HeroHeader.Description = HeroHeaderDescription
