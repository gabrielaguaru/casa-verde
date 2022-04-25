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
`;
