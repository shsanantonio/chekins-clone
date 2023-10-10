'use client';

import { useEffect, useState } from 'react';
import SearchForm from '@/components/ui/SearchForm';
import SearchMap from '@/components/ui/SearchMap';
import Sort from '@/components/ui/Sort';
import SearchFilter from '@/components/ui/SearchFilter';
import HotelList from '@/components/ui/HotelList';

const HotelListing = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchHotels = async () => {
    setIsSearching(true);

    const body = {
      searchParams: {
        location: {
          id: '1738587',
          name: 'The Beverly Hills Hotel',
          fullName: 'The Beverly Hills Hotel, Beverly Hills, California, US',
          type: 'Hotel',
          city: 'Beverly Hills',
          state: 'California',
          country: 'US',
          coordinates: {
            lat: 34.081535,
            long: -118.41385,
          },
          referenceId: '39600805',
          referenceScore: 100000,
          isTermMatch: true,
        },
        startDate: '2023-10-25T00:00:00-07:00',
        endDate: '2023-10-27T00:00:00-07:00',
        adults: 2,
        children: 0,
        occupancies: [
          {
            numOfAdults: 2,
            childAges: [],
          },
        ],
        isType: null,
      },
      currency: 'USD',
      ipAddress: '',
      correlationId: 'chkID07a72fa3-7354-49e5-b81e-1ee4585c94fd',
    };

    try {
      const response = await fetch(
        'https://checkins-hotel-api.vercel.app/api/v1/hotels/content/hotelcontent/getHotelContent',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();

      setHotels(data.hotels);
      setFilteredHotels(data.hotels);
      setIsSearching(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="w-full container mx-auto lg:w-full xl:w-11/12 items-center">
      <SearchForm isHomePage={false} />
      <div className="font-Montserrat container px-0 lg:px-3 xl:px-0 lg:w-full xl:w-11/12 flex flex-col mt-4 mx-auto">
        <div className="flex flex-row md:space-x-4 space-x-0 space-y-4 md:space-y-0">
          <div className="hidden  relative z-10  lg:flex flex-col w-3/12 space-y-2">
            <SearchMap />
            <Sort />
            <SearchFilter
              hotels={hotels}
              setFilteredHotels={setFilteredHotels}
            />
          </div>
          <HotelList hotels={filteredHotels} isSearching={isSearching} />
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
