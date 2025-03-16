import { useNavigate } from "react-router-dom"; // 追加
import { DayMeal } from "./DayMeal";
import { Header } from "./Header";
import { PageNation } from "./PageNation";
import { ProgressBar } from "./ProgressBar";
import { Link } from "react-router-dom";
import { CalorieMessage } from "./CalorieMessage";
import { formatDate } from "./FormatDate";
import { LoadMeal } from "./function/LoadMeal";
import { useState, useEffect } from "react";
import { LoadProf } from "./function/LoadProfs";

type Meal = {
  mealName: string;
  calorie: number;
  protein: number;
};

type Profs = {
  height: number;
  weight: number;
  age: number;
};

export const Home = () => {
  const navigate = useNavigate();
  const today = new Date();
  const inti_day = formatDate(today);
  const [selectedDate, setSelectedDate] = useState<string>(String(inti_day));
  const [Meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [profs, setProfs] = useState<Profs | null>(null);

  // LoadMeal関数で数値を取得し各コンポーネントに渡す準備
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        setMeals([]);
        const data = await LoadMeal(selectedDate);
        setMeals(data?.meals || []); // オプショナルチェイニングとORでエラー回避
      } catch (error) {
        console.log("食事データの取得に失敗", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [selectedDate]);

  // プロフィール情報を取得
  useEffect(() => {
    const fetchProf = async () => {
      try {
        setLoading(true);
        setProfs(null);
        const profData = await LoadProf();
        if (profData) {
          setProfs(profData);
        } else {
          navigate("/editprofile"); // プロフィールが無ければ登録画面へ
        }
      } catch (error) {
        console.log("プロフィールデータの取得に失敗", error);
        navigate("/editprofile"); // 例外が発生しても登録画面へ
      } finally {
        setLoading(false);
      }
    };
    fetchProf();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!profs) {
    return <div>プロフィールが読み込めませんでした。</div>;
  }

  const { weight, height, age } = profs;

  // カロリー&たんぱく質の合計計算
  const totalCalories = Meals.reduce((sum, meal) => sum + meal.calorie, 0);
  const totalProtein = Meals.reduce((sum, meal) => sum + meal.protein, 0);

  const dailyCalorieGoal = 10 * weight + 6.25 * height - 5 * age + 5;
  const dailyProtein = 2 * weight;

  return (
    <div className="container mx-auto p-4">
      <Header />
      <PageNation selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <br />
      <label>今日の合計摂取カロリー：{totalCalories} kcal</label>
      <br />
      <label>今日の合計摂取たんぱく質：{totalProtein} g</label>
      <br />
      <br />
      <CalorieMessage
        totalCalories={totalCalories}
        dailyCalorieGoal={dailyCalorieGoal}
      />
      <ProgressBar
        currentCalories={totalCalories}
        dailyCalorieGoal={dailyCalorieGoal}
        currentProtein={totalProtein}
        dailyProteinGoal={dailyProtein}
      />
      <DayMeal selectedDate={selectedDate} />
      <br />
      <Link
        to="/addmeal"
        className="fixed z-50 bottom-10 right-10 py-5 px-2 border-2 bg-green-400 rounded-full cursor-pointer"
      >
        食事を追加
      </Link>
    </div>
  );
};
