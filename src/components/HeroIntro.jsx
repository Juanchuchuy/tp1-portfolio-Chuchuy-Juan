import React from 'react'
import './HeroIntro.css'

import { useTypewriter } from "typify-react";
import { ChevronRight, Mail } from 'lucide-react'

import profileImage from '../assets/profile-image.jpg'

const HeroIntro = ({ careers }) => {

  const [career] = useTypewriter({
    words: careers,
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
        <div className='aside'>
          <div className='profile-img'>
            <img src={profileImage} alt="Juan Chuchuy self image" />
          </div>
          <ul className='contact-list'>
            <i className="devicon-github-original"><strong>Github</strong></i>
            <i className="devicon-linkedin-plain"><strong>Linkedin</strong></i>
            <i className="devicon-facebook-plain"><strong>Facebook</strong></i>
            <i className="devicon-markdown-original"><strong>Mail</strong></i>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroIntro