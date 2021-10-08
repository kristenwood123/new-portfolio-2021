import React from 'react'
import { HeroSect } from '../styles/Hero.styles'

const Hero = () => {
  return (
    <HeroSect>
      <div className="hero__wrapper">
        <h3 className='hero__hello'>Hello, I'm</h3>
        <h1 className='hero__name'>Kristen Woodward</h1>
        <h2 className='hero__front'>Front-End Developer</h2>
      </div>
    </HeroSect>
  )
}

export default Hero
