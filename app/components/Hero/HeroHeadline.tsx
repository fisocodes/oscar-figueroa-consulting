import { JSX } from 'react'

interface HeroHeadlineProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}

export function HeroHeadline ({ level = 1, children: title }: HeroHeadlineProps): React.ReactElement<HeroHeadlineProps> {
  const Order = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Order
      className='text-5xl lg:text-9xl font-bold font-[Oxanium_Variable] text-slate-700 flex flex-col gap-y-3'
    >
      {title.split(' ').map(
        (word, i) => <span key={i} className='animate-fadeInTop break-all'>{word}</span>
      )}
    </Order>
  )
}
