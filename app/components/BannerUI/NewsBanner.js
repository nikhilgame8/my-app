import Image from "next/image";
import React from "react";

const NewsBanner = () => {
  return (
    <div className="h-full relative">
      <div className="relative h-full w-full">
        <Image
          src={
            "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_2_idyrm4.jpg"
          }
          fill
          style={{ borderRadius: "10px", objectFit: "cover" }}
          quality={75}
          alt="homepage image"
        />
      </div>
      <div className="absolute bottom-0  left-0 h-full flex items-end rounded-lg backdrop-brightness-50">
        <div className="space-y-4 my-4 text-white px-6">
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
            <div className="text-xs">Formula 1 . 3 hours ago</div>
          </div>
          <div className="font-bold text-2xl  leading-none">
            Amet non nulla tempor ut cupidatat.
          </div>
          <p className=" text-sm line-clamp-4">
            Adipisicing anim nostrud sunt sunt culpa eu ad Lorem ea non.
            Exercitation excepteur consectetur aliquip Lorem id est minim ad in
            consequat irure mollit enim. Elit non in cupidatat veniam ad.
            Officia deserunt sunt id nulla id aute esse fugiat.
          </p>
          <div className=" text-sm">
            <span className="">Sports</span> . 8 min read
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
