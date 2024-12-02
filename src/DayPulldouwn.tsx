import React from "react";
import { formatDate } from "./FormatDate";

interface DayPulldownProps {
  onDateChange: (date: string) => void;
}

export const DayPulldown: React.FC<DayPulldownProps> = ({ onDateChange }) => {
  const today = new Date();
  const options = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i); 
    return formatDate(date); 
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => onDateChange(e.target.value);

  return (
    <div>
      <label>記録日：</label>
      <select onChange={handleChange} className="rounded-lg border border-gray-200">
        {options.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};
