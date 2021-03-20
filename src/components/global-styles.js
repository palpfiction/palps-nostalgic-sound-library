import "fontsource-crimson-pro";
import "fontsource-inter";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;  
    }

    :root {
        --black: hsl(0, 0%, 15%);
        --grey: hsl(0, 0%, 47%);
        --white: hsl(0, 0%, 99%);
        --primary: hsl(341, 100%, 31%);
        --serif: 'Crimson Pro', 'Times New Roman', Times, serif;
        --sans-serif: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html, body, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        margin: 0;
    }

    body {
        background-color: var(--white);
        color: var(--black);
        font-family: var(--serif) ;
        font-size: 20px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-transform: lowercase;

        @media screen and (min-width: 720px) {
            font-size: 24px;
        }
    }

    a {
        color: var(--black);
        text-decoration: unset;   // TODO: improve underlining 
     }

    a:visited {
        color: unset;
    }
`;

export default GlobalStyles;