'use client';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({
  dateSelected = [],
  setDateSelected,
  isHomePage = true,
}) => {
  const [dateRange, setDateRange] = useState(() => {
    return dateSelected.length === 0 ? [null, null] : dateSelected;
  });
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (startDate && endDate) {
      setDateSelected([startDate.toISOString(), endDate.toISOString()]);
    }
  }, [dateRange]);

  return (
    <div className="flex flex-col items-start">
      <label
        className={`${
          !isHomePage && 'hidden'
        } -mb-[4px] ml-[12px] sticky text-[13px] leading-6`}
      >
        Dates
      </label>
      <div className="w-[100%]">
        <div className="react-datepicker__input-container">
          <span
            role="alert"
            aria-live="polite"
            className="react-datepicker__aria-live"
          ></span>
          <DatePicker
            className="-px-11 bg-[#fff] text-[14px] lg:text-[12px] xl:text-[14px]  flex-initial h-10 rounded-md font-base px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-[100%]"
            placeholderText="Check-in - Check-out"
            // dateFormat="yyyy-MM-dd HH:mm"
            selectsRange={true}
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </div>
      </div>
    </div>
  );

  // const [startDate, setStartDate] = useState(new Date());
  // const [toggleCalendar, setToggleCalendar] = useState(false);

  // const handleonClick = (e) => {
  //   setToggleCalendar((prev) => !prev);
  // };

  // return (
  //   <div className="flex flex-col items-start">
  //     <label className="-mb-[4px] ml-[12px] sticky text-[13px]">Dates</label>
  //     <div>
  //       <div className="react-datepicker__input-container">
  //         <span
  //           role="alert"
  //           aria-live="polite"
  //           className="react-datepicker__aria-live"
  //         ></span>
  //         <input
  //           type="text"
  //           placeholder="Check In - Check Out"
  //           className="-px-11 bg-[#fff] text-[14px] lg:text-[12px] xl:text-[14px]  flex-initial w-full h-10 rounded-md font-base px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  //           value=""
  //           onClick={handleonClick}
  //         />
  //       </div>
  //     </div>

  //   </div>
  // );
};

export default DateSelector;
