import { useState } from "react";
import { Header } from "./Header"
import { Link } from "react-router-dom";
export const AddMeal = () => {
  const [meal, setMeal] = useState("")
  const [calorie, setCalorie] = useState("0")
  const [Protein, setProtein] = useState("0")
  const handleMealChange = (e: React.ChangeEvent<HTMLInputElement>) => setMeal(e.target.value)
  const handleCalorieChange = (e: React.ChangeEvent<HTMLInputElement>) => setCalorie(e.target.value)
  const handleProteinChange = (e: React.ChangeEvent<HTMLInputElement>) => setProtein(e.target.value)

  const onAddMeal = () => {

  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h2 className="text-blue-700 mb-4">食べた食事を記録する</h2>
      <p>エラー回避用(後で消す)：{meal} {calorie} {Protein}</p>
      <label>食事名</label>
      <br />
      <input type="text" className='rounded-lg border border-gray-200' onChange={handleMealChange} />
      <br />
      <label>カロリー [kcal]</label>
      <br />
      <input type="text" className='rounded-lg border border-gray-200' onChange={handleCalorieChange} />
      <br />
      <label>たんぱく質量 [g]</label>
      <br />
      <input type="text" className='rounded-lg border border-gray-200' onChange={handleProteinChange} />
      <br />
      <button className='border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mb-5' onClick={onAddMeal}>
        食事を追加
      </button>
      <br />
      <br />
      <Link to="/" className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300">ホームに戻る</Link>
    </div>
  );
};