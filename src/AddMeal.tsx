import { useState } from "react";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { SaveMeal } from "./function/SaveMeal";
import { DayPulldown } from "./DayPulldouwn";
import { formatDate } from "./FormatDate";

export const AddMeal = () => {
  const [mealName, setMealName] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [protein, setProtein] = useState(0);
  const navigate = useNavigate();

  const today = new Date();
  const inti_day = formatDate(today);
  const [selectedDate, setSelectedDate] = useState<string>(String(inti_day));

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleMealNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMealName(e.target.value);
  const handleCalorieChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCalorie(Number(e.target.value));
  const handleProteinChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProtein(Number(e.target.value));
  const handleDateChange = (date: string) => setSelectedDate(date);
  const onAddMeal = async () => {
    try {
      await SaveMeal(mealName, calorie, protein, selectedDate);
      alert("食事を保存しました");
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("食事の保存に失敗しました。");
    }
  };
  console.log(`kakunin:${selectedDate}`);

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h2 className="text-blue-700 mb-4">食べた食事を記録する</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <DayPulldown onDateChange={handleDateChange} />
      <label>食事名</label>
      <br />
      <input
        type="text"
        className="rounded-lg border border-gray-200"
        onChange={handleMealNameChange}
        placeholder="朝食/昼食/夕食/間食"
      />
      <br />
      <label>カロリー [kcal]</label>
      <br />
      <input
        type="number"
        className="rounded-lg border border-gray-200"
        onChange={handleCalorieChange}
      />
      <br />
      <label>たんぱく質量 [g]</label>
      <br />
      <input
        type="number"
        className="rounded-lg border border-gray-200"
        onChange={handleProteinChange}
      />
      <br />
      <button
        className="border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-blue-300 mb-5 "
        onClick={onAddMeal}
      >
        食事を追加
      </button>
      <br />
      <br />
      <Link
        to="/"
        className="bg-green-300 border-gray-200 shadow-md rounded-lg p-3  active:translate-y-1 active:shadow-inner hover:bg-green-500"
      >
        ホームに戻る
      </Link>
    </div>
  );
};
