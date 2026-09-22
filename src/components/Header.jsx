import React from 'react'
import './Header.css'
const Header = () => {
  return (
        <nav>
            <ul className='menu-list'>
                <li className='menu-item'><strong>Home</strong><hr /> </li>
                <li className='menu-item'><strong>Projects</strong><hr /> </li>
                <li className='menu-item'><strong>About Me</strong><hr /> </li>
                <li className='menu-item'><strong>Contact</strong><hr /> </li>
            </ul>
        </nav>   
  )
}

export default Header