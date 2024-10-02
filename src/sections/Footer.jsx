import React from 'react'
import github from '../../public/assets/github.svg'
import linkedin from '../../public/assets/linkedin.svg'
import { navLinks } from '../constants'

const Footer = () => {
    const year = new Date()
  return (
    <section className='text-slate-600'>
        <div className='container mx-auto mt-20 flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row'>
            <div className='name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start'>
                <span className='text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400'>
                    Aakash
                </span>
                <span className='hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline'>
                    /
                </span>
                   
                <p className='text-sm text-slate-300'>
                    &copy; {year.getFullYear()} Aakash
                </p>
            </div>
            <nav className='navigation'>
                <ul className='flex items-center gap-1'>
                    {
                        navLinks.map(({id,name,href},index) => (
                            <React.Fragment key={id}>
                                <li>
                                    <a href={href} className='group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400'>
                                        {name}
                                    </a>
                                </li>
                                {
                                    index < navLinks.length -1 && (
                                        <span className='text-4xl font-thin leading-[0] text-slate-400'>
                                            /
                                        </span>
                                    )
                                }
                            </React.Fragment>
                        ))
                    }
                </ul>
            </nav>
            <div className='socials inline-flex justify-center sm:justify-end'>
                <a 
                    href="https://github.com/rodanAsh"
                    target='_blank'
                    className='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400'
                >
                    <img src={github} alt="github" className='w-6 h-6' />
                </a>
                <a 
                    href="https://www.linkedin.com/in/aakashash/"
                    target='_blank'
                    className='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400'
                >
                    <img src={linkedin} alt="github" className='w-6 h-6' />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer