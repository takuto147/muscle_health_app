import { Header } from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteMeal } from "./function/DeleteMeal";
import { updateMeal } from "./function/UpdateMeal";

interface Meal {
  mealName: string;
  calorie: number;
  protein: number;
}

export const EditMeal = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { meal, selectedDate } = location.state as { meal: Meal, selectedDate: string }

  const [mealName, setMealName] = useState(meal.mealName)
  const [calorie, setCalorie] = useState(meal.calorie)
  const [protein, setProtein] = useState(meal.protein)
  const handleMealNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setMealName(e.target.value)
  const handleCalorieChange = (e: React.ChangeEvent<HTMLInputElement>) => setCalorie(Number(e.target.value))
  const handleProteinChange = (e: React.ChangeEvent<HTMLInputElement>) => setProtein(Number(e.target.value))


  const onUpdateMeal = async () => {
    try {
      await updateMeal(mealName, calorie, protein, selectedDate);
      alert("食事を削除しました");
      navigate('/')

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  const onDeleteMeal = async () => {
    try {
      await deleteMeal(mealName, selectedDate);
      alert("食事を削除しました");
      navigate('/')
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }



  return (
    <div className="container mx-auto p-4">
      <Header />
      <p className="text-red-500">食事名は更新できません！</p>
      <label className=" text-gray-400">食事名</label>
      <br />
      <input type="text" className='rounded-lg border border-gray-200 text-gray-400' onChange={handleMealNameChange} value={mealName} disabled />
      <br />
      <label>カロリー [kcal]</label>
      <br />
      <input type="number" className='rounded-lg border border-gray-200' onChange={handleCalorieChange} value={calorie} />
      <br />
      <label>たんぱく質量 [g]</label>
      <br />
      <input type="number" className='rounded-lg border border-gray-200' onChange={handleProteinChange} value={protein} />
      <br />
      <button className='border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mb-5' onClick={onUpdateMeal}>
        更新
      </button>
      <br />
      <br />
      <Link to="/" className="bg-green-300 border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-green-500">ホームに戻る</Link>
      <button onClick={onDeleteMeal} className='border-gray-200 shadow-md rounded-lg p-2  mt- active:translate-y-1 active:shadow-inner hover:bg-gray-300 bg-red-500 text-white'>
        削除
      </button>
    </div>
  );
};