import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CalorieData {
  meal: string;
  calories: number;
}

export const CalorieBarChart: React.FC<{ calorieData: CalorieData[] }> = ({ calorieData }) => {  const data = {
    labels: calorieData.map((entry) => entry.meal),
    datasets: [
      {
        label: "Calories",
        data: calorieData.map((entry) => entry.calories),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

