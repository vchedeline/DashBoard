import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: "Returning Visitor",
      data: labels.map(() => Math.random()),
      borderColor: 'rgb(190, 22, 50)',
      backgroundColor: 'rgba(190, 22, 50, 0.1)',
      fill: true,
    },
    {
      label: "New Visitor",
      data: labels.map(() => Math.random()),
      borderColor: 'rgb(2, 206, 217)',
      backgroundColor: "rgba(2, 206, 217, 0.2)",
      fill: true,
    },
  ],
};

export default data