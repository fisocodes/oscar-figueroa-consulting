import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

export function Footer (): React.ReactElement {
  return (
    <div className='min-h-[100px] flex justify-between items-end p-5 bg-linear-to-t from-slate-700 to-slate-100'>
      <a href='/' className='font-[Oxanium_Variable] text-slate-200 text-xl'>Oscar Figueroa </a>
      <ul className='flex gap-3'>
        <li>
          <a href='https://github.com/fisocodes' target='_blank' rel='noopener noreferrer'>

            <IconBrandGithub className='stroke-slate-100 size-[32px]' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/fisocodes/' target='_blank' rel='noopener noreferrer'>
            <IconBrandLinkedin size={32} className='stroke-slate-100 size-[32px]' />
          </a>
        </li>
      </ul>
    </div>
  )
}
