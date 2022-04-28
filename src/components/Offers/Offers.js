import React from "react";
import Produto1 from "../../assets/produto01.png";
import Produto2 from "../../assets/produto02.png";
import Produto3 from "../../assets/produto03.png";
import Produto4 from "../../assets/produto04.png";
import Produto5 from "../../assets/produto05.png";
import Produto6 from "../../assets/produto06.png";
import {
  OffersSection,
  OffersTitle,
  CardsWrapper,
  Card,
  Button,
  Description,
} from "./style.js";

const Offers = () => {
  return (
    <OffersSection id="offers" className="scroll">
      <OffersTitle>Conheça nossas</OffersTitle>
      <span>ofertas</span>
      <CardsWrapper>
        <Card background={Produto1}>
          <Description>
            <span>Ajuga reptans</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>

        <Card background={Produto2}>
          <Description>
            <span>Cordyline fruticosa</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>

        <Card background={Produto3}>
          <Description>
            <span>Crassula ovata</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>

        <Card background={Produto4}>
          <Description>
            <span>Cyperus rotundus</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>
        <Card background={Produto5}>
          <Description>
            <span>Delairea odorata</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>
        <Card background={Produto6}>
          <Description>
            <span>Datura metel</span>
            <p>R$20,00</p>
            <Button>
              <a href="#">Comprar</a>
            </Button>
          </Description>
        </Card>
      </CardsWrapper>
    </OffersSection>
  );
};

export default Offers;
