const locations = [
  {
    id: 0,
    name: 'The Beverly Hills Hotel',
    city: 'Los Angeles, CA',
    imagePath: '/images/Beverly.e7211060de34ecd274e5.webp',
    discountedPrice: 592,
    originalPrice: 701,
  },
  {
    id: 1,
    name: 'The Plaza Hotel',
    city: 'New York, NY',
    imagePath: '/images/plaza.5559d10b9d79be41c76f.webp',
    discountedPrice: 478,
    originalPrice: 625,
  },
  {
    id: 2,
    name: 'Fontainebleau Miami Beach',
    city: 'Miami, FL',
    imagePath: '/images/FountainBleau.9bdd50424dcc0197bc2f.webp',
    discountedPrice: 237,
    originalPrice: 312,
  },
  {
    id: 3,
    name: 'The Venetian Resort',
    city: 'Las Vegas, NV',
    imagePath: '/images/Venetian.9ef8857b63a030582571.webp',
    discountedPrice: 185,
    originalPrice: 287,
  },
  {
    id: 4,
    name: 'Four Seasons Resort Maui',
    city: 'Hawaii',
    imagePath: '/images/fourseasons.3dc0b4a3dfac9a0edd78.webp',
    discountedPrice: 631,
    originalPrice: 287,
  },
  {
    id: 5,
    name: 'Waldorf Astoria',
    city: 'Amsterdam',
    imagePath: '/images/Waldorf.9d5d744906042a0809c3.webp',
    discountedPrice: 367,
    originalPrice: 456,
  },
  {
    id: 6,
    name: 'The Savoy',
    city: 'London',
    imagePath: '/images/Savoy.c46818790c2030bdf1e4.webp',
    discountedPrice: 380,
    originalPrice: 524,
  },
  {
    id: 7,
    name: 'The Ritz',
    city: 'Paris',
    imagePath: '/images/Ritz.4cddbef57507935f703c.webp',
    discountedPrice: 487,
    originalPrice: 982,
  },
];

const PopularLocations = () => {
  return (
    <section id="locations" className="bg-[#F8F8F8] pb-3">
      <div className="container flex flex-col px-4 lg:w-10/12 mx-auto   mt-10 space-y-12 md:space-y-7">
        <div className="flex flex-col space-y-7">
          <div className="text-center items-center flex flex-row  justify-center  md:justify-between  md:text-left">
            <div>
              <span className="text-[#0276D4] font-bold text-sm">
                Popular Locations
              </span>
              <h2 className="text-4xl font-bold text-center font-homepage text-bluedark md:text-left">
                Top Hotels{' '}
              </h2>
            </div>
            <div className="md:flex flex-row space-x-5 hidden">
              <button
                aria-label="Previous Location"
                className="hover:bg-[#0276D4]  bg-[#fff] fill-darkgreyishblue hover:fill-white px-4 py-3 rounded-md"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="darkgreyishblue"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-white rotate-180 "
                >
                  <path
                    d="M0.434339 0.448962C0.156149 0.73334 1.92541e-06 1.11803 1.87353e-06 1.51901C1.82165e-06 1.91999 0.156148 2.30468 0.434339 2.58906L5.7218 8.03795L0.434337 13.4109C0.156147 13.6953 2.48405e-07 14.08 1.96527e-07 14.481C1.44649e-07 14.882 0.156147 15.2667 0.434337 15.551C0.57319 15.6933 0.738387 15.8062 0.9204 15.8833C1.10241 15.9603 1.29764 16 1.49482 16C1.69199 16 1.88722 15.9603 2.06923 15.8833C2.25125 15.8062 2.41644 15.6933 2.5553 15.551L8.8883 9.11558C9.02829 8.97448 9.13941 8.80661 9.21524 8.62166C9.29107 8.4367 9.33011 8.23831 9.33011 8.03795C9.33011 7.83758 9.29107 7.63919 9.21524 7.45424C9.13941 7.26928 9.02829 7.10141 8.8883 6.96031L2.5553 0.448963C2.41645 0.306702 2.25125 0.193787 2.06923 0.11673C1.88722 0.0396741 1.692 2.24914e-07 1.49482 1.98704e-07C1.29764 1.72493e-07 1.10241 0.039674 0.920402 0.11673C0.738389 0.193787 0.573192 0.306702 0.434339 0.448962Z"
                    fill="darkgreyishblue"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Next Location"
                className="bg-[#0276D4] px-4 py-3 rounded-md"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M0.434339 0.448962C0.156149 0.73334 1.92541e-06 1.11803 1.87353e-06 1.51901C1.82165e-06 1.91999 0.156148 2.30468 0.434339 2.58906L5.7218 8.03795L0.434337 13.4109C0.156147 13.6953 2.48405e-07 14.08 1.96527e-07 14.481C1.44649e-07 14.882 0.156147 15.2667 0.434337 15.551C0.57319 15.6933 0.738387 15.8062 0.9204 15.8833C1.10241 15.9603 1.29764 16 1.49482 16C1.69199 16 1.88722 15.9603 2.06923 15.8833C2.25125 15.8062 2.41644 15.6933 2.5553 15.551L8.8883 9.11558C9.02829 8.97448 9.13941 8.80661 9.21524 8.62166C9.29107 8.4367 9.33011 8.23831 9.33011 8.03795C9.33011 7.83758 9.29107 7.63919 9.21524 7.45424C9.13941 7.26928 9.02829 7.10141 8.8883 6.96031L2.5553 0.448963C2.41645 0.306702 2.25125 0.193787 2.06923 0.11673C1.88722 0.0396741 1.692 2.24914e-07 1.49482 1.98704e-07C1.29764 1.72493e-07 1.10241 0.039674 0.920402 0.11673C0.738389 0.193787 0.573192 0.306702 0.434339 0.448962Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <span className="text-[15px] 2xl:text-[18px] hidden md:block w-[80%]">
            Explore the world with Chekins. Join us on thrilling globetrotting
            journeys, coupled with exceptional accommodations at top-notch
            hotels. If you're driven by the same wanderlust, look no further for
            your ultimate destination!
          </span>
        </div>
        <div className="overflow-x-scroll overflow-y-hidden flex flex-row space-x-3">
          <div className="sc-jSUZER gvZxJM rec rec-carousel-wrapper ">
            <div
              className="sc-eDvSVe eTfUIS rec rec-carousel"
              style={{ height: '523px' }}
            >
              <div className="sc-dkrFOg itwfLR rec rec-slider-container">
                <div
                  className="sc-hLBbgP gpusub rec rec-slider"
                  style={{
                    transition: 'all 500ms ease 0s',
                    left: '-1746.67px',
                    right: 'auto',
                    top: 'auto',
                  }}
                >
                  <div
                    className="rec rec-swipable"
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    {locations.map((location) => (
                      <div
                        className={`rec rec-carousel-item rec-carousel-item-${location.id} rec-carousel-item-hidden`}
                      >
                        <div
                          id={location.id}
                          className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                          style={{ width: '349.333px', padding: '0px' }}
                        >
                          <div
                            className="flex relative flex-col items-center gap-2"
                            tabIndex="-1"
                          >
                            <div className="">
                              <div className="bg-[#fff] px-1.5 py-1.5 rounded-2xl">
                                <img
                                  alt="bevery"
                                  className=" border-8 rounded-2xl object-cover cursor-pointer h-[429px] w-[320px] 2xl:w-[348px]"
                                  src={location.imagePath}
                                />
                              </div>
                              <div className="rounded-full absolute top-4 items-center space-x-2 right-5 bg-[#fff] flex flex-row px-3 py-[1px]">
                                <svg
                                  width="15"
                                  height="15"
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
                                <span className="text-[#5C6A7A]">5</span>
                              </div>
                            </div>
                            <div className="flex px-2 w-full justify-between items-center flex-row">
                              <div className="flex flex-col space-y-1">
                                <span className="font-bold text-[16px] text-[#002248]">
                                  {location.name}
                                </span>
                                <span className="text-[#5C6A7A]  opacity-70 text-[12px]">
                                  {location.city}
                                </span>
                                <div className="flex space-x-2 items-center flex-row">
                                  <span className="font-bold text-[16px] 2xl:text-[18px]  text-[#002248]">
                                    ${location.discountedPrice}
                                  </span>
                                  <span className="text-[#5C6A7A] text-[12px] 2xl:text-[15px]  line-through">
                                    ${location.originalPrice}
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col justify-end items-center">
                                <button className="bg-[#002248] px-2 text-[12px] py-[6px] rounded-full mb-2 mt-3 text-[#fff]">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-1 md:hidden cursor-pointer">
              <div className="mt-4 rounded-full  h-1 bg-[#5C6A7A] w-3 bg-opacity-40"></div>
              <div className="mt-4 rounded-full  h-1 bg-[#5C6A7A] w-3 bg-opacity-40"></div>
              <div className="mt-4 rounded-full  h-1 bg-[#0276D4] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;
