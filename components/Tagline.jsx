import React from 'react';
import SearchForm from './SearchForm';

const Tagline = () => {
  return (
    <div className="container bg-[#37B7FE] rounded-lg lg:w-10/12 flex flex-col  pt-10 px-6 mx-auto  ">
      <div className="flex  space-y-0 items-center justify-between md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-3 lg:mb-[44px] space-y-6 w-full ">
          <h1 className="max-w-full  font-header flex flex-col text-[33px] 2xl:text-[42px] font-[900] text-white text-center  md:text-left">
            Hotel Bookings Redefined
          </h1>
          <h3 className="text-[15px] w-full xl:w-[80%] 2xl:text-[18px] text-start font-[400] flex flex-col text-white md:text-left">
            We are a travel tech company, offering up to 40% savings on hotel
            bookings, by providing you direct access to whole sale prices.{' '}
            Compare our prices with Expedia or Booking.com and see for yourself!
          </h3>
        </div>
        <div className="lg:flex flex-end justify-end items-end hidden"></div>
      </div>
      <SearchForm />
    </div>
  );
};

export default Tagline;
