import { DayMeal } from "./DayMeal";
import { Header } from "./Header";
import { PageNation } from "./PageNation";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";
import { CalorieMessage } from "./CalorieMessage";
// import { getAuth } from "firebase/auth";
// import { app } from "./firebase";
import { formatDate } from "./FormatDate";
import { LoadMeal } from "./function/LoadMeal";
import { useState, useEffect } from "react";

interface Meal {
  mealName: string;
  calorie: number;
  protein: number;
}

export const Home = () => {
  const today = new Date();
  const inti_day = formatDate(today)
  const [selectedDate, setSelectedDate] = useState<string>(String(inti_day))
  const handleDateChange = (date: string) => setSelectedDate(date)
  // console.log( "選択した日付は",selectedDate);

  const [Meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  //LoadMeal関数で数値を取得し各コンポーネントに渡す準備
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        setMeals([]);
        const data = await LoadMeal(selectedDate)
        setMeals(data?.meals || []) //オプショナルチェイニングとORでエラー回避
      } catch (error) {
        console.log("食事データの取得に失敗", error);
      } finally {
        setLoading(false)
      }
    }
    fetchMeals()
  }, [selectedDate])

  if (loading) {
    return <div>loading...</div>
  }
  //カロリー&たんぱく質の合計計算
  const totalCalories = Meals.reduce((sum, meal) => sum + meal.calorie, 0)
  const totalProtein = Meals.reduce((sum, meal) => sum + meal.protein, 0)
  //確認用
  // const auth = getAuth(app);
  // const user = auth.currentUser;
  // console.log(`USER情報:${JSON.stringify(user)}`);
  // console.log(`AUTH情報:${JSON.stringify(auth)}`);
  // console.log(`ユーザーUID: ${user?.uid}`);
  // console.log(`ユーザーEmail: ${user?.email}`);

  const dailyCalorieGoal = 2000
  const dailyProtein = 90

  return (
    <div className="container mx-auto p-4">
      <Header />
      <PageNation selectedDate={selectedDate} onDateChange={handleDateChange} />
      <br />
      <label>今日の合計摂取カロリー：{totalCalories} kcal</label>
      <br />
      <label>今日の合計摂取たんぱく質：{totalProtein} g</label>
      <br />
      <br />
      <CalorieMessage totalCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} />
      <ProgressBar currentCalories={totalCalories} dailyCalorieGoal={dailyCalorieGoal} currentProtein={totalProtein} dailyProteinGoal={dailyProtein} />
      <DayMeal selectedDate={selectedDate} />
      <br />
      <Link to="/addmeal" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">食事を記録</Link>
      <Link to="/profile" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">プロフィール更新</Link>
    </div>
  );
};