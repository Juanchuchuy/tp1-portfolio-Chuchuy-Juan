import React from 'react'
import './About.css'
import {ArrowDown} from 'lucide-react'

const About = () => {
  return (
    <div className='about-container'>
        <div>
            <p className='about-title'>About Me </p><ArrowDown color='#9ee3f0' size={65}/>
        </div>
        <article className="description">
          <p className='about-description'>
              I'm Juan a Software Developer and UI/UX Designer who builds
              complete applications with design at the core. Based in Tucumán,
              Argentina, I'm finishing my degree at UTN-FRT while working as a
              freelance developer.
          </p>

          <p className='about-description'>
              What sets me apart is that I don't just write code I design the
              experience before building it. Clients get a complete solution,
              not just a set of features.
          </p>

          <p className='about-description'>
              I work mainly with React, Node.js and Astro, and take apps to
              mobile with Capacitor. On the design side, Figma is home.
          </p>

          <p className='about-description'>
              My process starts by understanding the problem before touching
              code: user flows first, then design, then development. I work in
              short cycles with constant feedback, so clients see real progress
              from week one.
          </p>

          <p className='about-description'>
              Available for freelance projects and collaborations.
          </p>  
        </article>  

        <button className='contact-button'>Lets talk</button>

    </div>
  )
}

export default About