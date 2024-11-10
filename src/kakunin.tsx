// ProgressBar.tsx
import React, { useState } from "react";

interface ProgressBarProps {
  currentCalories: number;
  dailyCalorieGoal: number;
  currentProtein: number;
  dailyProteinGoal: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentCalories,
  dailyCalorieGoal,
  currentProtein,
  dailyProteinGoal,
}) => {
  const [selectedTab, setSelectedTab] = useState<"calories" | "protein">("calories");

  const calorieProgressPercentage = Math.min((currentCalories / dailyCalorieGoal) * 100, 100);
  const proteinProgressPercentage = Math.min((currentProtein / dailyProteinGoal) * 100, 100);

  const handleTabClick = (tab: "calories" | "protein") => {
    setSelectedTab(tab);
  };

  return (
    <div className="max-w-3xl w-full mx-auto mt-6">
      {/* タブの切り替え */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleTabClick("calories")}
          className={`px-4 py-2 mx-2 rounded-t-lg ${
            selectedTab === "calories" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          カロリー
        </button>
        <button
          onClick={() => handleTabClick("protein")}
          className={`px-4 py-2 mx-2 rounded-t-lg ${
            selectedTab === "protein" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          たんぱく質
        </button>
      </div>

      {/* 選択されたタブに応じた情報と進捗バーを表示 */}
      {selectedTab === "calories" ? (
        <div className="mb-4">
          <p className="text-center font-semibold mb-2">
            摂取カロリー: {currentCalories} kcal / 新陳代謝: {dailyCalorieGoal} kcal
          </p>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-6 shadow-md border border-gray-300">
            <div
              className="h-full bg-green-600 transition-all duration-300"
              style={{ width: `${calorieProgressPercentage}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-center font-semibold mb-2">
            摂取たんぱく質: {currentProtein}g / 必要たんぱく質: {dailyProteinGoal}g
          </p>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-6 shadow-md border border-gray-300">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${proteinProgressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
