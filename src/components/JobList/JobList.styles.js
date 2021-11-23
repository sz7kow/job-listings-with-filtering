import styled from "styled-components";

import { BREAKPOINTS } from "constants/breakpoints";

export const JobList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  max-width: 100%;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    grid-row-gap: 24px;
  }
`;
