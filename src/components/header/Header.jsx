import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 class ="greeting">Hello I'm</h5>
        <h1>Reski Nobert</h1>
        <CTA />
        <div class="me_detail">
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
        
        <div class="line"></div>
        
      </div>
    </header>
  )
}

export default Header
