const offers = [
  {
    id: 0,
    imagePath: '/images/BonVoy.cc3065502bbab7785718.png',
    description: 'EXTRA 20% OFF on all Marriott hotels',
    promoCode: 'No Code',
  },
  {
    id: 1,
    imagePath: '/images/Hilton.c9dbb930f46b6ecf591d.png',
    description: 'EXTRA 15% OFF on all Hilton hotels',
    promoCode: 'No Code',
  },
  {
    id: 2,
    imagePath: '/images/offers.ae355ac1167c98f2b863.webp',
    description: 'Save 10% on your 10th booking with us',
    promoCode: 'CHKSAVE10',
  },
];

export default function Offers() {
  return (
    <section id="offers" className="bg-whitegrey font-Montserrat ">
      <div className="container flex flex-col pb-6 px-4 lg:w-10/12 mx-auto mt-10 space-y-12 md:space-y-6 ">
        <div className="flex flex-col space-y-12 ">
          <div className="text-center flex flex-row  justify-center  md:justify-between items-center  md:text-left">
            <div>
              <span className="text-[#1893f8] font-bold text-sm">Offers</span>
              <h2 className="font-homepage text-4xl font-bold text-center text-bluedark md:text-left">
                Exclusive Offers
              </h2>
            </div>
            <div className="md:flex flex-row space-x-5 hidden">
              <button className="hover:bg-[#1893F8] fill-darkgreyishblue hover:fill-white px-4 py-3 rounded-md">
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
              <button className="bg-[#1893F8] px-4 py-3 rounded-md">
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
        <div>
          <div className="overflow-x-scroll overflow-y-hidden sc-jSUZER gvZxJM rec rec-carousel-wrapper ">
            <div
              className="sc-eDvSVe eTfUIS rec rec-carousel"
              style={{ height: '125px' }}
            >
              <div className="sc-dkrFOg itwfLR rec rec-slider-container mx-4">
                <div
                  className="sc-hLBbgP gpusub rec rec-slider"
                  style={{
                    transition: 'all 500ms ease 0s',
                    left: '0px',
                    right: 'auto',
                    top: 'auto',
                  }}
                >
                  <div
                    className="rec rec-swipable"
                    style={{ display: 'flex', flexDirection: 'row' }}
                  >
                    {offers.map((offer) => (
                      <div
                        className={`rec rec-carousel-item rec-carousel-item-${offer.id} rec-carousel-item-visible`}
                      >
                        <div
                          id={offer.id}
                          className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                          style={{ width: '373.776px', padding: '0px' }}
                        >
                          <div
                            className=" bg-[#fFFF] border-[#EFEFEF] border-[1px] shadow-xl w-[350px] items-center justify-center rounded-md 2xl:h-[148px] h-[125px]"
                            tabIndex={offer.id}
                          >
                            <div className="space-x-4 flex flex-row px-2 py-2 justify-center">
                              <img
                                src={offer.imagePath}
                                alt="BonVoy"
                                className="w-[100px] object-cover h-[110px] 2xl:w-[120px] 2xl:h-[129px]"
                              />
                              <div className="flex flex-col space-y-4">
                                <div className="flex flex-col justify-between space-y-1">
                                  <span className="text-[#002248] text-base leading-5 text-capitalize 2xl:text-[16px] text-[15px] font-bold">
                                    EXTRA 20% OFF on all Marriott hotels
                                  </span>
                                  <span className="text-[#5C6A7A] text-[15px]"></span>
                                </div>
                                <div className="relative ">
                                  <button className="border-[#5C6A7A] 2xl:py-2 py-1 mb-3 text-[12px] 2xl:text-[15px] 2xl:px-5 px-3 font-bold border-[1px] w-5/6 lg:w-4/6 2xl:w-5/6 rounded-md border-dashed items-center space-x-4 flex flex-row">
                                    <span className="text-[#5C6A7A] mt-2">
                                      {offer.promoCode}
                                    </span>
                                    <div>
                                      <div className="bg-[#AEAEAE]  w-[2px] "></div>
                                    </div>
                                  </button>
                                  <span className="text-[#fff] absolute -top-5 left-2 z-40 mb-2 mt-3 bg-[#1893F8] px-1 2xl:px-1.5 2xl:py-1 py-[2px] rounded-full 2xl:text-[10px] text-[7px]">
                                    PROMO CODE
                                  </span>
                                </div>
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
              <div className="mt-4 rounded-full  h-1 bg-[#1893F8] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
