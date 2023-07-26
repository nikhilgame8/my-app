import Image from "next/image";
import React from "react";

const ShortNewsCard = (props) => {
  return (
    <div className="flex space-x-4">
      <div className="relative w-16 h-16 shrink-0">
        <Image
          src={
            "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
          }
          fill
          style={{ borderRadius: "5px", objectFit: "cover" }}
          quality={75}
          alt="homepage image"
        />
      </div>
      <div className="space-y-2">
        <div className="flex gap-4 items-center">
          <div className="relative h-5 w-5">
            <Image
              src={
                "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
              }
              style={{ borderRadius: "100%" }}
              quality={75}
              fill
              alt="homepage image"
            />
          </div>
          <div className="text-xs text-gray-500 flex items-center">Formula 1 <span class="h-2 w-2 mx-2 my-auto rounded-full bg-gray-300"></span> 3 hours ago</div>
        </div>
        <div className="font-bold text-base  leading-none">
          Amet non nulla tempor ut cupidatat.
        </div>
        <div className="text-gray-500 text-xs">
          <span className="text-red-600 font-semibold">Sports</span> . 8 min
          read
        </div>
      </div>
    </div>
  );
};

export default ShortNewsCard;
