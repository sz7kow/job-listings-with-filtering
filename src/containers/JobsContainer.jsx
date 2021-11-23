import React, { useEffect, useState } from "react";

import { Jobs } from "components/Jobs";
import jobsData from "data/json/jobs.json";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [requiredTags, setRequiredTags] = useState([]);

  useEffect(() => {
    setJobs(JSON.parse(JSON.stringify(jobsData)));
  }, []);

  const handleTagClick = (tag) => !requiredTags.includes(tag) && setRequiredTags((tags) => [...tags, tag]);

  const filteredJobs = jobs.filter((job) => {
    let doesMatchCriteria = true;

    requiredTags.forEach((filter) => {
      if (!job.tags.includes(filter)) doesMatchCriteria = false;
    });

    return doesMatchCriteria;
  });

  return <Jobs handleTagClick={handleTagClick} jobs={filteredJobs} />;
};

export { JobsContainer };
