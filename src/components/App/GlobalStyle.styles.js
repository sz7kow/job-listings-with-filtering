import { createGlobalStyle } from "styled-components";

import { COLORS } from "constants/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #react-root {
    height: 100%;
  }

  body {
    background-color: ${COLORS.ALICE_BLUE};
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
