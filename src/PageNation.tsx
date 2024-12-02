
import { formatDate } from "./FormatDate";


interface PageNationProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}



export const PageNation: React.FC<PageNationProps> = (
  { selectedDate, onDateChange }
) => {

  const today = new Date();
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - (6 - i));  // sort順を逆ekp
    return formatDate(date);
  });

  const handleDateClick = (date: string) => {
    onDateChange(date); // 親に通知
  };
  
  // console.log(`数値確認(DateString)：${weekDates[0].toDateString()}`);
  // console.log(`数値確認(localDateString)：${weekDates[1].toLocaleDateString("ja-JP", { month: 'numeric', day: 'numeric' })}`);

  return (
    <>
      <div className="flex space-x-2 mb-4 overflow-x-auto" >
        {weekDates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            className={`px-4 py-2 rounded ${date === selectedDate ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            {date === today.toDateString() ? '今日' : date}
          </button>
        ))}
      </div>
    </>
  );
};