import React from 'react'

interface CollaborationSVGProps {
  alt: string
  src: string
  url?: string
}

export function CollaborationSVG ({ src, alt }: CollaborationSVGProps): React.ReactElement {
  return <img src={src} alt={alt} className='max-w-1/3 max-h-10' />
}
