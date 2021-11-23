import React from "react";
import PropTypes from "prop-types";

import iconRemove from "assets/svgs/icon-remove.svg";
import * as S from "./Tag.styles";

const Tag = ({ children, isRemovable, onClick, value }) => {
  return (
    <S.Tag isRemovable={isRemovable} onClick={() => onClick(value)}>
      <S.TagContent>{children}</S.TagContent>
      {isRemovable && (
        <S.RemoveButton>
          <img alt="Remove" src={iconRemove} />
        </S.RemoveButton>
      )}
    </S.Tag>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  isRemovable: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export { Tag };
