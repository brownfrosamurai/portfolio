import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const socials = [
  { name: <BsGithub />, url: 'https://github.com/brownfrosamurai' },
  { name: <BsLinkedin />, url: 'https://www.linkedin.com/in/meduna-femi/' },
]

const SocialMedia = () => {
  return (
    <div className='app__social'>
      {
        socials.map((social, index) => (
          <div key={index}>
            <a
              href={social.url}
              target='_blank'
              rel='author noreferrer'
            >
              {social.name}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default SocialMedia;