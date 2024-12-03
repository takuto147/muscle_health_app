import { useEffect, useState } from "react";
import { LoadMeal } from "./function/LoadMeal";
import { Link } from "react-router-dom";

interface DayMealProps {
  selectedDate: string;
}

interface Meal {
  mealName: string;
  calorie: number;
  protein: number;
}

export const DayMeal: React.FC<DayMealProps> = ({ selectedDate }) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


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
    return <div>Loading...</div>
  }

  if (meals.length === 0) {
    return <p>登録された食事がありません。ごはんを食べましょう。</p>;
  }

  return (
    <>
      {meals.length === 0 ? (
        <></>
      ) : (
        <div className="mt-4 space-y-4">
          {meals.map((meal, index) => (
            <Link to="/editmeal" state={{ meal, selectedDate }} key={index}>
              <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{meal.mealName}</h3>
                <p>カロリー：{meal.calorie}Kcal</p>
                <p>たんぱく質：{meal.protein}g</p>
              </div>
            </Link>
          ))}
        </div >
      )}
    </>
  );
};
