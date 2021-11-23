import React from "react";

import { JobsContainer } from "containers/JobsContainer";
import * as S from "./App.styles";
import { GlobalStyle } from "./GlobalStyle.styles";

const App = () => {
  return (
    <S.App>
      <GlobalStyle />
      <S.Header role="banner" />
      <S.Main>
        <JobsContainer />
      </S.Main>
    </S.App>
  );
};

export { App };
