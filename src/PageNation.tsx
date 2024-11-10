import { useState } from "react";

export const PageNation = () => {

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - (6 - i));  // sort順を逆
    return date;
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  console.log(`数値確認(DateString)：${weekDates[0].toDateString()}`);
  console.log(`数値確認(localDateString)：${weekDates[1].toLocaleDateString("ja-JP", { month: 'numeric', day: 'numeric' })}`);

  return (
    <>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {weekDates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            className={`px-4 py-2 rounded ${date.toDateString() === selectedDate.toDateString() ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            {date.toDateString() === today.toDateString() ? '今日' : date.toLocaleDateString("ja-JP", { month: 'numeric', day: 'numeric' })}
          </button>
        ))}
      </div>
      <label>選択中の日付: {selectedDate.toLocaleDateString("ja-JP")}</label>
    </>
  );
};