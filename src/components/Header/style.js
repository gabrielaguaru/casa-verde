import styled from "styled-components";

export const Nav = styled.nav`
   {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-top: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #202020;
  }

  ul li {
    list-style: none;
    display: inline-block;
    padding: 8px;
  }

  ul li:not(:first-child)::before {
    content: "/";
    margin-right: 16px;
  }

  ul li a {
      text-decoration: none;
      color: inherit;
      transition: .3s;
  }

  ul li a:hover {
      color: #78a25f;
  }

  img {
    width: 136px;
  }

  @media (max-width: 800px) {
    ul li {
      padding: 0 5px;
    }

    ul li:not(:first-child)::before {
      content: "";
      margin-right: 0px;
    }
  }

  @media (max-width: 622px) {
    ul {
      position: absolute;
      top: 0;
      right: 1px;
      padding: 65px 5px 5px;
      background-color: #ffcb47;
      box-shadow: 0 4px 4px rgba(0,0,0,.1);
      display: none;
    }

    ul.active {
      display: block;
    }

    ul li {
      display: block;
      padding: 8px;
    }

    ul li:not(:first-child)::before {
      content: "";
      margin-right: 0;
      
    }
  }
`;

export const MenuButton = styled.button`
        background-color: #ffcb47;
        border: none;
        border-top: 3px #202020 solid;
        padding: .8rem 1rem;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        z-index: 1000;
        display: none;

  &:before {
    content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: #202020;
        transition: .3s transform;
  }

  &:after {
    content: '';
        display: block;
        position: absolute;
        bottom: 50%;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: #202020;
        transition: .3s transform;
  }

  &.active::after {
    transform: rotate(45deg);
  }

  &.active::before {
    transform: rotate(135deg);
    top: 40%;
  }

  &.active {
    border-top: none;
  }

  @media(max-width: 622px) {
    display: block;
  }
`;
