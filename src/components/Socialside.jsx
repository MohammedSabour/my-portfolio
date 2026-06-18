import React from 'react'
import { socialMedia } from '../config'
import Githubicon from '../components/icons/github'
import Linkedinicon from '../components/icons/linkedin'
import Twitter from '../components/icons/twitter'

const icons = {
  GitHub: <Githubicon />,
  Linkedin: <Linkedinicon />,
  Twitter : <Twitter/>
}

export default function Socialmediaside() {
  return (
    <div className='fixed left-14 bottom-0 hidden xl:flex flex-col items-center gap-4'>
      <ul className='flex flex-col items-center gap-6'>
        {socialMedia.map((item) => (
          <li key={item.name}>
            <a href={item.url} aria-label={item.name} target="_blank" rel="noreferrer" className="dark:text-[#8892b0] dark:hover:text-[#64ffda] tracking-widest">
              {icons[item.name]}
            </a>
          </li>
        ))}
      </ul>
      <div className='w-px h-40 bg-[#8892b0]'></div>
    </div>
  )
}