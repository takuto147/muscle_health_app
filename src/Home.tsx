import { DayMeal } from "./DayMeal";
import { Header } from "./Header";
import { PageNation } from "./PageNation";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";
import { CalorieMessage } from "./CalorieMessage";
// import { getAuth } from "firebase/auth";
// import { app } from "./firebase";
import { useState } from "react";
import { formatDate } from "./FormatDate";

export const Home = () => {
  const today = new Date();
  const inti_day = formatDate(today)
  const [selectedDate, setSelectedDate] = useState<string>(String(inti_day))
  const handleDateChange = (date: string) => setSelectedDate(date)
  console.log( "選択した日付は",selectedDate);

  const calorieData = [
    { meal: "Breakfast", calories: 300 },
    { meal: "Lunch", calories: 600 },
    { meal: "Snack", calories: 150 },
    { meal: "dinner", calories: 100 },
  ];
  //確認用
  // const auth = getAuth(app);
  // const user = auth.currentUser;
  // console.log(`USER情報:${JSON.stringify(user)}`);
  // console.log(`AUTH情報:${JSON.stringify(auth)}`);
  // console.log(`ユーザーUID: ${user?.uid}`);
  // console.log(`ユーザーEmail: ${user?.email}`);

  const totalCalories = calorieData.reduce((sum, entry) => sum + entry.calories, 0);
  // const totalCalories = 1000
  const dailyCalorieGoal = 1500
  const totalProtein = 60
  const dailyProtein = 90

  return (
    <div className="container mx-auto p-4">
      <Header />
      <PageNation selectedDate={selectedDate} onDateChange={handleDateChange} />
      <br />
      <label>今日の合計摂取カロリー：{totalCalories}</label>
      <br />
      <label>〇〇さんの新陳代謝：{dailyCalorieGoal}</label>
      <br />
      <CalorieMessage totalCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} />
      <ProgressBar currentCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} currentProtein={totalProtein} dailyProteinGoal={dailyProtein} />
      <DayMeal selectedDate={selectedDate}/>
      <br />
      <Link to="/addmeal" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">食事を記録</Link>
      <Link to="/profile" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">プロフィール更新</Link>
    </div>
  );
};