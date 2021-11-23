import { BREAKPOINTS } from "constants/breakpoints";
import styled from "styled-components";

export const JobList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  max-width: 100%;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    grid-row-gap: 24px;
  }
`;
