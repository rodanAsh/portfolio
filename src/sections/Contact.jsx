import React, { useRef, useState } from 'react'
import terminal from '../../public/assets/terminal.png'
import arrowUp from '../../public/assets/arrow-up.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [isLoading,setIsLoading] = useState(false)
    const [form,setForm] = useState({
        name: '',
        email:'',
        message: ''
    })
    const handleChange = ({target:{name,value}}) => {
      setForm({...form, [name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      setIsLoading(true)
      try{
        emailjs.send(
          'service_0kb6hif',
          'template_abzchl3',
          {
            from_name: form.name,
            to_name: 'Aakash',
            from_email: form.email,
            to_email: 'aakashash2002@gmail.com',
            message: form.message
          },
          'vuZyj9qUoBeyEnwXW')

        setIsLoading(false)
        alert('your message has been sent!')
      }catch(e){
        setIsLoading(false)
        console.log(e)
        alert('Something went wrong!')
      }

      setForm({
        name:'',
        email:'',
        message:''
      })

      
    }
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src={terminal} alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="sm:text-lg text-sm text-white-600 sm:mt-3 mt-2">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="sm:mt-12 mt-8 flex flex-col space-y-7">
            <label className="sm:space-y-3 space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="sm:space-y-3 space-y-2">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="sm:space-y-3 space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}

              <img src={arrowUp} alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Contact