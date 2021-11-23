import styled from "styled-components";

import { BREAKPOINTS } from "constants/breakpoints";

export const Jobs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 56px;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    grid-row-gap: 40px;
  }
`;
