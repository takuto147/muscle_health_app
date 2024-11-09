// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  currentCalories: number;
  dailyCalorieGoal: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentCalories, dailyCalorieGoal }) => {
  // 現在のカロリーの割合（％）
  const progressPercentage = Math.min((currentCalories / dailyCalorieGoal) * 100, 100);

  return (
    <div className="max-w-3xl w-full bg-gray-300 rounded-lg overflow-hidden h-6 mt-6 mx-auto">
      <div
        className="h-full bg-green-600 text-center text-white font-bold transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      >
        {progressPercentage.toFixed(0)}%
      </div>
    </div>
  );
};
