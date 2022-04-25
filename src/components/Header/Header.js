import React from 'react';
import Logo from '../../assets/logo.svg';
import {Nav} from "./style.js"

const Header = () => {
  return (
    <header>
        <Nav>
        <img src={Logo} alt="Logo casa verde" />
        <ul>
            <li><a href="#main"> Home</a></li>
            <li><a href="#howto"> Como fazer</a></li>
            <li><a href="#offers"> Ofertas</a></li>
            <li><a href="https://www.linkedin.com/in/gabrielasouza-/" target="_blank"> Dev</a></li>
        </ul>
        </Nav>
    </header>
  )
}

export default Header