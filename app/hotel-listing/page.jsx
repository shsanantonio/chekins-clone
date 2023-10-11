'use client';

import { useEffect, useState } from 'react';
import SearchForm from '@/components/ui/SearchForm';
import SearchMap from '@/components/ui/SearchMap';
import Sort from '@/components/ui/Sort';
import SearchFilter from '@/components/ui/SearchFilter';
import HotelList from '@/components/ui/HotelList';

const defaultSearchParams = {
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
  ipAddress: '185.187.168.191',
  correlationId: 'chkIDffe5aefa-817c-4fe3-a602-bb2135909b1f',
};

const HotelListing = () => {
  const [hotels, setHotels] = useState([]);
  const [availableHotels, setAvailableHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchFormData, setSearchFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('searchParams');

      return value ? JSON.parse(value) : defaultSearchParams;
    }

    return defaultSearchParams;
  });

  const fetchHotels = async () => {
    setIsSearching(true);

    try {
      const response = await fetch(
        'https://checkins-hotel-api.vercel.app/api/v1/hotels/content/hotelcontent/getHotelContent',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(searchFormData),
        }
      );
      const data = await response.json();

      return data.hotels;
    } catch (error) {}
  };

  const fetchHotelAvailability = async () => {
    setIsSearching(true);

    try {
      const response = await fetch(
        'https://checkins-hotel-api.vercel.app/api/v1/hotels/availability',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(searchFormData),
        }
      );
      const data = await response.json();

      return data.hotels;
    } catch (error) {}
  };

  useEffect(() => {
    Promise.all([fetchHotels(), fetchHotelAvailability()]).then(
      ([hotels, hotelAvailabilities]) => {
        const newHotels = hotelAvailabilities.map((hotelAvailability) => {
          const details = hotels.find(
            (hotel) => hotel.id === hotelAvailability.id
          );

          return {
            ...hotelAvailability,
            ...details,
          };
        });

        const sortedHotels = newHotels.sort((a, b) =>
          Number(a.relevanceScore) < Number(b.relevanceScore) ? 1 : -1
        );

        setAvailableHotels(sortedHotels);
        setFilteredHotels(sortedHotels);
        setIsSearching(false);
      }
    );
  }, []);

  return (
    <div className="relative w-full container mx-auto lg:w-full xl:w-11/12 items-center">
      <SearchForm isHomePage={false} />
      <div className="font-Montserrat container px-0 lg:px-3 xl:px-0 lg:w-full xl:w-11/12 flex flex-col mt-4 mx-auto">
        <div className="flex flex-row md:space-x-4 space-x-0 space-y-4 md:space-y-0">
          <div className="hidden  relative z-10  lg:flex flex-col w-3/12 space-y-2">
            <SearchMap />
            <Sort />
            <SearchFilter
              hotels={availableHotels}
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
