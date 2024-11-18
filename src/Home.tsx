import { DayMeal } from "./DayMeal";
import { Header } from "./Header";
import { PageNation } from "./PageNation";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";
import { CalorieMessage } from "./CalorieMessage";

export const Home = () => {
  const calorieData = [
    { meal: "Breakfast", calories: 300 },
    { meal: "Lunch", calories: 600 },
    { meal: "Snack", calories: 150 },
    { meal: "dinner", calories: 100 },
  ];

  const totalCalories = calorieData.reduce((sum, entry) => sum + entry.calories, 0);
  // const totalCalories = 1000
  const dailyCalorieGoal = 1500
  const totalProtein = 60
  const dailyProtein = 90

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h2 className="text-blue-700 mb-4">トップページ</h2>
      <PageNation/>
      <br />
      <label>今日の合計摂取カロリー：{totalCalories}</label>
      <br />
      <label>〇〇さんの新陳代謝：{dailyCalorieGoal}</label>
      <br />
      <CalorieMessage totalCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal}/>
      <ProgressBar currentCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} currentProtein={totalProtein} dailyProteinGoal={dailyProtein}/>
      <DayMeal/>
      <br />
      <Link to="/addmeal" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">食事を記録</Link>
      <Link to="/profile" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">プロフィール更新</Link>
    </div>
  );
};