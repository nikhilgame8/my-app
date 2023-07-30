import { BookOpenIcon, FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const BlogWidget = ({ newArticle }) => {
  return (
    <div className="shadow rounded-lg">
      <div className="p-4 rounded-lg bg-gray-100">
        <div className="uppercase tracking-wide text-red-600 font-semibold my-2 flex items-center text-xs">
          <FireIcon className="h-4 w-4 mr-2" /> Popular Right Now
        </div>
        <div className="flex space-x-4">
          <div className="relative w-14 h-14 shrink-0">
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
              <div className="text-xs text-gray-500 flex items-center">
                Formula 1{" "}
                <span className="h-2 w-2 mx-2 my-auto rounded-full bg-gray-300"></span>{" "}
                3 hours ago
              </div>
            </div>
            <div className="font-bold text-sm  leading-none">
              Amet non nulla tempor ut cupidatat.
            </div>
            <div className="text-gray-500 text-xs">
              Duis amet proident laborum tempor.
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="uppercase tracking-wide text-gray-500 font-semibold flex items-center text-xs">
          <BookOpenIcon className="w-4 h-4 mr-2" /> New Articles
        </div>
        {newArticle.map((item, index) => (
          <div key={index} className="flex space-x-4">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src={
                  "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_6_lnmvwk.jpg"
                }
                fill
                style={{ borderRadius: "5px", objectFit: "cover" }}
                quality={75}
                alt="homepage image"
              />
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm  leading-none">
                Amet non nulla tempor ut cupidatat.
              </div>
              <div className="text-gray-500 line-clamp-1 text-xs">
                read Cillum sunt anim anim voluptate anim minim aute adipisicing
                pariatur tempor Lorem mollit.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogWidget;
