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
       text-decoration: unset;
       color: var(--primary);
       transition: all 0.2s ease-in-out;

    }

    a:hover, a:visited:hover {
        color: var(--black);
    }

    a:visited {
        color: var(--primary);
    }

    img {
        border-radius: 6px;
    }

   /* a:hover {
        text-decoration: unset;
        background: linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(158, 0, 49, .3) 30%);
        display: inline;
    }*/

    .underline {
        background: linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(158, 0, 49, .3) 30%);
        display: inline;
    }

    .end-mark {
        color: var(--primary);
    }
`;

export default GlobalStyles;
