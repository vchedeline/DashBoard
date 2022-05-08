import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


const data = {
  datasets: [
    {
      label: 'Analysis',
      data: Array.from({ length: 50 }, () => ({
        x: Math.floor(Math.random() * (150 - 1) + 1),
        y: Math.floor(Math.random() * (150 - 1) + 1),
        r: Math.floor(Math.random() * (30 - 5) + 5),
      })),
      backgroundColor: 'rgba(20, 70, 50, 0.9)',
    },
  ],
};

export default data