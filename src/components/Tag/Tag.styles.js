import styled, { css } from "styled-components";

import { COLORS } from "constants/colors";
import { FONTS } from "constants/fonts";

export const Tag = styled.div`
  font: 700 13px/24px ${FONTS.PRIMARY};
  overflow: hidden;
  position: relative;
  z-index: 0;
  display: flex;
  letter-spacing: -0.1px;
  color: ${COLORS.CADET_BLUE};
  border-radius: 4px;
  transition: 0.1s ease-in-out;

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
    transition: inherit;
  }

  ${({ isRemovable }) => {
    if (!isRemovable)
      return css`
        cursor: pointer;

        &:hover {
          color: ${COLORS.WHITE};

          &::before {
            opacity: 1;
          }
        }
      `;
  }}
`;

export const TagContent = styled.span`
  display: inline-block;
  padding: 4px 8px;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  border: none;
  background-color: ${COLORS.CADET_BLUE};
  cursor: pointer;
  transition: inherit;

  &:hover {
    background-color: ${COLORS.OUTER_SPACE};
  }
`;
