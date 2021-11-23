import React from "react";
import PropTypes from "prop-types";

import * as S from "./Tag.styles";

const Tag = ({ children, onClick, value }) => {
  return <S.Tag onClick={() => onClick(value)}>{children}</S.Tag>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export { Tag };
