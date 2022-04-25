import styled from "styled-components";

export const HowToSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  background: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  margin: auto;
  position: relative;
  bottom: 1rem;

  img {
    width: 52%;
  }

  @media(max-width: 1345px) {
    width: 100%;
    padding-bottom: 1rem;
  }

  @media(max-width: 1240px) {
    width: 70%;
    padding-bottom: 1rem;

    img {
      width: 100%;
      display: block;
      margin: auto;
    }
  
    @media(max-width: 500px) {
      width: 95%;
    }
`;

export const Description = styled.div`
  padding: 3rem 0 0 2rem;

  

  p {
    font-size: 1.5rem;
    margin: 0.3rem 0 0.7rem;
  }

  span {
    font-family: "Elsie Swash Caps", cursive;
    font-size: 3rem;
    color: #202020;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    font-size: 1.5rem;
  }

  ul li::before {
    content: "●";
    display: inline-block;
    font-size: 8rem;
    line-height: 3rem;
    position: relative;
    top: 1.7rem;
    color: #e1b33f;
    margin-right: 0.4rem;
  }

  @media(max-width: 1570px) {
    padding: 2rem 0 0 2rem;

    ul li::before {
      font-size: 3rem;
      top: .45rem;
    }

    ul li {
      padding: .5rem 0;
    }
    span {
      font-size: 2.5rem;
    }
  }

  @media(max-width: 600px) {
    margin: auto;
    padding: 1rem 0 0;

    span {
      font-size: 1.95rem;
    }

    ul li {
      font-size: 1.1rem;
    }

     ul li::before {
    font-size: 2rem;
    top: .2rem;
  }
  }

 

`;
