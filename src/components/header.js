import React from "react";
import styled from "styled-components";
import "fontsource-inter/900.css";
import { Link } from "gatsby";

const HeaderStyle = styled.h1`
  font-family: var(--sans-serif);
  font-weight: 900;
  letter-spacing: -0.05em;
  font-size: 1em;
  margin: 0 auto;
  padding: 1em 1em 0.5em;
  text-align: center;

  @media screen and (min-width: 720px) {
    font-size: 2em;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">palp's nostalgic sound library</Link>
    </HeaderStyle>
  );
};

export default Header;
