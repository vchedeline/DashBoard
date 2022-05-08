import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
  datasets: [
    {
      label: "Ratings",
      data: [200, 100, 333, 123, 444],
      backgroundColor: [
        'rgba(255, 99, 132, .7)',
        'rgba(54, 162, 235, .7)',
        'rgba(255, 206, 86, .7)',
        'rgba(75, 192, 192, .7)',
        'rgba(153, 102, 255, .7)',
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
      ],
      borderWidth: 2,
    },
  ],
};

export default data
