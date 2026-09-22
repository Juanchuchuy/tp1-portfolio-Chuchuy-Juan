import React from 'react'
import './About.css'
import {ArrowDown} from 'lucide-react'

const About = () => {
  return (
    <div className='about-container'>
        <div>
            <p className='about-title'>About Me </p><ArrowDown color='#9ee3f0' size={65}/>
        </div>
        <p className='about-description'>Hi, I'm Juan, a student at Universidad Tecnológica Nacional in Tucumán. I've been a technology enthusiast since I was a kid, and today I specialize in SaaS with a focus on UX/UI design.<br /></p>
    </div>
  )
}

export default About