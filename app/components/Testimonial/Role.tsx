import React from 'react'

interface TestimonialRole extends React.FC<{
  children: string
}> {}

export const Role: TestimonialRole = ({ children }): React.ReactElement =>
  <p className='lg:text-xl'>{children}</p>
