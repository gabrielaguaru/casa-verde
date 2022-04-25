import styled from "styled-components";

export const NewsletterSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media(max-width: 1240px) {
    margin-bottom: 10rem;
    width: 100%;
  }
`;

export const Description = styled.div`
  margin-top: 5rem;
  width: 45%;

  span {
    font-family: "Elsie Swash Caps", cursive;
    font-size: 5rem;
    color: #202020;
  }

  h1 {
    font-weight: 100;
    font-size: 22px;
  }

  p {
    text-align: justify;
    line-height: 26px;
    width: 80%;
  }

  @media(max-width: 1240px) {
    width: 100%;
  }

  @media(max-width: 500px) {
    span {
      font-size: 3rem;
    }

    p {
      width: 100%;
    }
  }
`;



export const Images = styled.div`
width: 55%;

@media(max-width: 1240px) {
  width: 0; 

  img:first-child {
    display: none;
  }
`;

export const VectorImage = styled.img`
position: absolute;
right: 0;
top: 0;
z-index: -1;
width: 51%;
`;
