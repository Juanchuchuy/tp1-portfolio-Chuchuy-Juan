import React from 'react'
import './HeroIntro.css'
import About from './About';
import Skills from './Skills';

import { useTypewriter } from "typify-react";
import {ChevronRight} from 'lucide-react'

import profileImage from '../assets/profile-image.jpg'

const HeroIntro = () => {

   const [career] = useTypewriter({
    words: ["Software Developer", "UX/UI Designer", "Student From UTN"],
    loop: 0, 
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });



  return (
    <div className='hero-container'>
      <div className='profile'>
            <div className='profile-title'>
              <h2>Juan</h2>
              <h2>Chuchuy</h2>

              <div className='profile-career'><ChevronRight className='career-arrow' /> {career} <p className='cursor'>_</p></div>
            </div>
            <div className='profile-img'>
                <img src={profileImage} alt="Juan Chuchuy self image" />
            </div>
      </div>
      <Skills />
      <About />
    </div>
  )
}

export default HeroIntro