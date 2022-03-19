// globalStyles.ts
import { createGlobalStyle } from "styled-components";

interface Props {
  theme: {
    body: string;
  };
}

const GlobalStyle = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Inter', Helvetica, Sans-Serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;
