import Image from "next/image";
import React from "react";

const BuletinsCard = () => {
  return (
    <div>
      <div className="relative h-20 w-20 mx-auto border-2 cursor-pointer border-red-600 rounded-full">
        <Image
          src={
            "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
          }
          style={{ borderRadius: "100%", padding: "2px" }}
          quality={75}
          fill
          alt="homepage image"
        />
      </div>
      <div className="text-xs text-gray-500 text-center mt-2">goel</div>
    </div>
  );
};

export default BuletinsCard;
