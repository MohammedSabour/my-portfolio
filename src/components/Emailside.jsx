import React from 'react'
import { email } from '../config';
export default function Emailside() {
  return (
    <div className='fixed right-14 bottom-0 hidden md:flex flex-col items-center gap-4'>
        <a 
            href={`mailto:${email}`}
            className='font-mono text-xs dark:text-[#8892b0] dark:hover:text-[#64ffda] tracking-widest' 
            style={{ writingMode: 'vertical-rl' }}
        >
            {email}
        </a>
        <div className='w-px h-48 bg-[#8892b0]'></div>
    </div>
  )
}
