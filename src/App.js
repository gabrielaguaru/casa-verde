import React from "react";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter.js";
import HowTo from "./components/HowTo/HowTo";
import Offers from "./components/Offers/Offers";
import { createGlobalStyle } from "styled-components";
import Background from "./assets/line.png";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
        background-color: #fafafa;
        margin: 0 15%;
        color: #a9a9a9;
        font-family: 'Montserrat', sans-serif;
        background: url(${Background});
        z-index: -100;

        @media(max-width: 622px) {
          margin: 0 5%;
        }
    }
    `;

const App = () => {
  const links = document.querySelectorAll("li a[href^='#']");
  console.log(links, "teset");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href)
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Newsletter />
        <HowTo />
        <Offers />
      </main>
    </>
  );
};

export default App;
