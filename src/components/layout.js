import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyles from "./global-styles";

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
