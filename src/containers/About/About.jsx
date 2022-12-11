import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrappers';

import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState({})

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then(data => setAbouts(data))
  }, [])

  const handleModal = (item) => {

    const { title, description, imgUrl } = { ...item }
    const modalData = {
      title, imgUrl, description
    }
    console.log('modal data: ', modalData)
    setToggle(true)
    setModal(modalData)
  }

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {
          !toggle ?
            abouts.map((about, index) => (
              <motion.div
                onClick={() => { handleModal(about) }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, type: 'tween' }}
                className='app__profile-item'
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            )) :
            <motion.div
              className='app__profile-item-modal'
              whileInView={{ y: [300, 0], opacity:[0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <HiX onClick={() => setToggle(false)} />

              <img src={urlFor(modal.imgUrl)} alt={modal.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{modal.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{modal.description}</p>
            </motion.div>
        }


      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')