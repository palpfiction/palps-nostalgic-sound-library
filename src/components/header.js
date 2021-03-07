import React from "react";
import styled from "styled-components";
import "fontsource-inter/900.css";

const HeaderStyle = styled.h1`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  letter-spacing: -0.05em;
  font-size: 1em;
  margin: 0 auto;
  padding: 1em 1em 0.5em;

  @media screen and (min-width: 720px) {
    font-size: 2em;
  }
`;

const Header = () => {
  return <HeaderStyle>palp's nostalgic sound library</HeaderStyle>;
};

export default Header;
