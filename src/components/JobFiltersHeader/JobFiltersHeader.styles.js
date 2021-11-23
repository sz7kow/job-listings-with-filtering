import styled from "styled-components";

import { BREAKPOINTS } from "constants/breakpoints";
import { COLORS } from "constants/colors";
import { FONTS } from "constants/fonts";

export const JobFiltersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  margin-top: -36px;
  padding: 20px 24px 20px 19px;
  background-color: ${COLORS.WHITE};
  border-radius: 5px;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
`;

export const ClearButton = styled.button`
  font: 700 13px/24px ${FONTS.PRIMARY};
  letter-spacing: -0.1px;
  color: ${COLORS.ROMAN_SILVER};
  border: none;
  background: none;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${COLORS.CADET_BLUE};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Spacer = styled.div`
  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin-bottom: 36px;
  }
`;
