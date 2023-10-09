import SearchBar from './SearchBar';

const SearchForm = () => {
  return (
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
                <div className="search-location-input flex flex-col w-full">
                  <label className="-mb-[4px] sticky ml-[11px] text-[13px]">
                    Going to
                  </label>
                  <SearchBar />
                </div>
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
            <div className="flex flex-col items-start">
              <label className="-mb-[4px] ml-[12px] sticky text-[13px]">
                Dates
              </label>
              <div>
                <div className="react-datepicker__input-container">
                  <span
                    role="alert"
                    aria-live="polite"
                    className="react-datepicker__aria-live"
                  ></span>
                  <input
                    type="text"
                    placeholder="Check In - Check Out"
                    className="-px-11 bg-[#fff] text-[14px] lg:text-[12px] xl:text-[14px]  flex-initial w-full h-10 rounded-md font-base px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value=""
                  />
                </div>
              </div>
            </div>
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
              <div className="w-full flex flex-col">
                <label
                  htmlFor="roomInput"
                  className="-mb-[4px] hidden lg:block ml-[27px] text-[13px]"
                >
                  Travelers
                </label>
                <input
                  type="text"
                  id="roomInput"
                  className="py-3 px-0 ml-[10px] text-[14px] lg:text-[12px] xl:text-[14px]  pl-[22px] lg:pl-[7px] bg-[#fff]  xl:w-[300px] md:lg:w-auto sm:w-[auto] w-full text-sm rounded-md  ml-0 md:ml-5 focus:outline-none"
                  value="1 Rooms , 2 Adults  , 0 Children"
                />
              </div>
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
  );
};

export default SearchForm;
