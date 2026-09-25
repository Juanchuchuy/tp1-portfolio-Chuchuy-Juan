import React from 'react'
import './About.css'
import { ArrowDown } from 'lucide-react'

const About = ({ title, paragraphs, buttonText }) => {
  return (
    <div className='about-container'>
      <div>
        <p className='about-title'>{title} </p><ArrowDown color='#9ee3f0' size={65} />
      </div>
      <article className="description">
        {paragraphs.map((paragraph, index) => (
          <p className='about-description' key={index}>
            {paragraph}
          </p>
        ))}
      </article>

      <button className='contact-button'>{buttonText}</button>
    </div>
  )
}

export default About