import React, { useState } from 'react'
import menu from '../../public/assets/menu.svg'
import close from '../../public/assets/close.svg'
import { navLinks } from '../constants/index.js'


const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {
        navLinks.map(({id,name,href}) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>{name}</a>
        </li>
      ))}
    </ul>
  )   
}

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggleMenu= () => {
    setIsOpen(prev => !prev)
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                    Aakash <span className='text-green-400 opacity-75'>.</span>
                </a>

                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'>
                  <img src={isOpen ? close : menu} alt="menu" className='w-6 h-6' />
                </button>

                <nav className='sm:flex hidden'>
                  <NavItems />
                </nav>
            </div>
        </div>
        <div className='nav-sidebar'>
          {
            isOpen && (
              <nav className='py-5'>
                <NavItems />
              </nav>
            )
          }
        </div>   
    </header>
  )
}

export default Navbar