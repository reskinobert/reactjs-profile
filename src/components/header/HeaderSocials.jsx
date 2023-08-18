import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiAcademia} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/reski-nobert-3a892197/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/reskinobert" target="_blank"><FaGithub/></a>
        <a href="https://independent.academia.edu/ReskiNobert" target="_blank"><SiAcademia/></a>
    </div>
  )
}

export default HeaderSocials