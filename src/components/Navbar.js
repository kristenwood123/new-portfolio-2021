import React, { useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <nav>
      <div className="navbar">
        <div className="name">Kristen Woodward</div>
        <div className="burger-wrapper">
          <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="menu-btn__burger">
            </div>
            </div>
        </div>
      </div>
        <div className={`nav-links ${menuOpen ? '': 'open'}`} onClick={() => setMenuOpen(!menuOpen)}>
           <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Resume</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar

