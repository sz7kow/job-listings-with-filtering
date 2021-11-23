import styled from "styled-components";

import { COLORS } from "constants/colors";
import { FONTS } from "constants/fonts";

export const Badge = styled.div`
  font: 700 11px/14px ${FONTS.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px 4px;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  color: ${COLORS.WHITE};
  border-radius: 32px;
  background-color: ${({ isDark }) => (isDark ? COLORS.OUTER_SPACE : COLORS.CADET_BLUE)};

  & + & {
    margin-left: 8px;
  }
`;
