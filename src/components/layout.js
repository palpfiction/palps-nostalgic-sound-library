import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyles from "./global-styles";
import Footer from "./footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  padding: 0 1em;
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
