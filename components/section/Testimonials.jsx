const Testimonials = () => {
  return (
    <section id="Testimonials" className="">
      <div className="container flex flex-col px-4 lg:w-10/12 mx-auto mt-10 space-y-12">
        <div className="flex flex-col space-y-12">
          <div className="text-center items-center flex flex-row justify-between  md:text-left">
            <div>
              <span className="text-[#0276D4] font-bold text-sm">
                Testimonials
              </span>
              <h2 className="font-homepage text-4xl font-bold text-center text-bluedark md:text-left">
                What Our Customers Says
              </h2>
            </div>
            <div className="md:flex flex-row space-x-5 hidden">
              <button
                aria-label="Previous Testimonial"
                className="hover:bg-[#0276D4] fill-darkgreyishblue hover:fill-white px-4 py-3 rounded-md"
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
                aria-label="Previous Testimonial"
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
        </div>
        <div>
          <div className="overflow-x-scroll overflow-y-hidden sc-jSUZER gvZxJM rec rec-carousel-wrapper z-40">
            <div
              className="sc-eDvSVe eTfUIS rec rec-carousel"
              style={{ height: '306px' }}
            >
              <div className="sc-dkrFOg itwfLR rec rec-slider-container">
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
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      gap: '5%',
                    }}
                  >
                    <div className="rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible">
                      <div
                        id="0"
                        className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                        style={{ width: '374.052px', padding: '0px' }}
                      >
                        <div
                          className=" bg-[#fFFF] my-7 relative border-[#EFEFEF] border-[1px] shadow-xl 2xl:w-[342px]  w-[320px] rounded-md h-[250px]"
                          tabIndex="0"
                        >
                          <div className="flex flex-col  text-[#5C6A7A] justify-between w-full h-full   px-3 pb-5 pt-11">
                            <div className="items-center justify-center">
                              <span className="text-[#5C6A7A] opacity-70 text-center 2xl:text-[15px] text-[13px]">
                                "The auto rebooking feature on Chekins.com is a
                                brilliant idea. I've saved a lot of money on my
                                last few trips because of it. I highly recommend
                                becoming a member."
                              </span>
                            </div>
                            <div className="flex flex-row space-x-3 items-center">
                              <img
                                src="/images/pexels-pixabay-220453.6ad2a8a579e89c353159.jpg"
                                alt="pixabay"
                                className="rounded-full w-[51px] h-12 object-cover"
                              />
                              <div className="flex flex-col">
                                <span className="text-[#002248] font-bold">
                                  William, Detroit, MI
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-full items-center justify-center mx-auto z-40 absolute -top-6  left-3 bg-[#0276D4]  py-5 px-5">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 23 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7682 15.8158C14.6934 17.296 16.058 18.0361 17.862 18.0361C19.111 18.0361 20.1518 17.6198 20.9844 16.7872C21.8633 15.9083 22.3027 14.8444 22.3027 13.5954C22.3027 12.254 21.8633 11.19 20.9844 10.4036C20.1518 9.57101 19.111 9.15469 17.862 9.15469C16.8906 9.15469 16.0348 9.45537 15.2947 10.0567C15.1559 9.6404 15.0866 9.15469 15.0866 8.5996C15.0866 7.25813 15.5954 5.93979 16.6131 4.64458C17.677 3.34937 18.9259 2.40109 20.3599 1.79974L19.7354 0.550781C17.3301 1.66097 15.526 3.14121 14.3233 4.99151C13.1669 6.84181 12.5886 8.92341 12.5886 11.2363C12.5886 13.0403 12.9818 14.5668 13.7682 15.8158Z"
                                fill="white"
                              ></path>
                              <path
                                d="M1.97254 15.8158C2.89769 17.296 4.26229 18.0361 6.06633 18.0361C7.31529 18.0361 8.35608 17.6198 9.18872 16.7872C10.0676 15.9083 10.5071 14.8444 10.5071 13.5954C10.5071 12.254 10.0676 11.19 9.18872 10.4036C8.35608 9.57101 7.31529 9.15469 6.06633 9.15469C5.09492 9.15469 4.23916 9.45537 3.49904 10.0567C3.36026 9.6404 3.29088 9.15469 3.29088 8.5996C3.29088 7.25813 3.79971 5.93979 4.81738 4.64458C5.8813 3.34937 7.13026 2.40109 8.56424 1.79974L7.93976 0.550781C5.53437 1.66097 3.73032 3.14121 2.52763 4.99151C1.37119 6.84181 0.792969 8.92341 0.792969 11.2363C0.792969 13.0403 1.18616 14.5668 1.97254 15.8158Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rec rec-carousel-item rec-carousel-item-1 rec-carousel-item-visible">
                      <div
                        id="1"
                        className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                        style={{ width: '374.052px', padding: '0px' }}
                      >
                        <div
                          className=" bg-[#fFFF] my-7 relative border-[#EFEFEF] border-[1px] shadow-xl 2xl:w-[342px]  w-[320px] rounded-md h-[250px]"
                          tabIndex="0"
                        >
                          <div className="flex flex-col  text-[#5C6A7A] justify-between w-full h-full   px-3 pb-5 pt-11">
                            <div className="items-center justify-center">
                              <span className="text-[#5C6A7A] opacity-70 text-center 2xl:text-[15px] text-[13px]">
                                "I've been using Chekins.com for my hotel
                                bookings for a while now. I volunteered as a
                                beta tester and loved the product. The savings
                                are incredible, and the selection of hotels
                                always gives me the best options."
                              </span>
                            </div>
                            <div className="flex flex-row space-x-3 items-center">
                              <img
                                src="/images/pexels-kamiz-ferreira-2218786.9eff1fc9dd670e3480a8.jpg"
                                alt="kamiz"
                                className="rounded-full w-[51px] h-12 object-cover"
                              />
                              <div className="flex flex-col">
                                <span className="text-[#002248] font-bold">
                                  Jennifer, Baltimore, MD
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-full items-center justify-center mx-auto z-40 absolute -top-6  left-3 bg-[#0276D4]  py-5 px-5">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 23 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7682 15.8158C14.6934 17.296 16.058 18.0361 17.862 18.0361C19.111 18.0361 20.1518 17.6198 20.9844 16.7872C21.8633 15.9083 22.3027 14.8444 22.3027 13.5954C22.3027 12.254 21.8633 11.19 20.9844 10.4036C20.1518 9.57101 19.111 9.15469 17.862 9.15469C16.8906 9.15469 16.0348 9.45537 15.2947 10.0567C15.1559 9.6404 15.0866 9.15469 15.0866 8.5996C15.0866 7.25813 15.5954 5.93979 16.6131 4.64458C17.677 3.34937 18.9259 2.40109 20.3599 1.79974L19.7354 0.550781C17.3301 1.66097 15.526 3.14121 14.3233 4.99151C13.1669 6.84181 12.5886 8.92341 12.5886 11.2363C12.5886 13.0403 12.9818 14.5668 13.7682 15.8158Z"
                                fill="white"
                              ></path>
                              <path
                                d="M1.97254 15.8158C2.89769 17.296 4.26229 18.0361 6.06633 18.0361C7.31529 18.0361 8.35608 17.6198 9.18872 16.7872C10.0676 15.9083 10.5071 14.8444 10.5071 13.5954C10.5071 12.254 10.0676 11.19 9.18872 10.4036C8.35608 9.57101 7.31529 9.15469 6.06633 9.15469C5.09492 9.15469 4.23916 9.45537 3.49904 10.0567C3.36026 9.6404 3.29088 9.15469 3.29088 8.5996C3.29088 7.25813 3.79971 5.93979 4.81738 4.64458C5.8813 3.34937 7.13026 2.40109 8.56424 1.79974L7.93976 0.550781C5.53437 1.66097 3.73032 3.14121 2.52763 4.99151C1.37119 6.84181 0.792969 8.92341 0.792969 11.2363C0.792969 13.0403 1.18616 14.5668 1.97254 15.8158Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rec rec-carousel-item rec-carousel-item-2 rec-carousel-item-visible">
                      <div
                        id="2"
                        className="sc-gswNZR fUcWbd rec rec-item-wrapper"
                        style={{ width: '374.052px', padding: '0px' }}
                      >
                        <div
                          className=" bg-[#fFFF] my-7 relative border-[#EFEFEF] border-[1px] shadow-xl 2xl:w-[342px]  w-[320px] rounded-md h-[250px]"
                          tabIndex="0"
                        >
                          <div className="flex flex-col  text-[#5C6A7A] justify-between w-full h-full   px-3 pb-5 pt-11">
                            <div className="items-center justify-center">
                              <span className="text-[#5C6A7A] opacity-70 text-center 2xl:text-[15px] text-[13px]">
                                "Chekins.com offers fantastic savings and
                                excellent customer service. I've had a great
                                experience with them, and I'm excited to
                                continue my travels using their platform."
                              </span>
                            </div>
                            <div className="flex flex-row space-x-3 items-center">
                              <img
                                src="/images/pexels-david-kuko-2743754.b9703c094b6286eeecf3.jpg"
                                alt="david"
                                className="rounded-full w-[51px] h-12 object-cover"
                              />
                              <div className="flex flex-col">
                                <span className="text-[#002248] font-bold">
                                  Andrew, Minneapolis, MN
                                </span>
                                <span className="text-[12px] opacity-70"></span>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-full items-center justify-center mx-auto z-40 absolute -top-6  left-3 bg-[#0276D4]  py-5 px-5">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 23 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7682 15.8158C14.6934 17.296 16.058 18.0361 17.862 18.0361C19.111 18.0361 20.1518 17.6198 20.9844 16.7872C21.8633 15.9083 22.3027 14.8444 22.3027 13.5954C22.3027 12.254 21.8633 11.19 20.9844 10.4036C20.1518 9.57101 19.111 9.15469 17.862 9.15469C16.8906 9.15469 16.0348 9.45537 15.2947 10.0567C15.1559 9.6404 15.0866 9.15469 15.0866 8.5996C15.0866 7.25813 15.5954 5.93979 16.6131 4.64458C17.677 3.34937 18.9259 2.40109 20.3599 1.79974L19.7354 0.550781C17.3301 1.66097 15.526 3.14121 14.3233 4.99151C13.1669 6.84181 12.5886 8.92341 12.5886 11.2363C12.5886 13.0403 12.9818 14.5668 13.7682 15.8158Z"
                                fill="white"
                              ></path>
                              <path
                                d="M1.97254 15.8158C2.89769 17.296 4.26229 18.0361 6.06633 18.0361C7.31529 18.0361 8.35608 17.6198 9.18872 16.7872C10.0676 15.9083 10.5071 14.8444 10.5071 13.5954C10.5071 12.254 10.0676 11.19 9.18872 10.4036C8.35608 9.57101 7.31529 9.15469 6.06633 9.15469C5.09492 9.15469 4.23916 9.45537 3.49904 10.0567C3.36026 9.6404 3.29088 9.15469 3.29088 8.5996C3.29088 7.25813 3.79971 5.93979 4.81738 4.64458C5.8813 3.34937 7.13026 2.40109 8.56424 1.79974L7.93976 0.550781C5.53437 1.66097 3.73032 3.14121 2.52763 4.99151C1.37119 6.84181 0.792969 8.92341 0.792969 11.2363C0.792969 13.0403 1.18616 14.5668 1.97254 15.8158Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-1 md:hidden cursor-pointer">
              <div className="mt-4 rounded-full  h-1 bg-[#0276D4] w-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
