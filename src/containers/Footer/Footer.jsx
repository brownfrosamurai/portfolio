import React, { useState } from 'react'

import { client } from '../../client';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrappers';

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(true)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className='head-text'>Grab a coffee & Chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:femimeduna@gmail.com' className='p-text'>
            femimeduna@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (587) 572-3629' className='p-text'>
            +1 (587) 572-3629
          </a>
        </div>
      </div>
      {
        !isFormSubmitted ? //Conditional rendering of form submission
        // FORM AREA 
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input
                type='text'
                className='p-text'
                placeholder='Your name'
                name='name'
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className='app__flex'>
              <input
                type='email'
                className='p-text'
                placeholder='Your email'
                name='email'
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your message'
                name='message'
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button
              type='button'
              className='p-text'
              onClick={handleSubmit}
            >
              {loading ? 'Sending' : 'Send Message'}
            </button>
          </div>
          : <div>
            {/* success message  */}
            <h3 className='head-text'>Thank you for getting in touch</h3> 
          </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')