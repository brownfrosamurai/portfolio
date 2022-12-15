import React from 'react';

import { About, Footer, Header, Projects, Skills } from './containers';
import { Navbar } from './components'

import './App.scss'
import Particle from './components/Particles/Particles';
const App = () => {
  return (
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>

  )
}

export default App;