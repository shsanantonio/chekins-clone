'use client';

import SearchForm from '@/components/ui/SearchForm';

const HotelListing = () => {
  return (
    <div className="w-full container mx-auto lg:w-full xl:w-11/12 items-center">
      <SearchForm isHomePage={false} />
      <div className="font-Montserrat container px-0 lg:px-3 xl:px-0 lg:w-full xl:w-11/12 flex flex-col mt-4 mx-auto">
        <div className="flex flex-row md:space-x-4 space-x-0 space-y-4 md:space-y-0">
          <div className="hidden  relative z-10  lg:flex flex-col w-3/12 space-y-2">
            Filters
          </div>
          <div>Hotel List</div>
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
