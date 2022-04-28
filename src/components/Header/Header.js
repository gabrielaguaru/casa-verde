import React, { useState, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { Nav, MenuButton } from "./style.js";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <Nav id="main">
        <img src={Logo} alt="Logo casa verde" />
        <MenuButton
          className={isActive ? "active" : null}
          aria-controls="menu"
          onClick={() => setIsActive(!isActive)}
        ></MenuButton>
        <ul className={isActive ? "active" : null} id="menu">
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#howto">Como fazer</a>
          </li>
          <li>
            <a href="#offers">Ofertas</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabrielasouza-/"
              target="_blank"
            >
              Dev
            </a>
          </li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;
