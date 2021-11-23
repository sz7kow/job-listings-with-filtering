import React from "react";
import PropTypes from "prop-types";

import { JobList } from "components/JobList";
import * as S from "./Jobs.styles";

const Jobs = ({ jobs }) => {
  return (
    <S.Jobs>
      <JobList jobs={jobs} />
    </S.Jobs>
  );
};

Jobs.propTypes = {
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
};

export default Jobs;