import React from 'react'

interface CollaborationSVGProps {
  alt: string
  src: string
  url?: string
}

export function CollaborationSVG ({ src, alt, url }: CollaborationSVGProps): React.ReactElement {
  if (url !== undefined || url !== '') {
    return (
      <a href={url} className='flex justify-center' target='_blank' rel='noopener noreferrer'>
        <img src={src} alt={alt} className='max-w-1/2' />
      </a>
    )
  }
  return <img src={src} alt={alt} className='max-w-1/2' />
}
