import React from 'react'
import './Header.css'

const Header = ({ navItems, lang, onToggleLang }) => {
  return (
    <nav>
      <ul className='menu-list'>
        {navItems.map((item) => (
          <li className='menu-item' key={item}>
            <strong>{item}</strong><hr />
          </li>
        ))}
      </ul>

      <button
        type='button'
        className={`lang-switch ${lang === 'es' ? 'lang-switch--es' : ''}`}
        onClick={onToggleLang}
        aria-label='Cambiar idioma'
        aria-pressed={lang === 'es'}
      >
        <span className='lang-switch-option'>En</span>
        <span className='lang-switch-option'>Es</span>
        <span className='lang-switch-thumb'></span>
      </button>
    </nav>
  )
}

export default Header