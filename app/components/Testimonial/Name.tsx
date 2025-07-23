import React from 'react'

interface TestimonialName extends React.FC<{
  children: string
}> {}

export const Name: TestimonialName = ({ children }): React.ReactElement =>
  <strong className='lg:text-xl'>{children}</strong>
