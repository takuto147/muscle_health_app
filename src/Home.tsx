import { CalorieBarChart } from "./CalorieBarChart";
import { ProgressBar } from "./ProgressBar";

export const Home = () => {
  const calorieData = [
    { meal: "Breakfast", calories: 300 },
    { meal: "Lunch", calories: 600 },
    { meal: "Snack", calories: 150 },
    { meal: "Dinner", calories: 700 }
  ];

  // const totalCalories = calorieData.reduce((sum, entry) => sum + entry.calories, 0);
  const totalCalories = 1500
  const dailyCalorieGoal = 2000; // 1日の目標カロリー


  return (
    <>
      <h3>トップページ</h3>
      <label>今日の合計カロリー:{totalCalories}</label>
      <CalorieBarChart calorieData={calorieData} />
      <ProgressBar currentCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} />
      <p>自動デプロイ環境確認、確認後消す_2</p>
    </>
  );
};