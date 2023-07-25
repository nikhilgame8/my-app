import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const SecondaryHeading = (props) => {
  return (
    <div className="flex justify-between items-center my-4">
      <h2 className="font-bold text-2xl">{props.title}</h2>
      <div className="text-red-600 items-center font-semibold flex cursor-pointer">
        <div>
          See all{" "}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />    
        </svg> */}
        </div>
        <div className="h-4 w-4 ml-2">
          <ArrowSmallRightIcon />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeading;
