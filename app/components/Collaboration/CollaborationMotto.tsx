import React from 'react'

interface CollaborationMottoProps {
  children: string
}

export function CollaborationMotto ({ children }: CollaborationMottoProps): React.ReactElement {
  return <p className='font-bold font-[Montserrat_Variable] text-xl lg:text-3xl text-slate-700 flex items-end'>{children}</p>
}
