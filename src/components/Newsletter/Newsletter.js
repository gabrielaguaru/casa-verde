import React from "react";
import Form from "../Form/Form";
import Plant from "../../assets/plant.png";
import Vector from "../../assets/vector.svg";
import { NewsletterSection, Description, Images, VectorImage } from "./style.js";

const Newsletter = () => {
  return (
    <NewsletterSection id="main">
      <Description>
        <h1>Sua casa com as</h1>
        <span>melhores plantas</span>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <Form />
      </Description>
      <Images>
        <img src={Plant} alt="Imagem ilustrativa de uma planta" className="plant" />
        <VectorImage src={Vector} alt="Vector" />
      </Images>
    </NewsletterSection>
  );
};

export default Newsletter;
