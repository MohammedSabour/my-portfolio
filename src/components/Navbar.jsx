import React, { useState } from 'react'
import { Link, NavLink } from 'react-router';
import { Sun, Moon, X, Menu } from 'lucide-react';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }
  return (
    <nav>
      <div className='md:mr-8 p-6 flex justify-between items-center dark:text-[#8892b0]'>
        <Link to="/" className='text-xl dark:text-[#64ffda] cursor-pointer font-heading'> {"</Med>"} </Link> 
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-12 font-mono'>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Home</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>About</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Projects</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Toolbox</NavLink>
          <button onClick={toggleDarkMode} className='cursor-pointer flex items-center'>
            {darkMode ? <Sun size={22}/> : <Moon className='hover:text-[#64ffda] tracking-widest' size={22}/>}
          </button>
        </div>

        {/* Mobile Menu button*/}
        <div className='md:hidden flex items-center gap-6'>
          <button onClick={toggleDarkMode} className='cursor-pointer'>
            {darkMode ? <Sun size={20}/> : <Moon className='dark:hover:text-[#64ffda] tracking-widest' size={20}/>}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer'>
            {mobileMenu ? <X size={24}/> : <Menu className='dark:hover:text-[#64ffda] tracking-widest' size={24}/>}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div 
          className='fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm'
          onClick={() => setMobileMenu(false)}
        />
      )}
    
      <div className={`fixed top-0 right-0 h-full w-3/4 z-50 md:hidden dark:bg-[#112240] bg-slate-100 flex flex-col items-center justify-center transition-transform duration-300 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close button */}
        <button
          onClick={() => setMobileMenu(false)}
          className='absolute top-6 right-6 dark:text-[#8892b0]'
        >
          <X size={28}/>
        </button>
        <div className='flex flex-col items-center gap-10 font-mono dark:text-[#8892b0]'>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Home</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>About</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Projects</NavLink>
          <NavLink to="/" className='dark:hover:text-[#64ffda] tracking-widest'>Toolbox</NavLink>
        </div>
      </div>
    </nav>
  )
}