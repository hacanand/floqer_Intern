 
import { getJobDataByYear } from "../helper/formatedData";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

import { JSONData } from "./constants/constants";
const jobData = getJobDataByYear(JSONData);
console.log(jobData);
const LineGraph = () => {
  return (
    <div>LineGraph</div>
  )
}

export default LineGraph