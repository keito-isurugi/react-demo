import ja from 'date-fns/locale/ja'
import dayjs from 'dayjs'
import React from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import "../react-datepicker.css";


registerLocale('ja', ja)

export const DatePickerComponents = (props) => {
  return (
    <div className="light-theme-original">
      <ReactDatePicker
        locale={ja}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className="datepicker__header react-datepicker__current-month">
            <button className="datepicker__button" onClick={decreaseMonth}>
              {'前'}
            </button>
            <div className="datepicker__header-date">
              <div className="datepicker__header-date__year">{dayjs(date).year()}年</div>
              <div className="datepicker__header-date__month">{dayjs(date).month() + 1}月</div>
            </div>
            <button className="datepicker__button" onClick={increaseMonth}>
              {'次'}
            </button>
          </div>
        )}
        {...props}
      />
    </div>
  )
}