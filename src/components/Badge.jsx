import React from "react";
import PropTypes from "prop-types";

import * as S from "./Badge.styles";

const Badge = (props) => {
  return <S.Badge {...props} />;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
};

export default Badge;
