import React from 'react'

interface CollaborationDescriptionProps {
  children: string
}

export function CollaborationDescription ({ children }: CollaborationDescriptionProps): React.ReactElement {
  return <p className='font-light font-[Montserrat_Variable] text-xl lg:text-3xl text-center text-slate-500'>{children}</p>
}
