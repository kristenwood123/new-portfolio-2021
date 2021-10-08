import React from 'react'
import { SkillsSect } from '../styles/Skills.styles'

const Skills = () => {
  return (
    <SkillsSect>
      <h1 className='header__text'>Skills</h1>
        <hr className='big hr-skills'></hr>
        <article className="skills__container">

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-html-5-96.png" alt="HTML5"/>
          <p>HTML5</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-css3-96.png" alt="css"/>
          <p>CSS</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-javascript-96.png" alt="JS"/>
          <p>Javascript</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-react-native-96.png" alt="react"/>
          <p>React</p>
        </div>

         <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-redux-96.png" alt="redux"/>
          <p>Redux</p>
        </div>

         <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-bootstrap-96.png" alt="bootstrap"/>
          <p>Bootstrap</p>
        </div>

         <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-firebase-96.png" alt="firebase"/>
          <p>Firebase</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-npm-96.png" alt="Npm"/>
          <p>NPM</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-github-96.png" alt="Github"/>
          <p>Github</p>
        </div>

        <div className="skills__item" data-aos='fade-up'>
          <img src="./images/icons8-sass-96.png" alt="Sass"/>
          <p>Sass</p>
        </div>
      </article>
    </SkillsSect>
  )
}

export default Skills