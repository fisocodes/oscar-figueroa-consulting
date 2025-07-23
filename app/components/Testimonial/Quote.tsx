import React, { useEffect, useRef } from 'react'

interface TestimonialQuote extends React.FC<{
  children: string
}> {}

export const Quote: TestimonialQuote = ({ children }): React.ReactElement => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref !== null) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-fadeIn')
            observer.disconnect()
          }
        })
      }, { threshold: 1 })

      if (ref.current !== null) { observer.observe(ref.current) }
    }
  }, [])
  return <p ref={ref} className='italic lg:text-2xl font-light opacity-0'>"{children}"</p>
}
