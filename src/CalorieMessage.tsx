interface CalorieMessageProps {
  totalCalories: number;
  dailyCalorieGoal: number;
}


export const CalorieMessage: React.FC<CalorieMessageProps> = ({
  totalCalories,
  dailyCalorieGoal,
}) => {
  const message =
    totalCalories > dailyCalorieGoal
      ? "摂取カロリーが1日の必要カロリーを超えています。気を付けましょう。"
      : "摂取カロリーは新陳代謝の範囲内です。このまま頑張りましょう！";
  const messageColor = totalCalories > dailyCalorieGoal ? "text-red-500" : "text-blue-500";

  return (
    <>
      <p className={`${messageColor} font-bold mt-4`}>{message}</p>
    </>
  );
};