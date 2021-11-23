import React from "react";
import PropTypes from "prop-types";

import { Tag } from "components/Tag";
import * as S from "./TagList.styles";

const TagList = ({ handleTagClick, tags }) => {
  return (
    <S.TagList>
      {tags.map((tag) => (
        <S.TagItem key={tag}>
          <Tag onClick={handleTagClick} value={tag}>
            {tag}
          </Tag>
        </S.TagItem>
      ))}
    </S.TagList>
  );
};

TagList.propTypes = {
  handleTagClick: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { TagList };
