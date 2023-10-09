export default function MobileApp() {
  return (
    <section id="mobileApp" className="pt-20">
      <div className=" bg-[#F4F4F4] container flex-col rounded-[30px] items-center lg:items-start flex md:flex-row mx-auto lg:w-10/12 2xl:w-7/12">
        <div className="flex flex-col space-y-3 md:space-y-2 w-full md:w-1/2 py-0 md:py-10 px-4 mx:px-0  md:text-left items-center  text-center">
          <div className="flex flex-col px-3 lg:px-0 py-4 pl-0 text-start  lg:pl-20 md:items-start items-center ">
            <div className="flex justify-center flex-col lg:flex-row gap-3 mb-3">
              <img
                src="/images/comingsoon.png"
                alt="ComingSoon"
                className="object-cover nowhitebackground h-full w-[65%] sm:w-[100%] lg:h-[113px] "
              />
              <span className="text-[#5C6A7A] items-center  mt-3 py-1 text-[15px] 2xl:text-[18px]">
                Your ticket to unbeatable wholesale rates on hotel bookings!
                Prepare for mind-blowing savings and jaw-dropping deals as you
                explore top destinations worldwide.
              </span>
            </div>
            <span className="text-[#5C6A7A] text-[15px] 2xl:text-[18px]">
              Coming soon our Mobile App, so get ready to revolutionize your
              travel experience with the power of Chekins at your fingertips!
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 md:space-y-0 space-y-4">
            <div className="flex md:space-y-3 md:space-x-0 space-x-2 flex-row md:flex-col">
              <img
                src="/images/playstore.3f946186ff5a500d5da4.webp"
                alt="google"
                className="w-[150px] object-cover"
              />
              <img
                src="data:image/png;base64,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"
                alt="apple"
                className="w-[150px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="py-10 -ml-10 lg:ml-0 top-12 w-full md:w-1/2 items-center justify-center flex relative">
          <svg
            width="250"
            height="345"
            viewBox="0 0 374 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="187" cy="187.034" r="187" fill="#1893F8"></circle>
          </svg>
          <img
            src="/images/mobile.833230a7178b42e2a18a.webp"
            alt="mobile"
            className="absolute object-cover top-0 ml-[6px] h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
