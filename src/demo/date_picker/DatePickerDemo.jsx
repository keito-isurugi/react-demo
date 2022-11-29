import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker"
import { Box, Input } from "@chakra-ui/react";
import { getMonth, getYear, format, addMonths, subMonths, subDays, startOfMonth, endOfMonth } from 'date-fns'
import ja from 'date-fns/locale/ja';
// import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";
import { DatePickerComponents } from "./components/DatePickerComponents";

export const DatePickerDemo = () => {
	const [startDate, setStartDate] = useState(new Date());
	registerLocale('ja', ja);

	return (
		<>
		<Box w="200px">
		 <DatePickerComponents 
				selected={startDate} 
				onChange={(date) => setStartDate(date)} 
				dateFormat="yyyy-MM-dd"
				selectsStart
				// calendarStartDay={1}
			/>
			<Box>a</Box>
		 <DatePicker 
				selected={startDate} 
				selectsStart
				locale='ja' 
				onChange={(date) => setStartDate(date)} 
				dateFormat="yyyy-MM-dd"
			/>
			<Box>a</Box>
			<Input type="date" />
		</Box>
		</>
	)
}

