import React from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroIntro from './components/HeroIntro'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
const App = () => {
  return (
    <div>
      <Header />
      <HeroIntro />
      <div className='introduction-container'>
        <About />
        <Skills />
      </div>
      <Projects />
      <Footer />
    </div>

  )
}

export default App