import React from 'react'
import './header.css'
import Cta from './cta';
import profile from '../../assets/Bashir.png'
import Headersocial from './headersocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bashir Dauda</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Headersocial />
        <div className="me">
          <img src={profile} alt="My Profile Pix" />
        </div>

        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  );
}

export default Header;