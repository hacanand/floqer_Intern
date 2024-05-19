import { JSONData } from "../components/constants/constants";

 

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
