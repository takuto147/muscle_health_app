// ProgressBar.tsx
import React from "react";
import "./ProgressBar.css"; // スタイル用のCSSファイル

interface ProgressBarProps {
  currentCalories: number;
  dailyCalorieGoal: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentCalories, dailyCalorieGoal }) => {
  // 現在のカロリーの割合（％）
  const progressPercentage = Math.min((currentCalories / dailyCalorieGoal) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}>
        {progressPercentage.toFixed(0)}%
      </div>
    </div>
  );
};
