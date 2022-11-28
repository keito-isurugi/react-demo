import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { getMonth, getYear, format, addMonths, subMonths, subDays, startOfMonth, endOfMonth } from 'date-fns'
import ja from 'date-fns/locale/ja';
// import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";

export const DatePickerDemo = () => {
	const [startDate, setStartDate] = useState(new Date());
	registerLocale('ja', ja);

	return (
		<>
		 <DatePicker 
				selected={startDate} 
				selectsStart
				locale='ja' 
				onChange={(date) => setStartDate(date)} 
			/>
			<input type="date" />
		</>
	)
}

