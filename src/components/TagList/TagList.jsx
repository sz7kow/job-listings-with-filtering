import React from "react";
import PropTypes from "prop-types";

import { Tag } from "components/Tag";
import * as S from "./TagList.styles";

const TagList = ({ tags }) => {
  return (
    <S.TagList>
      {tags.map((tag) => (
        <S.TagItem key={tag}>
          <Tag>{tag}</Tag>
        </S.TagItem>
      ))}
    </S.TagList>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { TagList };
