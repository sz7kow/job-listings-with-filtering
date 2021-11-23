import styled from "styled-components";

import bgHeaderDesktop from "assets/svgs/bg-header-desktop.svg";
import bgHeaderMobile from "assets/svgs/bg-header-mobile.svg";
import { BREAKPOINTS } from "constants/breakpoints";
import { COLORS } from "constants/colors";

export const App = styled.div``;

export const Header = styled.header`
  height: 156px;
  background: ${COLORS.CADET_BLUE} url(${bgHeaderMobile}) repeat-x left center;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    background-image: url(${bgHeaderDesktop});
  }
`;

export const Main = styled.main`
  padding: 0 24px 34px;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    padding-bottom: 120px;
  }
`;
