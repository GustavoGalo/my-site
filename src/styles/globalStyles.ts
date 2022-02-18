import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);
  }
`;
