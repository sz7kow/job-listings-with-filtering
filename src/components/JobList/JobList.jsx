import React from "react";
import PropTypes from "prop-types";

import { JobItem } from "components/JobItem";
import * as S from "./JobList.styles";

const JobList = ({ handleTagClick, jobs }) => {
  return (
    <S.JobList>
      {jobs.map((job) => (
        <JobItem handleTagClick={handleTagClick} job={job} key={job.id} />
      ))}
    </S.JobList>
  );
};

JobList.propTypes = {
  handleTagClick: PropTypes.func.isRequired,
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

export { JobList };
