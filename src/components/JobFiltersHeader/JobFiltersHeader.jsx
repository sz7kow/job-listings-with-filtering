import React from "react";
import PropTypes from "prop-types";

import { TagList } from "components/TagList";
import * as S from "./JobFiltersHeader.styles";

const JobFiltersHeader = ({ handleRequiredTagClick, requiredTags, resetFilters }) => {
  return requiredTags.length > 0 ? (
    <S.JobFiltersHeader>
      <TagList areRemovable handleTagClick={handleRequiredTagClick} tags={requiredTags} />
      <S.ClearButton onClick={resetFilters}>Clear</S.ClearButton>
    </S.JobFiltersHeader>
  ) : (
    <S.Spacer />
  );
};

JobFiltersHeader.propTypes = {
  handleRequiredTagClick: PropTypes.func.isRequired,
  requiredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  resetFilters: PropTypes.func.isRequired,
};

export { JobFiltersHeader };
