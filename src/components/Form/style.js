import styled from "styled-components";
import backgroundImg from "../../assets/mail.svg";

const boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.08)"

export const FormWrapper = styled.form`
  @media(min-width: 1200px) {
    min-width: 430px;
  }
`

export const Input = styled.input`
  padding: 25px 15px 25px 45px;
  border: none;
  background: url(${backgroundImg}) no-repeat 7px;
  background-color: white;
  box-shadow: ${boxShadow};
  font-family: inherit;
  font-size: 1rem;
  transition: .3s;
  width: 40%;

  &:focus {
      outline: none;
      
  }

  &:autofill {
    padding: 25px 30px;
    filter: saturate(0);
  }
  &:-webkit-autofill {
    padding: 25px 30px;
    filter: saturate(0);
  }

  @media(max-width: 490px) {
    background: white;
    padding: 25px 5px;
    font-size: .9rem;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 25px 15px;
  color: #fff;
  background-color: #ffcb47;
  box-shadow: ${boxShadow};
  cursor: pointer;
  font-family: inherit;
  transition: .5s;
  letter-spacing: 1px;
  font-size: 1rem;

  &:hover {
    background-color: #e1b33f;
  }

  &:focus {
      outline: none;
  }

  @media(max-width: 490px) {
    letter-spacing: 0;
    padding: 25px 5px;
    font-size: .9rem;
  }
`;
