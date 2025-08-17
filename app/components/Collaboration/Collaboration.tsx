import React, { useEffect, useRef } from 'react'
import { CollaborationDescription } from './CollaborationDescription'
import { CollaborationSVG } from './CollaborationSVG'
import { CollaborationMotto } from './CollaborationMotto'
import { Link } from './CollaborationLink'

interface CollaborationProps {
  children: [
    React.ReactElement<typeof CollaborationSVG>,
    React.ReactElement<typeof CollaborationMotto>,
    React.ReactElement<typeof CollaborationDescription>,
    React.ReactElement<typeof Link>?,
  ]
}

export function Collaboration ({ children }: CollaborationProps): React.ReactElement {
  const ref = useRef(null)
  useEffect(() => {
    if (window !== undefined && document !== undefined && ref.current !== null) {
      const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('animate-fadeInTop')
          entries[0].target.classList.remove('opacity-0')
          if (ref.current !== null) { observer.unobserve(ref.current) }
        }
      }, { threshold: 1 })

      observer.observe(ref.current)
    }
  }, [])
  return (
    <div ref={ref} className='opacity-0'>
      <div className='flex flex-col items-center gap-10 mb-10'>
        {children[0]}
        {children[1]}
      </div>
      <div className='mb-5'>
        {children[2]}
      </div>
      <div className='flex justify-end'>
        {children[3]}
      </div>
    </div>
  )
}

Collaboration.Svg = CollaborationSVG
Collaboration.Motto = CollaborationMotto
Collaboration.Description = CollaborationDescription
Collaboration.Link = Link
