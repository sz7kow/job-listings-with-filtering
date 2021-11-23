import styled from "styled-components";

import { FONTS } from "constants/fonts";
import { COLORS } from "constants/colors";

export const Tag = styled.div`
  font: 700 13px/24px ${FONTS.PRIMARY};
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding: 4px 8px;
  letter-spacing: -0.1px;
  color: ${COLORS.CADET_BLUE};
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${COLORS.CADET_BLUE};
    opacity: 0.1;
  }
`;
