import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
// import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrappers';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const expquery = '*[_type == "experiences"]'
    const skillQuery = '*[_type == "skills"]'

    // FETCH EXPERIENCES 
    client.fetch(expquery).then(data => {
      setExperiences(data)
    })

    // FETCH SKILLS 
    client.fetch(skillQuery).then(data => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        {/* SKILLS SECTION  */}
        <motion.div
          className='app__skills-list'
        >
          {
            skills.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, }}
                className='app__skills-item app__flex'
                key={index}
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>

        {/* EXPERIENCES SECTION  */}
        <motion.div
          className='app__skills-exp'
        >
          {
            experiences.map((experience, index) => (
              <motion.div
                className='app__skills-exp-item'
                key={index}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'> {experience.year}</p>
                </div>

                <motion.div className='app__skills-exp-works'>
                  {
                    experience.works.map((work, index) => (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, }}
                        className='app__skills-exp-work'
                        key={index}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                    ))
                  }
                </motion.div>
              </motion.div>
            ))
          }

        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')
