import { JSX } from 'react'

interface HeroHeaderTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}

export function HeroHeaderTitle ({ level = 1, children: title }: HeroHeaderTitleProps): React.ReactElement<HeroHeaderTitleProps> {
  const Order = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Order
      className='text-5xl font-bold font-[Oxanium_Variable] text-slate-700 flex flex-col gap-y-3'
    >
      {title.split(' ').map(
        (word, i) => <span key={i} className='animate-fadeInTop'>{word}</span>
      )}
    </Order>
  )
}
