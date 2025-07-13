interface HeroHeaderDescriptionProps {
  children: string
}

export function HeroHeaderDescription ({ children: description }: HeroHeaderDescriptionProps): React.ReactElement {
  return <p className='text-2xl font-light font-[Montserrat_Variable] text-slate-500'>{description}</p>
}
