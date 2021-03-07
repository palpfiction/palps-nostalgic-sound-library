import "fontsource-crimson-pro";

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
    }

    body {
        background-color: var(--white);
        color: var(--black);
        font-family: 'Crimson Pro', 'Times New Roman', Times, serif;
        font-size: 20px;
        height: 100%;
        width: 100%;
        line-height: 1;
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
        font-style: italic;
        text-decoration: underline var(--primary);    
     }

    a:visited {
        color: unset;
    }
`;

export default GlobalStyles;
