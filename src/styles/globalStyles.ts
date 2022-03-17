// globalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Inter', Helvetica, Sans-Serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;
