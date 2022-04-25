import React from "react";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import HowTo from "./components/HowTo/HowTo";
import Offers from "./components/Offers/Offers";
import { createGlobalStyle } from "styled-components";
import Background from "./assets/line.png"

const GlobalStyle = createGlobalStyle`
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
