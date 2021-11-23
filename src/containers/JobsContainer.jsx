import React, { useEffect, useState } from "react";

import Jobs from "components/Jobs";
import jobsData from "data/json/jobs.json";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(JSON.parse(JSON.stringify(jobsData)));
  }, []);

  return <Jobs jobs={jobs} />;
};

export { JobsContainer };
