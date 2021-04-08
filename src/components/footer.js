import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  font-family: var(--sans-serif);
  font-size: 0.7em;
  color: var(--grey);
  text-align: center;
  flex-shrink: 0;
  padding: 1em 0;
`;

const Footer = () => {
  return (
    <Container>
      <p>
        written with ♥ by <a href="twitter.com/nowherepalp">palp</a>
      </p>
      <p>
        source code available on{" "}
        <a href="https://github.com/palpfiction/palps-nostalgic-sound-library">
          github
        </a>
      </p>
    </Container>
  );
};

export default Footer;
