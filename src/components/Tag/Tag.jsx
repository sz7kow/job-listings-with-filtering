import React from "react";
import PropTypes from "prop-types";

import * as S from "./Tag.styles";

const Tag = ({ children }) => {
  return <S.Tag>{children}</S.Tag>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tag };
