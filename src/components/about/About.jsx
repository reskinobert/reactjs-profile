import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import {HiLightBulb} from 'react-icons/hi'
import {TbBrandFlightradar24} from 'react-icons/tb'
import {TiGroup} from 'react-icons/ti'
import {FaUserEdit} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__cards">
            <article className='about__card'>
              <HiLightBulb className='about__icon'/>
              <h5>Problem Solver</h5>
            </article>

            <article className='about__card'>
              <TbBrandFlightradar24 className='about__icon'/>
              <h5>Visionary Planner</h5>
            </article>

            <article className='about__card'>
              <TiGroup className='about__icon'/>
              <h5>Honest & Loyal</h5>
            </article>

            <article className='about__card'>
              <FaUserEdit className='about__icon'/>
              <h5>Adaptive</h5>
            </article>
          </div>

          
        </div>

        <div className="about__content">
          <p>
            I'm a dedicated problem solver with a strong sense of loyalty and vision for success, 
            I'm flexible and quickly to adapt with the changing of circumstances, 
            I approach challenges with creativity and persistence,
            I'm a hard worker but also really care about life balance. 
            Honesty, integrity and sense of responsibility is must for me. 
            With a passion for continuous learning and growth, I am excited to bring my
            skills and experience to contribute to the success of your team.
          </p>

          <a href="#contact" className='btn btn-primary'>Ask Me</a>
        </div>
      </div>
    </section>
  )
}

export default About