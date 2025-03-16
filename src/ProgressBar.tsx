import { memo } from "react";

type ProgressBarProps = {
  currentCalories: number;
  dailyCalorieGoal: number;
  currentProtein: number;
  dailyProteinGoal: number;
};

export const ProgressBar = memo(
  ({
    currentCalories,
    dailyCalorieGoal,
    currentProtein,
    dailyProteinGoal,
  }: ProgressBarProps) => {
    const calorieProgressPercentage = Math.min(
      (currentCalories / dailyCalorieGoal) * 100,
      100
    );
    const proteinProgressPercentage = Math.min(
      (currentProtein / dailyProteinGoal) * 100,
      100
    );

    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-md">
        <div className="max-w-3xl w-full mx-auto mt-6 ">
          <div className="mb-4">
            <p className="text-center font-semibold mb-2">
              摂取カロリー:{currentCalories} kcal / 必要カロリー：
              {dailyCalorieGoal} kcal
            </p>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-6 shadow-md border border-gray-300">
              <div
                className="h-full bg-green-600 transition-all duration-300"
                style={{ width: `${calorieProgressPercentage}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="text-center font-semibold mb-2">
              摂取たんぱく質: {currentProtein}g / 必要たんぱく質:{" "}
              {dailyProteinGoal}g
            </p>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-6 shadow-md border border-gray-300">
              <div
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${proteinProgressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
