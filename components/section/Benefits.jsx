const benefits = [
  {
    id: 0,
    description:
      'Personalized & curated search results and recommendations based on your profile, travel history, and interests',
  },
  {
    id: 1,
    description:
      'Auto-Rebook feature that automatically refunds you any price difference if rates drop, ensuring maximum savings.',
  },
  {
    id: 2,
    description:
      'Lowest prices that save you up to 40% compared to other online booking platforms.',
  },
  {
    id: 3,
    description:
      'No hidden fees and exceptional value through exclusive member-only rates and unparalleled savings.',
  },
];

const Benefits = () => {
  return (
    <section id="process" className="mt-[82px]">
      <div className="container font-normal text-base leading-7 flex flex-col px-4 lg:w-10/12 mx-auto mt-10 space-y-12 md:space-y-6 ">
        <div className="flex flex-col space-y-12 ">
          <div className="text-center items-center justify-center  md:text-left">
            <span className="text-[#1893f8] font-bold text-sm">Benefits</span>
            <h2 className="text-4xl font-bold font-homepage text-center text-bluedark md:text-left">
              Book With Us
            </h2>
          </div>
        </div>
        <div className="flex flex-col-reverse md:space-y-0 space-y-5 md:flex-row">
          <div className="space-y-4 pt-4 md:pt-0 md:space-y-2 md:w-1/2">
            <p className=" text-center text-[15px] 2xl:text-[18px] text-[#5C6A7A] md:text-left">
              Join Chekins as a member and unlock a world of benefits:
            </p>
            <ul className="list-disc px-4  leading-7 text-[15px] 2xl:text-[18px]">
              {benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="font-[400] text-[#5C6A7A] md:text-left"
                >
                  <span>{benefit.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <div className="flex flex-row relative items-start justify-center ">
              <div className="flex space-y-3   items-center flex-col">
                <div className="rounded-l-full  md:bg-transparent">
                  <div className="flex items-center space-y-2">
                    <div className="px-[25px] text-white rounded-full py-[24px] bg-[#1893F8]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.74551 0.182793C0.61142 0.650471 0.00381396 1.57048 0.00381396 2.8203V3.41575H19.0019H38L37.971 2.72004C37.9484 2.17714 37.896 1.92565 37.7328 1.57525C37.4668 1.00413 36.9791 0.515622 36.4068 0.247117L35.958 0.0365745L19.0735 0.0182873L2.18888 0L1.74551 0.182793ZM0.00381396 6.11909V7.47076H18.994H37.9842V6.11909V4.76742H18.994H0.00381396V6.11909ZM0.0217712 14.9646L0.0435424 21.1067L0.316079 21.6097C0.615234 22.1618 1.02809 22.5601 1.58691 22.8357C1.91427 22.9971 2.08844 23.0175 3.33306 23.0401C4.77631 23.0663 4.84647 23.0515 4.84949 22.7198C4.85251 22.3797 5.20601 21.6747 5.57763 21.2679C6.29648 20.4809 6.48765 20.4236 10.0948 19.9133C11.821 19.6691 13.2968 19.4504 13.3742 19.4274C13.4646 19.4004 14.0395 18.3381 14.9803 16.4598C16.6198 13.1863 16.7621 12.9814 17.7048 12.5344C18.1888 12.305 18.3103 12.2811 18.994 12.2811C19.6772 12.2811 19.7994 12.3051 20.2813 12.5335C21.2334 12.9849 21.3548 13.1595 23.0005 16.4453C24.1931 18.8265 24.5118 19.402 24.6558 19.4337C24.7538 19.4553 26.2285 19.671 27.9329 19.9131C31.4934 20.4188 31.6889 20.478 32.4104 21.2679C32.782 21.6747 33.1355 22.3797 33.1385 22.7198C33.1415 23.0515 33.2117 23.0663 34.6549 23.0401C35.8996 23.0175 36.0737 22.9971 36.4011 22.8357C36.9599 22.5601 37.3728 22.1618 37.6719 21.6097L37.9445 21.1067L37.9662 14.9646L37.988 8.82243H18.994H0L0.0217712 14.9646ZM11.1639 12.2907C11.3203 12.3508 11.5251 12.7284 11.5251 12.9566C11.5251 13.0482 11.4373 13.211 11.33 13.3183L11.135 13.5135H6.76702H2.39904L2.23441 13.304C2.01145 13.0205 2.02345 12.6779 2.26476 12.4366L2.45975 12.2414H6.74756C9.10584 12.2414 11.0932 12.2636 11.1639 12.2907ZM18.6762 13.5922C18.281 13.6659 17.9344 13.865 17.6854 14.1612C17.5671 14.3019 16.8139 15.7302 16.0117 17.3352C14.5248 20.3103 14.4066 20.4951 13.884 20.6615C13.7446 20.7058 12.2183 20.9425 10.4921 21.1873C6.97576 21.6864 6.83448 21.7259 6.42019 22.3271C6.07106 22.8338 6.01822 23.5652 6.29465 24.0644C6.40382 24.2616 7.4455 25.3292 8.83775 26.6708C10.7999 28.5616 11.2192 29.0043 11.3348 29.3071L11.4737 29.6711L10.8968 33.0283C10.3955 35.945 10.3311 36.4276 10.4062 36.7066C10.6765 37.7107 11.7976 38.2584 12.7657 37.8592C12.9455 37.785 14.3221 37.0803 15.8248 36.2931C18.4027 34.9427 18.5817 34.862 18.994 34.862C19.4064 34.862 19.5897 34.9448 22.2493 36.3329C23.7994 37.1419 25.176 37.8458 25.3084 37.8972C26.2125 38.2476 27.3237 37.6656 27.5818 36.7066C27.6569 36.4276 27.5925 35.9442 27.0918 33.0266L26.5155 29.6678L26.6536 29.3062C26.7681 29.006 27.1953 28.5561 29.1704 26.6556C31.8354 24.0911 31.9043 24.0016 31.8515 23.1729C31.8252 22.7596 31.7725 22.5983 31.5731 22.3221C31.1402 21.7225 30.9756 21.6763 27.5356 21.1875C24.1528 20.7069 23.9635 20.6697 23.6486 20.4217C23.506 20.3094 22.9493 19.282 21.9763 17.3352C21.1741 15.7302 20.4206 14.3016 20.302 14.1606C19.9217 13.7082 19.2716 13.481 18.6762 13.5922ZM7.11163 15.7097C7.30065 15.7823 7.48992 16.1952 7.42802 16.3997C7.39886 16.4959 7.30137 16.6551 7.21142 16.7536C7.04894 16.9312 7.0313 16.9324 4.75374 16.9324H2.45975L2.26476 16.7373C2.02345 16.4959 2.01145 16.1533 2.23441 15.8698L2.39904 15.6603H4.69105C5.95164 15.6603 7.04091 15.6826 7.11163 15.7097Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-[15px] font-bold">Join as member</h3>
                <div className="flex flex-col w-full justify-center items-center text-center">
                  <p className="text-bluedark  text-[13px]">
                    Introductory offer $19.99
                  </p>
                  <p className="text-bluedark w-[76%] text-[13px]">
                    Offer valid for a limited time
                  </p>
                </div>
              </div>
              <div className="lg:w-[179px] absolute top-0 sm:left-[42%] md:left-[38%]  xl:left-[19%] -z-10 w-[140px]">
                <svg
                  viewBox="0 0 241 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00147 40.3255C31.0014 10.3259 147.001 -18.6745 239.002 17.3257"
                    stroke="#BCBBBB"
                    strokeWidth="1.2"
                    strokeDasharray="7 7"
                  ></path>
                  <path
                    d="M228.371 21.8262L238.289 17.5138"
                    stroke="#BCBBBB"
                    strokeWidth="2"
                  ></path>
                  <line
                    x1="233.487"
                    y1="6.10384"
                    x2="239.581"
                    y2="17.9728"
                    stroke="#BCBBBB"
                    strokeWidth="2"
                  ></line>
                </svg>
              </div>
              <div className="flex flex-col space-y-3  items-center  md:flex-col">
                <div className="rounded-l-full md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-[25px] text-white rounded-full py-[24px] bg-[#1893F8]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 46 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.8534 0.077193C10.5291 0.537827 4.79026 4.47456 1.89899 10.3356C-2.29509 18.8377 0.666551 29.2218 8.72758 34.2776C15.2402 38.3623 23.7394 37.8069 29.7341 32.905C30.1142 32.5941 30.4253 32.2999 30.4253 32.2511C30.4253 32.1817 29.7882 31.3996 29.0837 30.6042C29.046 30.5617 28.7409 30.7627 28.4057 31.0511C26.5678 32.6319 24.0437 33.8494 21.4684 34.3973C20.0011 34.7095 17.6329 34.7906 16.1558 34.5794C12.4582 34.0505 9.39861 32.4788 6.77881 29.7625C0.679394 23.4382 0.771433 13.2538 6.98385 7.06384C7.9869 6.06444 8.56286 5.58753 9.56057 4.93049C12.1705 3.21175 15.1038 2.33615 18.2516 2.33615C22.3697 2.33615 26.0812 3.82213 29.2535 6.74111C29.6454 7.10173 29.9891 7.3967 30.0173 7.3967C30.0454 7.3967 30.0685 6.72845 30.0685 5.91171V4.42672L29.6895 4.09431C29.0179 3.50546 27.4677 2.51311 26.3128 1.93284C24.2545 0.898631 21.9214 0.258227 19.5448 0.0749322C18.2437 -0.0253511 18.262 -0.025351 16.8534 0.077193ZM31.5464 0.21419C31.4204 0.341963 31.4063 1.5809 31.4063 12.5001C31.4063 24.6245 31.406 24.6442 31.2226 24.8806L31.0389 25.1175L28.6726 25.1415L26.3064 25.1656L31.1083 30.8103C33.7493 33.9149 35.9503 36.4657 35.9993 36.4786C36.0484 36.4915 38.2524 33.9514 40.8971 30.8339L45.7059 25.1656L43.3328 25.1415L40.9598 25.1175L40.776 24.8806C40.5926 24.6442 40.5923 24.6245 40.5923 12.5001C40.5923 1.5809 40.5782 0.341963 40.4522 0.21419C40.3286 0.0889484 39.8011 0.0721291 35.9993 0.0721291C32.1976 0.0721291 31.67 0.0889484 31.5464 0.21419ZM16.8246 3.78876C13.3699 4.15418 10.1582 5.75347 7.7165 8.32421C5.80385 10.3379 4.52869 12.7927 3.92384 15.6255C3.74823 16.4476 3.72103 16.8358 3.72103 18.5192C3.72103 20.6611 3.8417 21.496 4.39411 23.1762C5.42338 26.307 7.70098 29.2499 10.4718 31.0293C11.8034 31.8844 13.8206 32.7081 15.3531 33.0225C19.6633 33.9067 24.4086 32.6922 27.6105 29.8852L28.1063 29.4505L26.5153 27.5793C25.6401 26.5502 24.8776 25.6192 24.8207 25.5106C24.5826 25.0553 24.7885 24.2605 25.2186 23.9745C25.4378 23.8286 25.7357 23.8038 27.7456 23.764L30.0239 23.7187L30.0468 16.7488L30.0696 9.77882L29.3667 8.9269C26.3866 5.31499 21.4634 3.29811 16.8246 3.78876ZM19.0867 7.73436C19.4242 7.98791 19.534 8.40225 19.5398 9.44351L19.5448 10.36L20.013 10.5141C20.8365 10.7852 21.5344 11.2199 22.1915 11.8713C22.9176 12.5911 23.0449 12.9202 22.814 13.4805C22.5886 14.0273 21.726 14.3477 21.2111 14.0758C21.104 14.0193 20.8127 13.7796 20.5639 13.5433C19.988 12.9964 19.5066 12.7488 18.8391 12.6563C16.9035 12.3878 15.1747 13.5498 15.1747 15.1193C15.1747 15.7349 15.2851 16.0392 15.6484 16.4247C16.2085 17.019 16.82 17.2267 18.3542 17.3435C20.3427 17.4948 21.3698 17.8704 22.3577 18.8074C24.1725 20.5287 24.1355 23.2848 22.2723 25.1726C21.5772 25.8769 20.7074 26.3821 19.8583 26.5748L19.3664 26.6864L19.3662 27.6441C19.3661 28.7651 19.232 29.1418 18.7421 29.3979C18.1881 29.6875 17.3777 29.4635 17.1505 28.958C17.0922 28.8281 17.0476 28.2874 17.0476 27.7098V26.6906L16.5348 26.529C15.6812 26.2601 14.9847 25.8315 14.3188 25.1656C13.5893 24.4359 13.469 24.1182 13.7249 23.5972C13.9639 23.1107 14.3013 22.9049 14.86 22.9049C15.3166 22.9049 15.3555 22.9249 15.8765 23.4288C16.1745 23.7169 16.6008 24.0346 16.8239 24.1346C18.1554 24.7318 19.7935 24.4284 20.7323 23.4107C21.6675 22.3969 21.5817 20.9873 20.5439 20.3199C19.9389 19.9308 19.3789 19.7855 18.1178 19.6909C16.8147 19.5929 16.1675 19.4401 15.3085 19.0274C13.7617 18.2843 12.8528 16.8602 12.8581 15.188C12.8608 14.3267 12.9614 13.8743 13.3126 13.144C13.8774 11.9695 15.0538 10.9709 16.3417 10.5726C16.7054 10.4601 17.0532 10.3519 17.1145 10.332C17.1948 10.3061 17.226 10.0162 17.226 9.29404C17.226 8.15267 17.3199 7.87054 17.7787 7.63335C18.1476 7.44273 18.7618 7.49011 19.0867 7.73436Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className=" text-[15px] text-center font-bold ">
                  Book Any Hotel
                </h3>
                <div className="text-bluedark px-3 text-center flex flex-col text-[13px]">
                  Prices up to 20% - 40% cheaper<span>than Competitors </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
