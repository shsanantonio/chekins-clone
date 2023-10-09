export default function Header() {
  return (
    <nav className="flex relative container  mx-auto p-6 lg:w-10/12 hover:higherIndexScroll focus:higherIndexScroll">
      <div className="flex-1 items-center">
        <a href="/" className="">
          <img
            src="/images/logo.png"
            className="object-cover h-11 lg:h-[75px]"
            alt="navbarlogo"
          />
        </a>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <div className="hidden space-x-2 gap-0 2xl:gap-6 xl:space-x-4 text-[#002248] font-[600] xl:flex">
          <a className="hover:text-[#1893F8] nav-link" href="/">
            Home
          </a>
          <a
            aria-current="page"
            className="hover:text-[#1893F8] nav-link active"
            href="/membership"
          >
            Membership
          </a>
          <div className="bg-[#AEAEAE]  w-[2px] justify-center items-center"></div>
          <div className="dropdown relative">
            <button
              className="dropdown-toggle space-x-2 transition duration-150 flex items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="hover:text-[#1893F8]">
                <div className="flex flex-row items-center space-x-2">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAShSURBVHgBvZd7TBRHHMe/s6wL3h1yVHmkpXaBlDamFEzaakxqj/YPbWMr1ta2SnlI2piYhiP1jzY1BZsmTV9waK1JqQWMTQ0FxSqP1geeEZE0hRPbKpXH8ZCHWG71joM79nY7uxUiInh3iJ9kk5nZ+e1vfvN7zCyBFxgMRXqwo4lMALdWhmTQw8UfZM36m68F+lgA2QJJNpPq8gpvvknuppDhxCxtMGd0ONyqIo12HpzDYzjJ/jadmBUyKYbkLiE1FVafFR8obcr6/Y+e3EZLv35z6lLUHG9Fb68d2z9YiS/y6lCx/UnMyMJQqycyYodOpyv2WnH54eb80rI/jUr78UcXofvKDYhjHoSHa9FhFTBkG8HRgxvhDYQQk0ajyb59nL194PVNPxa1XBpMdw67IdN+cHAgrv3rRGAgC49Hhsst/i940gwvMYp79+nZzNSMSQu6tZO17Zd8w7O8cde3DXhxdRyNFxlVv15GWkoiTp+xqtZ+mvM8PvnMjBqpGr5BTKSyNHuK4osXe9I/z6sv6uwSsOWdp7BvvwUeCdjw6hLsP3AB/OIQLHs6CkeqWjDsHMOJBxvhKyJhsrkfdpsmFO/ZU8+f/7uv1iaM8iELgqhfAIfdpRiMsDANAgIY9PbZ1clxcYtQV9+Fwz+/BT8Q3G53dGhoqMAoPXN9V1rPlRu80lYso20sXKRRU6e9w4b4JyIQwDKwXXchNuYB1dd+ouc4zjhhcdKq7zpSNyXyNcdacfXqMHI/MuBLU536OjN9KXbubkBMtB4rli2m296sfuF47CX4hegRmH+s0STz3bLk5cujDh2pbEFQEIskQzSqaUApVo6OiOjuuY6E+Eg0Nfdj2OHG2pcfQ2nZXzgxfQG5O0ROYts6hwwPRQUjJCQIY24PGpv6oNNyGBwcBsMQaDTz0NktUH/Lqr8HB51qmomvvAR/8WjmJ9M8JgnnGnqwft0SnDnbhda2IbyftQJ5O+vBUr+mpSTgp9ILeDgqhPo3FKdOW1Vhd8oGzILnWCIjceuWZ2D65hwiaGXa+EY8vi44ixcMMbRCOfF9USMy3k7Esdp2VFZfxscfrsRXdFFk8Br8RZYlniStKpRj+FC0W23Q6Tjo6ZYrUR0czEHZUzv1qxJYff0OjFCfR0ToMDDgmOmQ8ApWQ0uholSBnkDqo2C3uycmtXcIE21FqRYiZgvp7R2yuVyi3ichuhXhZBT+QrdaYBcs4KyEBCbCR2To4C/0xLKw3KGjZuIc8VnxbJA1888Tec1rBnpjqMX9RJLWsWBFixzxiECT1ic/+82o28rs3VWh1mq73Z7LMEwO7g87tFptrno6iaKonJEC5hgaVFZqYLHaHh+UN281ypKUjzlEmheYwRaaiicpVpWvWW+CzGRhLpClAlJVbhzvTrllugpLihEZloZ7CGlpK+G2vZc+aexOE2mwmagv7onl9DgtoHdr45TFTCfgcDjSmf6BHDJk4+EHJDBIEGN55UJvuuP7mYTl1W/yNM/TaYFRtp6Hdwj0hlEAh2gipyqmzRQCL6GBlwwJBpoTCVRMKbG3/LTJ9H9JNoMhFVShZSaF4/wHRwHZCSvynPcAAAAASUVORK5CYII="
                    className="w-6"
                    alt="languageMap"
                  />{' '}
                  <span>EN</span>
                </div>
              </span>
            </button>
            <ul
              className="dropdown-menu w-[125px] absolute bg-white text-base z-50 float-left py-4 list-none text-left rounded-lg shadow-lg mt-4 hidden m-0  bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button className="dropdown-item  py-2 px-4  block w-full whitespace-nowrap bg-transparent  hover:bg-[#1893F8]">
                  <div className="flex flex-row items-center space-x-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAShSURBVHgBvZd7TBRHHMe/s6wL3h1yVHmkpXaBlDamFEzaakxqj/YPbWMr1ta2SnlI2piYhiP1jzY1BZsmTV9waK1JqQWMTQ0FxSqP1geeEZE0hRPbKpXH8ZCHWG71joM79nY7uxUiInh3iJ9kk5nZ+e1vfvN7zCyBFxgMRXqwo4lMALdWhmTQw8UfZM36m68F+lgA2QJJNpPq8gpvvknuppDhxCxtMGd0ONyqIo12HpzDYzjJ/jadmBUyKYbkLiE1FVafFR8obcr6/Y+e3EZLv35z6lLUHG9Fb68d2z9YiS/y6lCx/UnMyMJQqycyYodOpyv2WnH54eb80rI/jUr78UcXofvKDYhjHoSHa9FhFTBkG8HRgxvhDYQQk0ajyb59nL194PVNPxa1XBpMdw67IdN+cHAgrv3rRGAgC49Hhsst/i940gwvMYp79+nZzNSMSQu6tZO17Zd8w7O8cde3DXhxdRyNFxlVv15GWkoiTp+xqtZ+mvM8PvnMjBqpGr5BTKSyNHuK4osXe9I/z6sv6uwSsOWdp7BvvwUeCdjw6hLsP3AB/OIQLHs6CkeqWjDsHMOJBxvhKyJhsrkfdpsmFO/ZU8+f/7uv1iaM8iELgqhfAIfdpRiMsDANAgIY9PbZ1clxcYtQV9+Fwz+/BT8Q3G53dGhoqMAoPXN9V1rPlRu80lYso20sXKRRU6e9w4b4JyIQwDKwXXchNuYB1dd+ouc4zjhhcdKq7zpSNyXyNcdacfXqMHI/MuBLU536OjN9KXbubkBMtB4rli2m296sfuF47CX4hegRmH+s0STz3bLk5cujDh2pbEFQEIskQzSqaUApVo6OiOjuuY6E+Eg0Nfdj2OHG2pcfQ2nZXzgxfQG5O0ROYts6hwwPRQUjJCQIY24PGpv6oNNyGBwcBsMQaDTz0NktUH/Lqr8HB51qmomvvAR/8WjmJ9M8JgnnGnqwft0SnDnbhda2IbyftQJ5O+vBUr+mpSTgp9ILeDgqhPo3FKdOW1Vhd8oGzILnWCIjceuWZ2D65hwiaGXa+EY8vi44ixcMMbRCOfF9USMy3k7Esdp2VFZfxscfrsRXdFFk8Br8RZYlniStKpRj+FC0W23Q6Tjo6ZYrUR0czEHZUzv1qxJYff0OjFCfR0ToMDDgmOmQ8ApWQ0uholSBnkDqo2C3uycmtXcIE21FqRYiZgvp7R2yuVyi3ichuhXhZBT+QrdaYBcs4KyEBCbCR2To4C/0xLKw3KGjZuIc8VnxbJA1888Tec1rBnpjqMX9RJLWsWBFixzxiECT1ic/+82o28rs3VWh1mq73Z7LMEwO7g87tFptrno6iaKonJEC5hgaVFZqYLHaHh+UN281ypKUjzlEmheYwRaaiicpVpWvWW+CzGRhLpClAlJVbhzvTrllugpLihEZloZ7CGlpK+G2vZc+aexOE2mwmagv7onl9DgtoHdr45TFTCfgcDjSmf6BHDJk4+EHJDBIEGN55UJvuuP7mYTl1W/yNM/TaYFRtp6Hdwj0hlEAh2gipyqmzRQCL6GBlwwJBpoTCVRMKbG3/LTJ9H9JNoMhFVShZSaF4/wHRwHZCSvynPcAAAAASUVORK5CYII="
                      className="w-6"
                      alt="languageMap"
                    />{' '}
                    <span>EN</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div className="bg-[#AEAEAE]  w-[2px] justify-center items-center"></div>
          <div className="dropdown relative">
            <button
              className="dropdown-toggle space-x-2 transition duration-150 flex items-center "
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className=" hover:text-[#1893F8]">
                <div className="flex flex-row items-center space-x-2">
                  <div className="border-[#fff] "></div>{' '}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 18C4.02919 18 0 13.9708 0 9C0 4.02919 4.02919 0 9 0C13.9708 0 18 4.02919 18 9C18 13.9708 13.9708 18 9 18ZM12.6562 10.7741C12.6562 9.35494 11.7697 8.55338 9.69581 8.05387V5.55638C10.3371 5.688 10.9508 5.96419 11.5509 6.39787L12.3154 5.16263C11.5624 4.61111 10.678 4.26666 9.75037 4.16362V3.375H8.5635V4.13719C6.858 4.26881 5.69869 5.24137 5.69869 6.66056C5.69869 8.14556 6.62625 8.86837 8.61806 9.36787V11.9441C7.731 11.8125 6.99469 11.4182 6.21675 10.8135L5.34375 12.0094C6.27822 12.7287 7.39163 13.1789 8.5635 13.311V14.625H9.75037V13.3239C11.4829 13.1794 12.6562 12.2197 12.6562 10.7741ZM8.6175 7.77769C7.56731 7.47563 7.30856 7.12069 7.30856 6.56831C7.30856 5.99062 7.75856 5.5305 8.61806 5.46469L8.6175 7.77769ZM11.0464 10.8658C11.0464 11.4969 10.5553 11.9306 9.69581 11.9964V9.61762C10.7601 9.92025 11.0464 10.2746 11.0464 10.8664V10.8658Z"
                      fill="#5C6A7A"
                    ></path>
                  </svg>
                  <span>USD</span>
                </div>
              </span>
            </button>
            <ul
              className="dropdown-menu w-[125px] absolute bg-white text-base z-50 float-left py-4 list-none text-left rounded-lg shadow-lg mt-4 hidden m-0  bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <button className="dropdown-item nav-link py-2 px-4 block w-full whitespace-nowrap bg-transparent hover:bg-[#1893F8]">
                  <div className="flex flex-row items-center space-x-2">
                    <div className="border-[#fff] ">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 18C4.02919 18 0 13.9708 0 9C0 4.02919 4.02919 0 9 0C13.9708 0 18 4.02919 18 9C18 13.9708 13.9708 18 9 18ZM12.6562 10.7741C12.6562 9.35494 11.7697 8.55338 9.69581 8.05387V5.55638C10.3371 5.688 10.9508 5.96419 11.5509 6.39787L12.3154 5.16263C11.5624 4.61111 10.678 4.26666 9.75037 4.16362V3.375H8.5635V4.13719C6.858 4.26881 5.69869 5.24137 5.69869 6.66056C5.69869 8.14556 6.62625 8.86837 8.61806 9.36787V11.9441C7.731 11.8125 6.99469 11.4182 6.21675 10.8135L5.34375 12.0094C6.27822 12.7287 7.39163 13.1789 8.5635 13.311V14.625H9.75037V13.3239C11.4829 13.1794 12.6562 12.2197 12.6562 10.7741ZM8.6175 7.77769C7.56731 7.47563 7.30856 7.12069 7.30856 6.56831C7.30856 5.99062 7.75856 5.5305 8.61806 5.46469L8.6175 7.77769ZM11.0464 10.8658C11.0464 11.4969 10.5553 11.9306 9.69581 11.9964V9.61762C10.7601 9.92025 11.0464 10.2746 11.0464 10.8664V10.8658Z"
                          fill="#5C6A7A"
                        ></path>
                      </svg>
                    </div>{' '}
                    <span>USD</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#1893f8] text-[14px] flex-row  xl:block p-3 px-5 pt-1 text-center cursor-pointer text-white bg-veryLightWhitishBlue shadow-lg rounded-full baseline ">
          <span className="flex flex-row mr-1 items-center mt-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="9"
                r="4"
                stroke="white"
                strokeWidth="1.5"
              ></circle>
              <ellipse
                cx="15"
                cy="20"
                rx="7"
                ry="4"
                stroke="white"
                strokeWidth="1.5"
              ></ellipse>
            </svg>
            Login or Register{' '}
          </span>
        </div>
        <button
          id="menu-btn"
          name="menu-btn"
          className="block hamburger xl:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
}
