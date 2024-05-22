 
import { getJobDataByYear } from "../helper/formattedData";
import { JSONData } from "../constants/constants";
 
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
Chart.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);
 
 
const LineGraph = () => {
const jobDataByYear = getJobDataByYear(JSONData);
  const chartData = {
    labels: Object.keys(jobDataByYear).map(Number),
    datasets: [
      {
        label: "Total Jobs",
        data: Object.values(jobDataByYear).map((data) => data.totalJobs),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
         
        text: "Total Jobs",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
 
  return (
    <div className="w-full  ">
      <Line data={chartData} options={chartOptions} className="" />
    </div>
  );
};


export default LineGraph