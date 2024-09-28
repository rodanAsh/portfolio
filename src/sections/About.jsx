import React, { useState } from 'react'
import grid1 from '../../public/assets/grid1.png'
import grid2 from '../../public/assets/grid2.png'
import grid3 from '../../public/assets/grid3.png'
import grid4 from '../../public/assets/grid4.png'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import tick from '../../public/assets/tick.svg'
import copy from '../../public/assets/copy.svg'

const About = () => {
  const [hasCopied,setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('aakashash2002@gmail.com')

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    },2000)
  }
  return (
    <section className='c-space my-20' id='about'>
      <p className='head-text mb-10'>About Me</p>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
          <div className='col-span-1 xl:row-span-3'>
            <div className="grid-container">
              <img src={grid1} alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>Hi, I'm Aakash </p>
                <p className='grid-subtext'>Web Development Enthusiasist with keen interest to develop swashbuckling user interfaces using Reactjs library.</p>
              </div>
            </div>
          </div>

          <div className='col-span-1 xl:row-span-3'>
            <div className="grid-container">
              <img src={grid2} alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>I specialize in Javascript/Typescript with a focus in react ecosystem.</p>
              </div>
            </div>
          </div>

          <div className='col-span-1 xl:row-span-4'>
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor= 'rgba(0,0,0,0)'
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{
                    lat: 11.744699,lng: 79.768021,
                    text: "I'm here!",
                    color: 'white',
                    size: 30
                  }]}
                 />
              </div>
              <div>
                <p className='grid-headtext'>I work remotely across most timezones.</p>
                <p className='grid-subtext'>I'm based in India, with remote work available.</p>
                <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10" /></a>  
              </div>
            </div>
          </div>

          <div className='xl:col-span-2 xl:row-span-3'>
            <div className="grid-container">
              <img src={grid3} alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>My Passion for Coding</p>
                <p className='grid-subtext'>I love solving problems and building things through code. Coding is'nt my profession - it is my passion.</p>
              </div>
            </div>
          </div>

          <div className='xl:col-span-1 xl:row-span-2'>
            <div className="grid-container">
              <img src={grid4} alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
              <div className='space-y-2'>
                <p className='grid-subtext text-center'>Contact me</p>
                <div className='copy-container' onClick={handleCopy}>
                  <img src={hasCopied ? tick : copy } alt="copy" />
                  <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>aakashash2002@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About