import React, { useState } from 'react'


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
    </nav>
  )
}

export default Navbar
