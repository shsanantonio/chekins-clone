'use client';

import { useState } from 'react';
import DateSelector from './DateSelector';
import SearchBar from './SearchBar';
import Travelers from './Travelers';

const SearchForm = ({ isHomePage = true }) => {
  const [hotelName, setHotelName] = useState('');
  const [dateSelected, setDateSelected] = useState([]);
  const [travelersInfo, setTravelersInfo] = useState([]);

  // useEffect(() => {}, [hotelName]);
  const handleSearchOnclick = () => {
    console.log(hotelName);
    console.log(dateSelected);
    console.log(travelersInfo);
  };

  return isHomePage ? (
    <div>
      <div className="bg-[#fff] top-10 relative z-10 drop-shadow-lg border border-gray-600 rounded-lg w-full items-center p-[6px]">
        <div className="flex justify-between items-center  px-3 py-3 flex-col lg:space-y-0 space-y-2 lg:flex-row">
          <div className="w-[100%]">
            <div className="w-full text-gray-600">
              <div className="flex w-full relative  items-center flex-row">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-[20px] w-[26px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                </svg>
                <SearchBar
                  isHomePage={isHomePage}
                  setHotelName={setHotelName}
                />
              </div>
            </div>
          </div>
          <div className="widthcalendar ml-0 lg:ml-[10px] flex items-center flex-row">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-[20px] w-[26px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"></path>
              </g>
            </svg>
            <DateSelector
              isHomePage={isHomePage}
              setDateSelected={setDateSelected}
            />
          </div>
          <div className="w-[100%] pl-[3px] lg:pl-0">
            <div className="relative mr-0">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <div className=" focus:shadow-outline">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-[20px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
                  </svg>
                </div>
              </span>
              <Travelers
                isHomePage={isHomePage}
                setTravelersInfo={setTravelersInfo}
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[25%]">
            <button className="bg-[#1893F8] flex flex-row py-2 px-0 lg:px-2 lg:py-5 space-x-2 rounded-lg justify-center items-center w-full searchbar">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="8.11732"
                  cy="8.6"
                  rx="7.28333"
                  ry="7.6"
                  stroke="white"
                  strokeWidth="1.5"
                ></ellipse>
                <path
                  d="M14.6328 15.3999L16.1661 16.9999"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="text-[#fff] lg:hidden block"> Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#002248] z-50 relative rounded-md drop-shadow-lg  w-full container mx-auto lg:w-full xl:w-11/12 items-center">
      <div className="flex justify-between gap-5 items-center space-x-0 md:space-x-0 px-3 py-3 flex-col lg:space-y-0 space-y-3 lg:flex-row">
        <div className="w-[100%]">
          <div className="w-full text-gray-600">
            <div className="flex w-full relative  items-center flex-row">
              <div className="px-3 py-2.5 rounded-full bg-[#F1F5F5]">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833984 7.95283C0.833984 4.20498 3.81875 1.16675 7.50065 1.16675C11.1825 1.16675 14.1673 4.20498 14.1673 7.95283C14.1673 11.6713 12.0395 16.0104 8.71976 17.5621C7.94587 17.9238 7.05544 17.9238 6.28154 17.5621C2.96175 16.0104 0.833984 11.6713 0.833984 7.95283Z"
                    stroke="#002248"
                    strokeWidth="1.5"
                  ></path>
                  <circle
                    cx="7.5"
                    cy="7.83325"
                    r="2.5"
                    stroke="#002248"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
              </div>
              <div className="search-location-input w-full">
                <SearchBar
                  isHomePage={isHomePage}
                  setHotelName={setHotelName}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="widthcalendar higherIndexNavBar  relative flex items-center flex-row">
          <div className="px-2 py-2 mr-2 rounded-full bg-[#F1F5F5]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16797 12.4999C4.16797 9.35722 4.16797 7.78587 5.14428 6.80956C6.12059 5.83325 7.69194 5.83325 10.8346 5.83325H14.168C17.3107 5.83325 18.882 5.83325 19.8583 6.80956C20.8346 7.78587 20.8346 9.35722 20.8346 12.4999V14.1666C20.8346 17.3093 20.8346 18.8806 19.8583 19.8569C18.882 20.8333 17.3107 20.8333 14.168 20.8333H10.8346C7.69194 20.8333 6.12059 20.8333 5.14428 19.8569C4.16797 18.8806 4.16797 17.3093 4.16797 14.1666V12.4999Z"
                stroke="#002248"
                strokeWidth="1.5"
              ></path>
              <path
                d="M8.33203 5.83325V4.58325"
                stroke="#002248"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.668 5.83325V4.58325"
                stroke="#002248"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <circle
                cx="16.25"
                cy="16.25"
                r="1.25"
                stroke="#002248"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M4.58203 10H20.4154"
                stroke="#002248"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="wrapperClassName">
            <div>
              <div className="react-datepicker__input-container">
                <span
                  role="alert"
                  aria-live="polite"
                  className="react-datepicker__aria-live"
                ></span>
                <DateSelector
                  isHomePage={isHomePage}
                  setDateSelected={setDateSelected}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" z-50 w-full lg:w-[auto]  ">
          <div className="flex w-full lg:w-[auto] flex-row gap-2 ">
            <div className="relative lg:w-auto w-full text-gray-600">
              <div className="flex gap-2  lg:w-auto w-full flex-row">
                <div className="px-3 py-[7px] flex items-center rounded-full bg-[#F1F5F5]">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7.5013"
                      cy="4.50008"
                      r="3.33333"
                      stroke="#002248"
                      strokeWidth="1.5"
                    ></circle>
                    <ellipse
                      cx="7.5013"
                      cy="13.6666"
                      rx="5.83333"
                      ry="3.33333"
                      stroke="#002248"
                      strokeWidth="1.5"
                    ></ellipse>
                  </svg>
                </div>
                <Travelers
                  isHomePage={isHomePage}
                  setTravelersInfo={setTravelersInfo}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[auto] ">
          <button className="bg-[#1893F8] flex flex-row py-2 px-0 md:px-5 md:py-5 space-x-2 rounded-lg justify-center items-center lg:w-auto w-full">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="8.11732"
                cy="8.6"
                rx="7.28333"
                ry="7.6"
                stroke="white"
                strokeWidth="1.5"
              ></ellipse>
              <path
                d="M14.6328 15.3999L16.1661 16.9999"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <span className="text-[#fff] block lg:hidden"> Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
