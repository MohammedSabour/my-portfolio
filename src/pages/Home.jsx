import React from 'react'
import {email} from '../config'
export default function Home() {
  return (
    <section className='my-14 sm:my-14 md:my-28 lg:my-32'>
      <h1 className='mb-8 ml-px font-mono text-base font-normal dark:text-[#64ffda]'>Hi There</h1>
      <h2 className='text-5xl sm:text-6xl font-bold dark:text-[#ccd6f6] leading-[1.1]'>I'm Mohammed</h2>
      <h3 className='text-5xl sm:text-6xl font-bold mt-4 leading-[1.1] dark:text-[#a8b2d1]'>I build things for the web.</h3>
      <p className='w-auto sm:w-3xl mt-8 max-w-200 mbs-4 mbe-4 text-base font-body dark:text-slate-500'>Software Engineer, specializing in building (and occasionally designing) exceptional digital experiences. Currently expanding into data science and machine learning.</p>
      <div className='mt-14 space-x-12'>
        <a href="/Resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer" className='border-2 border-solid rounded px-7 py-4 dark:text-[#64ffda] leading-1'>Resume</a>
        <a href={`mailto:${email}`} className='border-2 border-solid rounded px-7 py-4 dark:text-[#64ffda] leading-1'> Contact Me</a>
      </div>
    </section>
  )
}

