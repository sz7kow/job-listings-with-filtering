import React from "react";

import * as S from "components/App.styles";
import { GlobalStyle } from "components/GlobalStyle.styles";

const App = () => {
  return (
    <S.App>
      <GlobalStyle />
      <S.Header role="banner" />
      App
    </S.App>
  );
};

export { App };
