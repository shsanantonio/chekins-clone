'use client';
import { useState, useCallback, useEffect } from 'react';

const ChildAge = ({ setChildAge }) => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setChildAge(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-3 items-center justify-between w-full">
      <select
        onChange={handleOnChange}
        className=" border-[2px] font-bold rounded-full px-5 py-1"
      >
        <option value="">Age</option>
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="4">4 Years</option>
        <option value="5">5 Years</option>
        <option value="6">6 Years</option>
        <option value="7">7 Years</option>
        <option value="8">8 Years</option>
        <option value="9">9 Years</option>
        <option value="10">10 Years</option>
        <option value="11">11 Years</option>
        <option value="12">12 Years</option>
        <option value="13">13 Years</option>
        <option value="14">14 Years</option>
        <option value="15">15 Years</option>
        <option value="16">16 Years</option>
        <option value="17">17 Years</option>
      </select>
    </div>
  );
};

const Room = ({
  roomCount,
  handleDecrementAdult,
  handleIncrementAdult,
  handleDecremenChild,
  handleIncrementChild,
  adultCount,
  childrenCount,
  childrenageArr,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-[16px] justify-center text-center flex mb-3">
        Room {roomCount}
      </h2>
      <div className="flex flex-row items-center justify-between w-full">
        <span className="w-2/4">Adults</span>
        <div className="w-2/4 flex justify-between">
          <button
            onClick={handleDecrementAdult}
            className="border-[1px] rounded-full px-2 border-[#1893F8] text-[#1893F8]"
          >
            -
          </button>
          <span>{adultCount}</span>
          <button
            onClick={handleIncrementAdult}
            className="border-[1px] rounded-full px-2 border-[#1893F8] text-[#1893F8]"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <span className="w-2/4">Children</span>
        <div className="w-2/4 flex justify-between">
          <button
            onClick={handleDecremenChild}
            className=" sticky border-[1px] rounded-full px-2 text-[#838688] opacity-50 border-[#838688]"
          >
            -
          </button>
          <span>{childrenCount}</span>
          <button
            onClick={handleIncrementChild}
            className="border-[1px] rounded-full px-2 border-[#1893F8] text-[#1893F8]"
          >
            +
          </button>
        </div>
      </div>

      {/* {childArr.length > 0 && <ChildAge childArr={childArr} />} */}
      {childrenageArr}
    </div>
  );
};
const TravelersOptions = ({ setTravelersInfo }) => {
  const [roomCount, setRoomCount] = useState(1);
  const [roomArr, setRoomArr] = useState([]);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childArr, setChildArr] = useState([]);
  const [childAge, setChildAge] = useState(0);
  const [childrenageArr, setChildrenageArr] = useState([]);
  const [roomInfo, setRoomInfo] = useState([]);
  // const [roomInfo, setRoomInfo] = useState(    {
  //   childAges: [],
  //   numOfAdults: 2
  // })

  const handleIncrementAdult = (e) => {
    e.preventDefault();
    if (adultCount < 6) setAdultCount((count) => count + 1);
  };

  const handleDecrementAdult = (e) => {
    e.preventDefault();
    if (adultCount > 1) setAdultCount((count) => count - 1);
  };

  const handleIncrementChild = (e) => {
    e.preventDefault();
    const obj = {};
    obj[childrenCount] = childAge;
    if (childrenCount < 4) {
      setChildArr([...childArr, obj]); //push childrencount as index, e.g. {[0]: childAge} into the array
      setChildrenageArr([
        ...childrenageArr,
        <ChildAge
          key={childrenCount}
          setChildAge={setChildAge}
          setChildArr={setChildArr}
        />,
      ]);
      setChildrenCount((count) => count + 1);
    }
  };

  const handleDecremenChild = (e) => {
    e.preventDefault();
    const tempArr = [...childrenageArr];
    tempArr.pop(); //deletes a ChildAge component
    if (childrenCount > 0) {
      setChildrenageArr(tempArr);
      setChildrenCount((count) => count - 1);
    }
  };

  const handleRoomClick = () => {
    // setRoomCount((prev) => prev + 1);
    // if (roomCount < 4) {
    //   setRoomArr([
    //     ...roomArr,
    //     <Room
    //       key={roomCount}
    //       handleDecrementAdult={handleDecrementAdult}
    //       handleIncrementAdult={handleIncrementAdult}
    //       handleDecremenChild={handleDecremenChild}
    //       handleIncrementChild={handleIncrementChild}
    //       adultCount={adultCount}
    //       childrenCount={childrenCount}
    //       childrenageArr={childrenageArr}
    //     />,
    //   ]);
    // }
  };

  const handleDoneOnClick = () => {
    console.log(childArr);
    setTravelersInfo([
      ...roomInfo,
      {
        childAges: childArr,
        numOfAdults: adultCount,
      },
    ]);
  };

  return (
    <div className="flex gap-3 border ml-[37px] h-auto  overflow-y-scroll absolute shadow-2xl bg-white p-3 w-[240px] rounded-2xl flex-col">
      <span className="font-bold text-[17px]"> Travelers </span>

      <Room
        key={1}
        roomCount={roomCount}
        handleDecrementAdult={handleDecrementAdult}
        handleIncrementAdult={handleIncrementAdult}
        handleDecremenChild={handleDecremenChild}
        handleIncrementChild={handleIncrementChild}
        adultCount={adultCount}
        childrenCount={childrenCount}
        childrenageArr={childrenageArr}
      />
      {roomArr}

      <div className="flex justify-end items-end  text-[#1893F8] font-[600] hover:underline">
        <button
          onClick={handleRoomClick}
          className="bg-[#71b9f5bd] hover:bg-[#1893F8] rounded-md text-white px-1 py-1"
        >
          Add room
        </button>
      </div>
      <button
        onClick={handleDoneOnClick}
        className="bg-[#1893F8] rounded-full py-2 text-white "
      >
        Done
      </button>
    </div>
  );
};

const Travelers = ({ setTravelersInfo, isHomePage = true }) => {
  // const [adultCount, setAdultCount] = useState(0);
  // const [childrenCount, setChildrenCount] = useState(0);
  // const [roomCount, setRoomCount] = useState({
  //   numOfAdults: 0,
  //   childAges: [],
  // });

  const handleOnChange = (e) => {};

  const handleOnClick = () => {
    console.log('travel');
  };

  return (
    <div className="w-full flex flex-col">
      {isHomePage && (
        <label
          htmlFor="roomInput"
          className="-mb-[4px] hidden lg:block ml-[30px] text-[13px] leading-6"
        >
          Travelers
        </label>
      )}
      <input
        type="text"
        id="roomInput"
        className={`py-3 px-0  text-[14px] lg:text-[12px] xl:text-[14px]  pl-[22px] lg:pl-[7px] bg-[#fff]  xl:w-[300px] md:lg:w-auto sm:w-[auto] w-full text-sm rounded-md  ml-0 focus:outline-none ${
          isHomePage && 'ml-[10px] md:ml-6'
        }`}
        value="1 Rooms , 2 Adults  , 0 Children"
        onChange={handleOnChange}
        onClick={handleOnClick}
      />
      <TravelersOptions setTravelersInfo={setTravelersInfo} />
    </div>
  );
};

export default Travelers;
