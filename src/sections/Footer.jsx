import React from 'react'
import github from '../../public/assets/github.svg'
import twitter from '../../public/assets/twitter.svg'
import linkedin from '../../public/assets/instagram.svg'

const Footer = () => {
    const year = new Date()
  return (
    <section className='c-space pt-7 pb-3 bordet-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className="social-icon">
                <img src={github} alt="github" className='w-1/2 h-1/2' />
            </div>
            <div className="social-icon">
                <img src={twitter} alt="twitter" className='w-1/2 h-1/2' />
            </div>
            <div className="social-icon">
                <img src={linkedin} alt="linkedin" className='w-1/2 h-1/2' />
            </div>
        </div>

        <p className='text-white-500'>&copy; {year.getFullYear()} Aakash. All rights reserved</p>
        
    </section>
  )
}

export default Footer