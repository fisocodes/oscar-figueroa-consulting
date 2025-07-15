import React, { useEffect, useRef } from 'react'
import { CollaborationDescription } from './CollaborationDescription'
import { CollaborationSVG } from './CollaborationSVG'

interface CollaborationProps {
  children: [
    React.ReactElement<typeof CollaborationSVG>,
    React.ReactElement<typeof CollaborationDescription>,
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
      }, { root: null, rootMargin: '0px', threshold: 0.5 })

      observer.observe(ref.current)
    }
  }, [])
  return (
    <div ref={ref} className='grid grid-cols-1 opacity-0'>
      <div className='flex mb-5 justify-center'>
        {children[0]}
      </div>
      <div className='mb-5'>
        {children[1]}
      </div>
    </div>
  )
}

Collaboration.Svg = CollaborationSVG
Collaboration.Description = CollaborationDescription
