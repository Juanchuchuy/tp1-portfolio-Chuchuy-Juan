import React from 'react'
import './About.css'
import {ArrowDown} from 'lucide-react'

const About = () => {
  return (
    <div className='about-container'>
        <div>
            <ArrowDown color='#9ee3f0' size={65}/><p className='about-title'>About Me </p>
        </div>
        <p className='about-description'>Hi, I'm Juan, a Software developer. I've been a technology enthusiast since I was a kid, and today I specialize in SaaS with a focus on UX/UI design.<br />Im currently living in Tucumán Argentina studying at Universidad Tecnologica Nacional - FRT </p>
    </div>
  )
}

export default About