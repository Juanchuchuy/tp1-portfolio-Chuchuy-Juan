import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <nav>
            <ul className='menu-list'>
                <li className='menu-item'>Home</li>
                <li className='menu-item'>Projects</li>
                <li className='menu-item'>About Me</li>
                <li className='menu-item'>Contact</li>
            </ul>
        </nav>   
    </div>
  )
}

export default Header