import { FixedSizeList as List } from 'react-window';

const HotelList = ({ hotels, isSearching }) => {
  const HotelListItem = ({ index, style }) => {
    return (
      <div
        style={style}
        className="border font-Montserrat border-[#E0E0E0] rounded-lg lg:gap-0 gap-2.5 flex flex-col lg:flex-row lg:px-3 px-0 py-0 lg:py-3"
      >
        <div className="flex flex-col w-full lg:w-[23%] cursor-pointer">
          <img
            src={hotels[index].heroImage}
            id={hotels[index].id}
            alt={`${hotels[index].name} image`}
            className="h-[305px] object-cover lg:h-[212px] rounded-md"
            loading="lazy"
          />
        </div>
        <div className="px-2 lg:px-6 py-[2px] flex flex-col w-full lg:w-[60%] justify-between">
          <div className="flex lg:gap-0 gap-2.5 flex-col justify-between h-full">
            <span className="font-bold cursor-pointer text-[18px] 2xl:text-[24px]">
              {hotels[index].name}
            </span>
            <div className="flex flex-row space-x-2">
              <div className="flex flex-row space-x-2">
                <svg
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                    fill="#FFD751"
                  ></path>
                  <path
                    d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                    fill="#F4C82A"
                  ></path>
                </svg>
                <svg
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                    fill="#FFD751"
                  ></path>
                  <path
                    d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                    fill="#F4C82A"
                  ></path>
                </svg>
                <svg
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                    fill="#FFD751"
                  ></path>
                  <path
                    d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                    fill="#F4C82A"
                  ></path>
                </svg>
                <svg
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                    fill="#FFD751"
                  ></path>
                  <path
                    d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                    fill="#F4C82A"
                  ></path>
                </svg>
                <svg
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                    fill="#FFD751"
                  ></path>
                  <path
                    d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                    fill="#F4C82A"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="text-[13px] flex flex-row items-center justify-around">
              <span className="md:flex hidden w-full lg:w-1/3 text-[#5C6A7A]">
                {hotels[index].contact.address.line1}
              </span>
              <button
                className="text-[#5C6A7A] w-full lg:w-1/3"
                aria-describedby="popup-522"
              >
                Show on map
              </button>
              <span className="text-[#5C6A7A] w-full lg:w-1/3">
                {hotels[index].distance} km from center
              </span>
            </div>
            <div className="text-[15px] px-1.5 md:px-6">
              <ul className="flex flex-row  w-full justify-between">
                <li className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1 text-[12px] 2xl:text-[16px] items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path>
                    </svg>{' '}
                    <span> Wi Fi</span>{' '}
                  </div>
                </li>
                <div
                  className="mt-1.5 bg-[#5C6A7A] w-[1px]"
                  style={{ height: 'initial' }}
                ></div>
                <li className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1 text-[12px] 2xl:text-[16px] items-center">
                    {' '}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
                    </svg>
                    <span> Television</span>
                  </div>
                </li>
                <div
                  className="mt-1.5 bg-[#5C6A7A] w-[1px]"
                  style={{ height: 'initial' }}
                ></div>
                <li className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1 text-[12px] 2xl:text-[16px] items-center">
                    {' '}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"></path>
                    </svg>
                    Parking
                  </div>
                </li>
                <div
                  className="mt-1.5 bg-[#5C6A7A] w-[1px]"
                  style={{ height: 'initial' }}
                ></div>
                <li className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1 text-[12px] 2xl:text-[16px] items-center">
                    {' '}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path>
                    </svg>
                    <span> InterNet</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#E0E0E0] w-[1px]  mt-3 mb-3 py-3 mr-2 lg:block hidden"></div>
        <div className="flex flex-col cursor-pointer w-full justify-between lg:w-[17%]">
          <div className="lg:flex hidden flex-row justify-between text-center items-center ">
            <span className="line-through text-[17px] text-start text-[#5C6A7A]">
              {' '}
              ${hotels[index].rate.baseRate.toFixed(0)}
            </span>
            <span className="text-[#1B1B1B] text-end font-bold text-[23px]">
              {' '}
              ${hotels[index].rate.dailyTotalRate.toFixed(0)}
              <span className="text-[9px]">/night</span>
            </span>
          </div>
          <div className="text-[#1B1B1B] lg:flex hidden flex-col font-bold text-center text-[17px]">
            <span>
              Save $
              {(
                (hotels[index].rate.baseRate -
                  hotels[index].rate.dailyTotalRate) *
                7
              ).toFixed(0)}{' '}
            </span>
            <span className="text-[8px]">for 7 night(s)</span>
          </div>
          <div className="lg:flex hidden flex-col text-center pl-1 items-center">
            <span className="text-[17px]">
              ${hotels[index].rate.totalRate.toFixed(0)}
              <span className="text-[9px] text-[#5C6A7A]"> for 1 room</span>
            </span>
            <span className="text-[9px] text-center text-[#5C6A7A]">
              Includes taxes and fees
            </span>
          </div>
          <div className=" lg:hidden flex items-center text-start flex-row justify-between px-3">
            <div className="flex flex-col text-center lg:text-end">
              <span className="line-through text-[17px] text-[#5C6A7A]">
                {' '}
                ${hotels[index].rate.baseRate.toFixed(0)}{' '}
              </span>
              <span className="text-[#1B1B1B] font-bold text-[23px]">
                {' '}
                ${hotels[index].rate.dailyTotalRate.toFixed(0)}{' '}
              </span>
              <span className="text-[9px] ">per night per room</span>
            </div>
            <div className="items-center justify-end flex flex-col"></div>
            <div className="flex flex-col text-end">
              <span>${hotels[index].rate.totalRate.toFixed(0)} total</span>
              <span className="text-[9px] text-[#5C6A7A]"> for 1 room</span>
              <span className="text-[9px] text-[#5C6A7A]">
                Includes taxes and fees
              </span>
            </div>
          </div>
          <span className="text-[#1893F8] w-full lg:hidden  text-center text-[15px]">
            Total Savings $
            {(
              (hotels[index].rate.baseRate -
                hotels[index].rate.dailyTotalRate) *
              7
            ).toFixed(0)}{' '}
            for 7 night(s)
          </span>
          <div className="flex justify-center mb-2 lg:mb-0 items-end">
            <button
              className="bg-[#1893F8]  lg:w-[auto] rounded-full px-8 lg:px-4  text-[16px] lg:text-[12px] xl:text-[16px] font-bold py-2 text-white 
                            "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  relative z-1 space-y-2 lg:w-9/12">
      <div className="flex flex-row gap-3 text-[15px]">
        <span className="text-[15px]">
          {isSearching
            ? 'Getting lowest prices...'
            : hotels.length > 0 && `${hotels.length} Available Hotels`}
        </span>
      </div>
      <div className="space-y-3">
        <div className="relative">
          <List height={1500} itemCount={hotels.length} itemSize={300}>
            {HotelListItem}
          </List>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
