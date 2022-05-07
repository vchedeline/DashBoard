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
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      fill: true,
    },
    {
      label: "New Visitor",
      data: labels.map(() => Math.random()),
      borderColor: 'blue',
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      fill: true,
    },
  ],
};

export default data