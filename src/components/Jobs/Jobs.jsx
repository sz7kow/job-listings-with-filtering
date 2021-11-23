import React from "react";
import PropTypes from "prop-types";

import { JobFiltersHeader } from "components/JobFiltersHeader";
import { JobList } from "components/JobList";
import * as S from "./Jobs.styles";

const Jobs = ({ handleTagClick, handleRequiredTagClick, jobs, requiredTags, resetFilters }) => {
  return (
    <S.Jobs>
      <JobFiltersHeader
        handleRequiredTagClick={handleRequiredTagClick}
        requiredTags={requiredTags}
        resetFilters={resetFilters}
      />
      <JobList jobs={jobs} handleTagClick={handleTagClick} />
    </S.Jobs>
  );
};

Jobs.propTypes = {
  handleTagClick: PropTypes.func.isRequired,
  handleRequiredTagClick: PropTypes.func.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      contract: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool.isRequired,
      isNew: PropTypes.bool.isRequired,
      location: PropTypes.string.isRequired,
      logoPath: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      postedAt: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  requiredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  resetFilters: PropTypes.func.isRequired,
};

export { Jobs };
