import styled from "styled-components";
import Produto1 from "../../assets/produto01.svg";

export const OffersSection = styled.section`
  text-align: center;

  span {
    font-family: "Elsie Swash Caps", cursive;
    font-size: 5rem;
    color: #202020;
  }

  p {
    color: gray;
    font-weight: bold;
  }
`;

export const OffersTitle = styled.p`
  margin: 2rem 0 0.5rem;
  font-size: 1.5rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  
`;

export const Card = styled.article`
  width: 32%;
  height: 200px;
  background-color: #fff !important;
  background: url(${(props) => props.background}) no-repeat;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  margin-bottom: 3rem;
  text-align: initial;
  position: relative;
  transition: .3s;

  span {
    font-size: 2rem;
    display: block;

    @media(max-width: 1570px) {
      width: 90%;  
    }
    
  }

  &:hover {
     transform: scale(1.08);
     
  }

  @media(max-width: 1570px) {
    width: 40%    
  }

  @media(max-width: 1240px) {
    width: 80%;
    margin: 1rem auto; 
  }

  @media(max-width: 520px) {
    width: 100%;

    span {
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  width: 50%;
  position: absolute;
  right: -1.1rem;
  padding-top: 1.5rem;

  a {
    text-decoration: none;
    color: #ffcb47;
    transition: 0.3s;
  }

  a::after {
    content: "➜";
    margin-left: 0.5rem;
  }

  a:hover {
    color: #e1b33f;
  }

  @media(max-width: 520px) {
    height: 100%;
    width: 100%;
    padding-left: 50px;
    text-align: right;
    right: 0;
    margin-right: 1rem;
  }
  @media(max-width: 475px) {
    background-color: rgba(255,255,255,.4);
  }
`;

export const Button = styled.button`
    border: none;
    padding: 0;
    background-color: transparent;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: none;
    text-shadow: 0px 1px 3px rgba(225,179,63,0.62);
    `;
