import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  font-family: var(--sans-serif);
  font-size: 0.7em;
  color: var(--grey);
  text-align: center;
  flex-shrink: 0;
  padding: 1em 0;
  a {
    color: var(--grey); // TODO: improve
  }
`;

const Footer = () => {
  return (
    <Container>
      written with love by <a href="twitter.com/nowherepalp">palp</a>
    </Container>
  );
};

export default Footer;
