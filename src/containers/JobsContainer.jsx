import React, { useEffect, useState } from "react";

import { Jobs } from "components/Jobs";
import jobsData from "data/json/jobs.json";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [requiredTags, setRequiredTags] = useState([]);

  useEffect(() => {
    const parsedJobs = JSON.parse(JSON.stringify(jobsData));
    setJobs(parsedJobs);
  }, []);

  const handleTagClick = (tag) => !requiredTags.includes(tag) && setRequiredTags((tags) => [...tags, tag]);

  const handleRequiredTagClick = (clickedTag) => setRequiredTags((tags) => tags.filter((tag) => tag !== clickedTag));

  const resetFilters = () => setRequiredTags([]);

  const filteredJobs = jobs.filter((job) => {
    let doesMatchCriteria = true;

    requiredTags.forEach((filter) => {
      if (!job.tags.includes(filter)) doesMatchCriteria = false;
    });

    return doesMatchCriteria;
  });

  return (
    <Jobs
      handleTagClick={handleTagClick}
      handleRequiredTagClick={handleRequiredTagClick}
      jobs={filteredJobs}
      requiredTags={requiredTags}
      resetFilters={resetFilters}
    />
  );
};

export { JobsContainer };
