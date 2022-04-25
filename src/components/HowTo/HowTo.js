import React from 'react';
import Plant from '../../assets/mid-plant.png';
import { HowToSection, Description } from './style.js';

const HowTo = () => {
  return (
    <HowToSection id="howto">
        <img src={Plant} alt="" />
        <Description>
            <p>Como conseguir</p>
            <span>minha planta</span>
            <ul>
                <li>Escolha suas plantas</li>
                <li>Faça seu pedido</li>
                <li>Aguarde na sua casa</li>
            </ul>
        </Description>
    </HowToSection>
  )
}

export default HowTo