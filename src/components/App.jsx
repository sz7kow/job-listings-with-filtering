import React from "react";

import * as S from "./App.styles";
import { GlobalStyle } from "components/GlobalStyle.styles";
import { JobsContainer } from "containers/JobsContainer";

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
