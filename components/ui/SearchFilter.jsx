import { useEffect, useState } from 'react';
import SearchMap from './SearchMap';

const propertyTypes = [
  { id: 'typeHotel', label: 'Hotel', count: 1249 },
  { id: 'typeVilla', label: 'Villas', count: 1 },
  { id: 'typeResort', label: 'Resorts', count: 1 },
  { id: 'typeHouse', label: 'Houses', count: 65 },
  { id: 'typePalace', label: 'Palace', count: 2 },
  { id: 'typeApartment', label: 'Apartment', count: 210 },
  { id: 'typeCondo', label: 'Condo', count: 1 },
  { id: 'typeInn', label: 'Inn', count: 132 },
];

const popularFilters = [
  { id: 'includeBreakfastFilter', label: 'Free Breakfast', count: 545 },
  { id: 'refundableFilter', label: 'Refundable', count: 947 },
];

const popularAmenities = [
  { id: 'swimmingPool', label: 'Swimming Pool', count: 428 },
  { id: 'wifi', label: 'Wifi', count: 1622 },
  { id: 'parking', label: 'Parking', count: 764 },
  { id: 'breakfast', label: 'Breakfast', count: 795 },
  { id: 'businessCenter', label: 'Business Center', count: 739 },
  { id: 'bar', label: 'Bar', count: 900 },
];

const SearchFilter = ({ hotels, setFilteredHotels }) => {
  const [searchText, setSearchText] = useState('');
  const [checkedPropertyTypes, setCheckPropertyTypes] = useState([]);
  const [checkedPopularFilters, setCheckedPopularFilters] = useState([]);
  const [checkedPopularAmenities, setCheckedPopularAmenities] = useState([]);

  const counter = hotels.reduce(
    (accumulator, hotel) => {
      if (hotel.type === 'Hotel' || hotel.type === '') {
        accumulator['typeHotel'] = accumulator?.typeHotel + 1 || 1;
      } else if (hotel.type === 'Villa') {
        accumulator['typeVilla'] = accumulator?.typeVilla + 1 || 1;
      } else if (hotel.type === 'Resort') {
        accumulator['typeResort'] = accumulator?.typeResort + 1 || 1;
      } else if (hotel.type === 'House') {
        accumulator['typeHouse'] = accumulator?.typeHouse + 1 || 1;
      } else if (hotel.type === 'Palace') {
        accumulator['typePalace'] = accumulator?.typePalace + 1 || 1;
      } else if (hotel.type === 'Apartment') {
        accumulator['typeApartment'] = accumulator?.typeApartment + 1 || 1;
      } else if (hotel.type === 'Condo') {
        accumulator['typeCondo'] = accumulator?.typeCondo + 1 || 1;
      } else if (hotel.type === 'Inn') {
        accumulator['typeInn'] = accumulator?.typeInn + 1 || 1;
      }

      return accumulator;
    },
    {
      typeHotel: 0,
      typeVilla: 0,
      typeResort: 0,
      typeHouse: 0,
      typePalace: 0,
      typeApartment: 0,
      typeCondo: 0,
      typeInn: 0,
    }
  );
  useEffect(() => {
    let newFilteredHotels = hotels.filter((hotel) => {
      return (
        (checkedPropertyTypes.includes('typeHotel') &&
          (hotel.type === 'Hotel' || hotel.type === '')) ||
        (checkedPropertyTypes.includes('typeVilla') &&
          hotel.type === 'Villa') ||
        (checkedPropertyTypes.includes('typeResort') &&
          hotel.type === 'Resort') ||
        (checkedPropertyTypes.includes('typeHouse') &&
          hotel.type === 'House') ||
        (checkedPropertyTypes.includes('typePalace') &&
          hotel.type === 'Palace') ||
        (checkedPropertyTypes.includes('typeApartment') &&
          hotel.type === 'Apartment') ||
        (checkedPropertyTypes.includes('typeCondo') &&
          hotel.type === 'Condo') ||
        (checkedPropertyTypes.includes('typeInn') && hotel.type === 'Inn') ||
        (checkedPopularFilters.includes('includeBreakfastFilter') &&
          hotel.options?.freeBreakfast === true) ||
        (checkedPopularFilters.includes('refundableFilter') &&
          hotel.options?.refundable === true) ||
        (checkedPopularAmenities.includes('swimmingPool') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Swimming Pool'
          )) ||
        (checkedPopularAmenities.includes('wifi') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Internet'
          )) ||
        (checkedPopularAmenities.includes('parking') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Parking'
          )) ||
        (checkedPopularAmenities.includes('breakfast') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Breakfast'
          )) ||
        (checkedPopularAmenities.includes('businessCenter') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Business Center'
          )) ||
        (checkedPopularAmenities.includes('bar') &&
          hotel.facilityGroups?.some(
            (facilityGroup) => facilityGroup.name === 'Bar'
          ))
      );
    });

    if (searchText !== '') {
      newFilteredHotels = newFilteredHotels.filter((hotel) =>
        hotel.name?.toLowerCase().includes(searchText?.toLowerCase())
      );
    }

    setFilteredHotels(
      newFilteredHotels.length > 0 ? newFilteredHotels : hotels
    );
  }, [
    checkedPropertyTypes,
    checkedPopularFilters,
    checkedPopularAmenities,
    searchText,
  ]);

  return (
    <div className="pt-3 border-[#E0E0E0] border-[2px] rounded-lg  px-2 py-2 text-[#002248] flex-col flex gap-3 font-Montserrat">
      <div className="w-full text-[#5C6A7A] font-normal text-[15px] flex items-end justify-end">
        <button>Reset All</button>
      </div>
      <div className="border-[#E0E0E0] border-[1px]"></div>
      <h2 className="font-bold text-[18px] mt-2">Search</h2>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="relative text-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                fill="none"
                stroke="#0C08AE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <label htmlFor="nameFilter" className="visually-hidden">
              Location Name
            </label>
            <input
              type="text"
              className="py-3 text-sm text-black border-[#0C08AE] border-[2px] w-full rounded-md pl-10 focus:outline-none"
              id="nameFilter"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <div className="border-[#E0E0E0] border-[1px]"></div>
        <label className="font-bold text-[18px] mt-2">PROPERTY TYPE</label>
        {propertyTypes.map((propertyType) => (
          <div
            key={propertyType.id}
            className="flex flex-row w-full justify-between items-center"
          >
            <div className="flex flex-row gap-1 items-center">
              <input
                id={propertyType.id}
                className="w-[29px] h-[19px]"
                type="checkbox"
                checked={checkedPropertyTypes.includes(propertyType.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckPropertyTypes([
                      ...checkedPropertyTypes,
                      propertyType.id,
                    ]);
                  } else {
                    setCheckPropertyTypes(
                      checkedPropertyTypes.filter(
                        (type) => type !== propertyType.id
                      )
                    );
                  }
                }}
              />
              <label htmlFor={propertyType.id}>{propertyType.label}</label>
            </div>
            <span className="text-[#5C6A7A] text-[15px]">
              [{counter[propertyType.id]}]
            </span>
          </div>
        ))}
        <div className="border-[#E0E0E0] border-[1px]"></div>
        <label className="font-bold text-[18px] mt-2">FILTER BY PRICE</label>
        <div className="flex  flex-row gap-2  justify-between items-center">
          <div className="relative w-1/2 text-gray-600">
            <input
              type="number"
              id="priceMinFilter"
              placeholder="Min"
              className="py-3 text-sm text-black border-[#0C08AE] border-[2px] w-full rounded-md pl-10 focus:outline-none"
              value=""
              readOnly
            />
          </div>
          <div className="relative w-1/2 text-gray-600">
            <input
              type="number"
              id="priceMaxFilter"
              placeholder="Max"
              className="py-3 text-sm text-black border-[#0C08AE] border-[2px] w-full rounded-md pl-10 focus:outline-none"
              value=""
              readOnly
            />
          </div>
        </div>
        <div className="border-[#E0E0E0] border-[1px]"></div>
        <label className="font-bold text-[18px] mt-2">STAR RATING</label>
        <div className="flex border-[2px] px-2 py-2 flex-row w-full border-[#0C08AE] justify-between  items-center">
          <button className="text-[#0C08AE] font-bold flex flex-row gap-[2px] items-center">
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
            All
          </button>
          <button className=" flex flex-row gap-[2px] items-center">
            <svg
              height="17"
              viewBox="0 0 18 18"
              fill="#E0E0E0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                fill="#E0E0E0"
              ></path>
              <path
                d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                fill="#E0E0E0"
              ></path>
            </svg>
            1
          </button>
          <button className=" flex flex-row gap-[2px] items-center">
            <svg
              height="17"
              viewBox="0 0 18 18"
              fill="#E0E0E0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                fill="#E0E0E0"
              ></path>
              <path
                d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                fill="#E0E0E0"
              ></path>
            </svg>
            2
          </button>
          <button className=" flex flex-row gap-[2px] items-center">
            <svg
              height="17"
              viewBox="0 0 18 18"
              fill="#E0E0E0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                fill="#E0E0E0"
              ></path>
              <path
                d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                fill="#E0E0E0"
              ></path>
            </svg>
            3
          </button>
          <button className=" flex flex-row gap-[2px] items-center">
            <svg
              height="17"
              viewBox="0 0 18 18"
              fill="#E0E0E0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                fill="#E0E0E0"
              ></path>
              <path
                d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                fill="#E0E0E0"
              ></path>
            </svg>
            4
          </button>
          <button className=" flex flex-row gap-[2px] items-center">
            <svg
              height="17"
              viewBox="0 0 18 18"
              fill="#E0E0E0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9307 6.84324C17.764 6.333 17.3209 5.96115 16.7875 5.88411L12.284 5.23277L10.2697 1.17174C10.0313 0.690719 9.53896 0.38623 8.99991 0.38623C8.46095 0.38623 7.96872 0.690812 7.73016 1.17183L5.71632 5.23277L1.21246 5.88411C0.679076 5.96115 0.235846 6.333 0.0693158 6.84324C-0.0972141 7.35347 0.0417496 7.9135 0.42777 8.28789L3.68671 11.4489L2.91722 15.9128C2.82612 16.4415 3.04448 16.9759 3.48053 17.2912C3.72721 17.4695 4.0194 17.5603 4.313 17.5603C4.53843 17.5603 4.76472 17.5068 4.97185 17.3983L8.99991 15.2907L13.0283 17.3984C13.5054 17.6477 14.0834 17.6064 14.5197 17.291C14.9557 16.9758 15.1741 16.4414 15.083 15.9127L14.3137 11.4487L17.5722 8.2878C17.9582 7.91341 18.0972 7.35338 17.9307 6.84324Z"
                fill="#E0E0E0"
              ></path>
              <path
                d="M17.9305 6.84217C17.7639 6.33202 17.3208 5.96018 16.7874 5.88314L12.2839 5.23198L10.2698 1.17076C10.0313 0.689742 9.53896 0.385254 9 0.385254V15.2898L13.0284 17.3973C13.5055 17.6467 14.0835 17.6054 14.5197 17.2899C14.9558 16.9747 15.1742 16.4403 15.0831 15.9117L14.3138 11.4478L17.5724 8.28663C17.9582 7.91243 18.0971 7.35231 17.9305 6.84217Z"
                fill="#E0E0E0"
              ></path>
            </svg>
            5
          </button>
        </div>
        <div className="border-[#E0E0E0] border-[1px]"></div>
        <label className="font-bold text-[18px] mt-2">POPULAR FILTERS</label>

        {popularFilters.map((popularFilter) => (
          <div
            key={popularFilter.id}
            className="flex flex-row w-full justify-between items-center"
          >
            <div className="flex flex-row gap-1 items-center">
              <input
                id={popularFilter.id}
                className="w-[29px] h-[19px]"
                type="checkbox"
                checked={checkedPopularFilters.includes(popularFilter.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckedPopularFilters([
                      ...checkedPopularFilters,
                      popularFilter.id,
                    ]);
                  } else {
                    setCheckedPopularFilters(
                      checkedPopularFilters.filter(
                        (popular) => popular !== popularFilter.id
                      )
                    );
                  }
                }}
              />
              <label htmlFor={popularFilter.id}>{popularFilter.label}</label>
            </div>
            <span className="text-[#5C6A7A] text-[15px]">
              [{popularFilter.count}]
            </span>
          </div>
        ))}

        <div className="border-[#E0E0E0] border-[1px]"></div>
        <label className="font-bold text-[18px] mt-2">POPULAR AMENITIES</label>
        {popularAmenities.map((popularAmenity) => (
          <div
            key={popularAmenity.id}
            className="flex flex-row w-full justify-between items-center"
          >
            <div className="flex flex-row gap-1 items-center">
              <input
                id={popularAmenity.id}
                className="w-[29px] h-[19px]"
                type="checkbox"
                checked={checkedPopularAmenities.includes(popularAmenity.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckedPopularAmenities([
                      ...checkedPopularAmenities,
                      popularAmenity.id,
                    ]);
                  } else {
                    setCheckedPopularAmenities(
                      checkedPopularAmenities.filter(
                        (amenity) => amenity !== popularAmenity.id
                      )
                    );
                  }
                }}
              />
              <label htmlFor={popularAmenity.id}>{popularAmenity.label}</label>
            </div>
            <span className="text-[#5C6A7A] text-[15px]">
              [{popularAmenity.count}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
