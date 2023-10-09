'use client';

const Travelers = () => {
  const handleonChange = (e) => {};
  return (
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
        onChange={handleonChange}
      />
    </div>
  );
};

export default Travelers;
