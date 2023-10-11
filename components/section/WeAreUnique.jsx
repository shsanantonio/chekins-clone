async function getData() {
  try {
    const res = await fetch(
      'https://member-backend.vercel.app/api/v1/whyChooseUs'
    );

    return await res.json();
  } catch (error) {}
}

const WeAreUnique = async () => {
  const offers = await getData();

  return (
    <section id="we-are-unique" className="">
      <div className="container flex flex-col px-4 font-Montserrat lg:w-10/12 mx-auto mt-10 space-y-12 md:space-y-6">
        <div className="flex flex-col space-y-12">
          <div className="text-center flex flex-row justify-center  items-center md:justify-between  md:text-left">
            <div className="justify-center items-center">
              <span className="text-[#1893f8] font-bold text-sm">
                We are unique
              </span>
              <h2 className="font-homepage text-4xl font-bold text-center text-bluedark md:text-left">
                Only we Offer
              </h2>
            </div>
            <div className="md:flex flex-row space-x-5 hidden">
              <button
                aria-label="Previous Benefits"
                className="hover:bg-[#1893F8] fill-darkgreyishblue hover:fill-white px-4 py-3 rounded-md"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="darkgreyishblue"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-white rotate-180"
                >
                  <path
                    d="M0.434339 0.448962C0.156149 0.73334 1.92541e-06 1.11803 1.87353e-06 1.51901C1.82165e-06 1.91999 0.156148 2.30468 0.434339 2.58906L5.7218 8.03795L0.434337 13.4109C0.156147 13.6953 2.48405e-07 14.08 1.96527e-07 14.481C1.44649e-07 14.882 0.156147 15.2667 0.434337 15.551C0.57319 15.6933 0.738387 15.8062 0.9204 15.8833C1.10241 15.9603 1.29764 16 1.49482 16C1.69199 16 1.88722 15.9603 2.06923 15.8833C2.25125 15.8062 2.41644 15.6933 2.5553 15.551L8.8883 9.11558C9.02829 8.97448 9.13941 8.80661 9.21524 8.62166C9.29107 8.4367 9.33011 8.23831 9.33011 8.03795C9.33011 7.83758 9.29107 7.63919 9.21524 7.45424C9.13941 7.26928 9.02829 7.10141 8.8883 6.96031L2.5553 0.448963C2.41645 0.306702 2.25125 0.193787 2.06923 0.11673C1.88722 0.0396741 1.692 2.24914e-07 1.49482 1.98704e-07C1.29764 1.72493e-07 1.10241 0.039674 0.920402 0.11673C0.738389 0.193787 0.573192 0.306702 0.434339 0.448962Z"
                    fill="darkgreyishblue"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Next Benefits"
                className="bg-[#1893F8] px-4 py-3 rounded-md"
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
        </div>
        <div className="sc-jSUZER gvZxJM rec rec-carousel-wrapper  space-x-1">
          <div className="sc-eDvSVe eTfUIS rec rec-carousel">
            <div className="sc-dkrFOg itwfLR rec rec-slider-container">
              <div
                className="sc-hLBbgP gpusub rec rec-slider"
                style={{
                  transition: 'all 0ms ease 0s',
                  left: '-67px',
                  right: 'auto',
                  top: 'auto',
                }}
              >
                <div
                  className="rec rec-swipable overflow-auto"
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  {offers.map((offer) => (
                    <div className="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible mx-4">
                      <div
                        id="0"
                        className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                        style={{ width: '343.5px', padding: '0px' }}
                      >
                        <div
                          className="overflow-hidden box-border bg-[#fFFF] border-[#EFEFEF] border-[1px] shadow-xl w-[350px] 2xl:h-[280px] items-center justify-center rounded-md h-[245px]"
                          tabIndex="0"
                        >
                          <div className="flex flex-col space-y-3 items-center justify-center px-3 py-5">
                            <div className="rounded-full bg-[#F8F9F9] justify-center w-[58px] h-[58px] items-center">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAShSURBVHgBrVZRUiJJEM2sLgRjJ2KZD0f8a0/geALhBMOcQPxeWekTCCdAxP1e9wSyJxBPAHMC+ZMYP5aP3aWV7srNrKIFBhqYjakIounqqnyZLzNfFcL/GIXmuAgKisao/tcg24HvHLjNIgbxQePv/LdIACPelF+xrAsRnQ2D3cEme2tB803K5/TrBSBVgMBnQInK59+DUdGtZ7wygvoEQAP+VmZr/FQdnMStdeC4NroM3guYm6HGsLpbT1u/fx3WEKE5tTqACZXSgHWaEcioSyDy2VDwdJ67SiLPeuMKKu9Ivlmqif6EGLrDX+2aKwsODC77Ac5g20gPrsMmIdQ4ygEbO7SRt18uCaiWkk8xVR9Wsw279jp8ZMs+IN4Oz7NLwOrbCalMAWTjnTDOHjsjL1xEVFeAA36Wwij7fljNoTwNxJ/FOfleuJF1PGIq8fsfzEal0OZK3zQKrXG90A5pr/n3xyRCeefNt+v2HbT/vZJ1Bzdhc+q8b/exvW/XLtFbuGFqbPGwtxFHoPFxnua1DrfDe34UuXUOY/DynjY9Kapwkj0eBThK1i3Q+6H9T1kApXi4UrvkUVnmDcZBOpBjwjFDjanVynOw0wfD72wv54Xl+T0LoIqULZKY4oHjwTuRx9fqTx2ha78d3u395mhPACWXwoQH3sg6yhVNSG6NYcEQM4ALxbfQMnHs9ZkS1gKs8GsHgfK253iEEI6ysFvUJlNk4JJnMp8SQCmcpCeRYASofk4ilkcUR93USFFP/KlnVk8JkPvQeTkK3o9YhUqGZz2je6sA7R6caykFtzYyTxdhE71vThjzhXszn5T98y/v+gIsFK4C3Gu+fpQ+JgNfnAeJmi2OherNN//KZ/Xuo2yMo+hY8mSrl8Wc+7KUrJP8hpAbzVeknZc+5d6U6rWYGnsMDBjT8bxzC5EKhWiolbzLQgQj70VXNLP5JUD5LoCiQkl+2XmWySXxX9Jeo0xfgQc6o0/5tT+OXuoc/Qk6xfHjyaT1HLzrz0VdRI0XnAZpt0EY7QSi0aBfT8GGCYO19M68njY5bxie5w6F9pwWQcdTSxuTIpJIZKvbnxrqjKPsmTCwfxP2uIo5v9h/qjop3QjqgEX2BISLhftvGpXPeRJdPrLnK4JQ/MAsdJI1IhKe1r15J74HtMif78GFxrmF1pM7vlaOD+2XsiJqJpFLIc6nYX6kn6dS7s6lLoA9pi45p0dCqdAmxxgr1AXYNKgBkKkw7VKZHblFeMoT6VsJmh6pCL/hSmWhF+nzYn2XRJHi5CCOo88SnZyniJgfRzuHq+hVKwGvx5XpSWMFXETBnjKa+497kHPZT4DsHP/k+4xOaoio5FRYg20jlShF/uIIzjCDJ0ydz0rUEHB7/dR4P7sVukKbFllTqKYJPShNd5yG0apodVqU7CkoDXfc8Hae9VYkssR3n1OZM1FUkiplv0U0unInYiHgXuUDQ0PNEfEWbX0jvZY2VhYiE1j65OohqmQdcqrjqFyej1V0zP/P5BtJIW0rDkvRu8v249sE51WkLW1+kz0FW4ypoa5zc6atafM/BFQG0xZYuiamsc38uvEfr4ugLSRsQyEAAAAASUVORK5CYII="
                                alt="badge"
                                className="px-3 object-cover py-3 h-[60px]"
                              />
                            </div>
                            <span className="text-[#002248] font-bold">
                              {offer.Heading}
                            </span>
                            <span className="text-[#5C6A7A] text-center 2xl:text-[15px] opacity-70 text-[12px]   font-montserrat font-normal text-base leading-6">
                              {offer.Description}
                            </span>
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
            <div className="mt-4 rounded-full  h-1 bg-[#1893F8] w-5"></div>
            <div className="mt-4 rounded-full  h-1 bg-[#5C6A7A] w-3 bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreUnique;
