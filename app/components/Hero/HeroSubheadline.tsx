interface HeroSubheadlineProps {
  children: string
}

export function HeroSubheadline ({ children: description }: HeroSubheadlineProps): React.ReactElement {
  return <p className='text-2xl lg:text-4xl font-light font-[Montserrat_Variable] text-slate-500'>{description}</p>
}
