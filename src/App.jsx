import React from 'react'
import { lazy, Suspense } from 'react'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto text-slate-100'>
      <section className='relative min-h-screen'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <div className='absolute inset-0 -z-50 max-h-screen background-gradient'></div>
      </section>
      
    </main>
  )
}

export default App
