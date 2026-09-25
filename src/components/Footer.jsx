import React from 'react'
import './Footer.css'

const Footer = ({ navItems, socialLinks, email, tagline, sectionsTitle, contactTitle, rights }) => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <h3 className='footer-name'>Juan Chuchuy</h3>
          <p className='footer-tagline'>{tagline}</p>
        </div>

        <div className='footer-column'>
          <h4 className='footer-heading'>{sectionsTitle}</h4>
          <ul className='footer-links'>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-column'>
          <h4 className='footer-heading'>{contactTitle}</h4>
          <a className='footer-email' href={`mailto:${email}`}>{email}</a>
          <ul className='footer-social'>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                  <i className={social.icon}></i>
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© {year} Juan Chuchuy. {rights}</p>
      </div>
    </footer>
  )
}

export default Footer