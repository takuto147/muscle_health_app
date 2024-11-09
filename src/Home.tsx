import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";

export const Home = () => {
  const calorieData = [
    { meal: "Breakfast", calories: 300 },
    { meal: "Lunch", calories: 600 },
    { meal: "Snack", calories: 150 },
    { meal: "dinner", calories: 200 },
  ];

  const totalCalories = calorieData.reduce((sum, entry) => sum + entry.calories, 0);
  // const totalCalories = 1000
  const totalMetabolism  = 1500

  const message =
  totalCalories > totalMetabolism
    ? "摂取カロリーが1日の必要カロリーを超えています。気を付けましょう。"
    : "摂取カロリーは代謝以下です。このまま頑張りましょう！";
  const messageColor = totalCalories > totalMetabolism ? "text-red-500" : "text-blue-500";


  return (
    <>
      <Header/>
      <h2 className="text-blue-700 mb-4">トップページ</h2>
      <label>今日の合計摂取カロリー：{totalCalories}</label>
      <br />
      <label>〇〇さんの新陳代謝：{totalMetabolism}</label>
      <br />
      <p className={`${messageColor} font-bold mt-4`}>{message}</p>
      <ProgressBar currentCalories={totalCalories} dailyCalorieGoal={totalMetabolism} />
      <br />
      <Link to="/addmeal" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">食事を記録</Link>
    </>
  );
};