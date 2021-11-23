import styled from "styled-components";

import { BREAKPOINTS } from "constants/breakpoints";
import { COLORS } from "constants/colors";
import { FONTS } from "constants/fonts";

export const JobItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 37px 24px 24px 19px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15); // TODO: Move to COLORS
  border-left: 5px solid ${({ isFeatured }) => (isFeatured ? COLORS.CADET_BLUE : COLORS.WHITE)};
  border-radius: 5px;

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: row;
    align-items: center;
    padding: 32px 40px 32px 35px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 24px;
  width: 48px;
  height: 48px;
  transform: translateY(-50%);

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    position: static;
    width: 88px;
    height: 88px;
    transform: none;
  }
`;

export const Content = styled.div`
  margin: 0 0 16px;
  padding-bottom: 16px;
  flex-grow: 1;
  border-bottom: 1px solid ${COLORS.SILVER_SAND};

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    margin: 0 24px;
    padding-bottom: 0;
    border: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 24px;
  margin-bottom: 10px;
`;

export const Company = styled.p`
  font: 700 13px/15px ${FONTS.PRIMARY};
  margin-right: 14px;
  color: ${COLORS.CADET_BLUE};

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Position = styled.h1`
  font: 700 15px/24px ${FONTS.PRIMARY};
  margin-bottom: 6px;
  color: ${COLORS.OUTER_SPACE};
  transition: color 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${COLORS.CADET_BLUE};
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 18px;
  }
`;

export const DetailList = styled.ul`
  display: flex;
`;

export const DetailItem = styled.li`
  font: 500 13px/24px ${FONTS.PRIMARY};
  margin-right: 8px;
  letter-spacing: -0.1px;
  color: ${COLORS.ROMAN_SILVER};

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    font-size: 15px;
    margin-right: 16px;
    letter-spacing: -0.12px;
  }

  & + & {
    position: relative;
    padding-left: 12px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${COLORS.SILVER_SAND};
      transform: translateY(-50%);
    }

    @media (min-width: ${BREAKPOINTS.DESKTOP}) {
      padding-left: 20px;
    }
  }
`;
