import { JSONData } from "../constants/constants";

 

 export function getJobDataByYear(jsonData: typeof JSONData): {
  [year: number]: { totalJobs: number; averageSalary: number };
} {
  const jobDataByYear: {
    [year: number]: { totalJobs: number; averageSalary: number };
  } = {};

  jsonData.forEach((job) => {
    const year = job.work_year;
    const salary = job.salary_in_usd;

    if (!jobDataByYear[year]) {
      jobDataByYear[year] = { totalJobs: 0, averageSalary: 0 };
    }

    jobDataByYear[year].totalJobs++;
    jobDataByYear[year].averageSalary += salary;
  });

  Object.keys(jobDataByYear).forEach((year) => {
    jobDataByYear[Number(year)].averageSalary /=
      jobDataByYear[Number(year)].totalJobs;
  });

  return jobDataByYear;
}

export function getJobTitleCountsByYear(workYear: number): {
  [jobTitle: string]: number;
} {
  const jobTitleCounts: { [jobTitle: string]: number } = {};

  // Filter data for the given work year
  const filteredData = JSONData.filter((data) => data.work_year === workYear);

  // Iterate through the filtered data and count job titles
  filteredData.forEach((data) => {
    const jobTitle = data.job_title;
    if (jobTitleCounts[jobTitle]) {
      jobTitleCounts[jobTitle]++;
    } else {
      jobTitleCounts[jobTitle] = 1;
    }
  });

  return jobTitleCounts;
}
 
// const jobTitleCounts2024 = getJobTitleCountsByYear(2024);
// Object.keys(jobTitleCounts2024).forEach((jobTitle) => {
//   console.log(jobTitle , jobTitleCounts2024[jobTitle]);
// });
// console.log(jobTitleCounts2024);
