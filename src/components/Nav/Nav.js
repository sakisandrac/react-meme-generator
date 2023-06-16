import React from 'react';
import logo from './troll-face.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav className="header">
            <img className="logo" src={logo} />
            <h2>Meme Generator</h2>
      </nav>
    </div>
  )
}

export default Nav;