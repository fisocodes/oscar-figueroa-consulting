import React from 'react'
import { Name } from './Name'
import { Role } from './Role'
import { LinkedIn } from './LinkedIn'

interface TestimonialFooter extends React.FC<{
  children: Array<React.ReactElement<typeof Name> | React.ReactElement<typeof Role> | React.ReactElement<typeof LinkedIn>>
}> {}

export const Footer: TestimonialFooter = ({ children }): React.ReactElement => {
  return (
    <footer>
      {children}
    </footer>
  )
}
