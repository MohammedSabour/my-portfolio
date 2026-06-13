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
      <div className='max-w-333 mx-auto mt-4 py-4 flex justify-between items-center dark:text-[#8892b0]'>
        <Link to="/" className='text-xl dark:text-[#64ffda] cursor-pointer font-heading'> {"</Med>"} </Link> 
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-12 font-mono'>
          <NavLink to="/"><a className='dark:hover:text-[#64ffda] tracking-widest'>Home</a></NavLink>
          <NavLink to="/"><a className='dark:hover:text-[#64ffda] tracking-widest'>About</a></NavLink>
          <NavLink to="/"><a className='dark:hover:text-[#64ffda] tracking-widest'>Projects</a></NavLink>
          <NavLink to="/"><a className='dark:hover:text-[#64ffda] tracking-widest'>Toolbox</a></NavLink>
          <button onClick={toggleDarkMode} className='cursor-pointer flex items-center'>
            {darkMode ? <Sun size={22}/> : <Moon className='hover:text-[#64ffda] tracking-widest' size={22}/>}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <button>
            {/* <X /> */}
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  )
}