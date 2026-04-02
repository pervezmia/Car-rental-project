import React from "react";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-20 bg-violet-600 max-w-[80%] mx-auto rounded-2xl">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold text-white">
            Experience the road like never before
          </h2>
          <p className="text-xs text-white">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button className="btn btn-warning w-30 text-white">
            View all cars
          </button>
        </div>

        <div className="">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Choose Car ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Place of rental ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Place of return ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
