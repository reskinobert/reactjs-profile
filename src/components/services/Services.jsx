import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import CV from '../../assets/cv.pdf'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>More About Me</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>What I'have Made</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I wrote several paper for the report of my project exercises in college and
                I uploaded it on <a href="https://independent.academia.edu/ReskiNobert">my Academia account</a>.
                
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I take some courses in Coding Studio, Udemy and Coursera to learn about web development,
                networking and cyber security. I've included all my certificates on 
                <a href={CV} download> my CV</a>.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I did video editing like andding text,
                combine footage and some simple effect. This is the two examples:
                <a href="https://www.youtube.com/watch?v=hzfmCPUAwzI"> first</a>, <a href="https://www.youtube.com/watch?v=uZQBllo6rWU">second</a>
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I did grapich design to make poster or social media post. The example is 
                <a href=" https://www.instagram.com/g.i_travel99_/related_profiles/"> here</a>.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>My Work Experiences</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                <strong>Web Programmer - PT Sinar Cemerlang alamindo </strong> <br />
                ( May 2023 - July 2023 )<br/>
                Developed company profile and company's product website <a href="https://www.scalamindo.com/">
                scalamindo.com</a> and <a href="https://maxdoor.co.id/"> maxdoor.co.id</a>.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                <strong>Production Staff - Ergoo </strong> <br />
                ( August 2020 - August 2022 )<br/>
                Did all the production process. It was done by turns with the other employees.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                <strong>Intern - AIRNAV Indonesia</strong> <br />
                ( July 2017 )<br/>
                Joined the employee to maintain all the facilities and  ensure it was Working well.
                It was including electrical instruments checking, temperature checking for some facilities and
                instrument facilities checking.
              </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>About My Shortcomings</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I don't have enough work experiences  about IT / web development 
                but I've  learn from many resources and do some project for training.
                I am also faster to learn about new things.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I can't ride a motorcycle or a car and it's maybe a problem for some company
                or some jobdesk but I can ride a bicycle and I have lot of stamina to
                ride it for long distance plus I also can use public trosportation.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services