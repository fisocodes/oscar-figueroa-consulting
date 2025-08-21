import React from 'react'
import { HeroHeadline } from './HeroHeadline'
import { HeroSubheadline } from './HeroSubheadline'
import { IconChevronCompactDown } from '@tabler/icons-react'

interface HeroHeaderProps {
  children: [
    React.ReactElement<typeof HeroHeadline>,
    React.ReactElement<typeof HeroSubheadline>
  ]
}

export function Hero ({ children }: HeroHeaderProps): React.ReactElement {
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

Hero.Title = HeroHeadline
Hero.Description = HeroSubheadline
