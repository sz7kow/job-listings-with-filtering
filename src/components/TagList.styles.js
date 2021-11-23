import styled from "styled-components";

export const TagList = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  margin: -16px -16px 0 0;
`;

export const TagItem = styled.li`
  & > * {
    margin: 16px 16px 0 0;
  }
`;
