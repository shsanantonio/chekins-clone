'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRef } from 'react';
import debounce from '@/utils/debounce';

const SearchedHotel = ({ hotel, handleEdit, handleDelete, handleTagClick }) => {
  return (
    <li
      className="relative cursor-pointer select-none pl-4 py-2 pr-4 hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:hover:text-white"
      onClick={() => handleTagClick(hotel)}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex  flex-row gap-2 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          {hotel.fullName}
        </div>
      </div>
    </li>
  );
};

const SearchList = ({ data, handleTagClick }) => {
  //converts the array list into styled prompt cards
  const arrList = data.locationSuggestions;

  if (typeof arrList != 'undefined' && arrList.length > 0) {
    return (
      <div className="search-location-input bg-white shadowbox absolute rounded-[15px] -top-[-60px] -left-[34px] w-[500px] xl:w-[600px] popup-zoom ">
        <div className="input-container">
          {/* <input
            className="bg-[#fff] px-2 w-full shadowbox rounded-tl-[15px] rounded-tr-[15px] relative z-50 file:relative focus:outline-none focus:border-none flex-initial h-[95px] font-base "
            placeholder="Where are you going?"
            type="text"
            value=""
          /> */}

          <ul className="rounded-bl-[15px] rounded-br-[15px] overflow-y-auto h-[390px] w-full overflow-x-auto relative z-50    bg-white  flex flex-col gap-2">
            {arrList.map((hotel) => (
              <SearchedHotel
                key={hotel.id}
                hotel={hotel}
                handleTagClick={handleTagClick}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

const SearchBar = ({ setHotelName }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState({});
  const [goOpen, setGoOpen] = useState(true);
  const inputRef = useRef('');

  const handleChange = (value) => {
    fetch(
      `https://autosuggest-v2.us.prod.zentrumhub.com/api/locations/locationcontent/autosuggest?term=${value}&countries=FR,ES,US,CN,IT,TR,MX,DE,TH,GB,JP,AT,GR,HK,MY,RU,PT,CA,NL,AR,KR,HR,CZ,MA,EG,ID,AE,PL,PH,AU,BE,SA,SE,CH,HU,IL,PT,SG,RO,ZA,FI,CL,IE,OM,BR,DK,NO,VN&strictFilterForCountries=false`
    )
      .then((result) => result.json())
      .then((data) => {
        setSearchedResults(data);
        console.log(searchedResults);
      })
      .catch((err) => console.error(err));
  };
  /**
   * useCallback Hook returns a memoized callback function and only runs when one of its dependencies update.
   * useCallback is a React Hook that lets you cache a function definition between re-renders.
   * useCallback hook is used to prevent the function from being recreated unless necessary.
   *
   * This give back the return function from debounce and memoize it initially
   * each time the component re-renders, a new instance of the debounced function is created by the debounce
   * usecallback prevents the occurence of a small performance issue, without callback, each time the component re-renders,
   * a new instance of the debounced function is created by the debounce(handleChange).
   */
  const useDebounce = useCallback(debounce(handleChange), []); //makes sure to return the same debounced function instance, and will only change if the dependencies change, in this case, it has no dependency

  const handleTagClick = (hotel) => {
    setSearchText(hotel.fullName); // changes the value of input search field to the name of selected hotel
    setGoOpen(false); // closes the dropdown list
    setHotelName(hotel.fullName);
    // setHotelName(setSearchText);
  };

  const handleInputClick = (e) => {
    let val = '';
    if (e.target.value) val = e.target.value; //if the input field is NOT empty, the same dropdown search list will be displayed, else default list will be shown
    handleChange(val);
    setGoOpen(true); //dropdown list opens
  };

  const handleonChange = (e) => {
    setGoOpen(true); //dropdown list re-opens for any changes in text input that satisifes debounce timeout
    setSearchText(e.target.value); //value of search input field

    useDebounce(e.target.value);
  };

  return (
    <div className="search-location-input flex flex-col w-full">
      <label className="-mb-[4px] sticky ml-[11px] text-[13px]">Going to</label>
      <div onClick={handleInputClick}>
        <input
          className="bg-[#fff] ml-[11px] text-[14px] lg:text-[12px] xl:text-[14px]  w-[99%] file:absolute focus:outline-none focus:border-none  h-10 rounded-md font-base -mb-[4px] sticky"
          placeholder="Enter a destination"
          type="text"
          id="default-search"
          ref={inputRef}
          value={searchText}
          onChange={handleonChange}
          required
        />
      </div>
      {goOpen && (
        <SearchList data={searchedResults} handleTagClick={handleTagClick} />
      )}
    </div>
  );
};

export default SearchBar;
