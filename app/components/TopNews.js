"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TopNews = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.data.length);
    }, 3000); // Change the interval (in milliseconds) for the slide transition

    return () => clearInterval(interval);
  }, [props.data.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.data.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === props.data.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slides relative">
        {props.data.map((item, index) => (
          <div
          key={index}
            className={`slide ${index === currentIndex ? 'block carousel-animation-show' : 'hidden carousel-animation-hide'}`}
          >
            <div className="flex md:flex-row flex-col space-y-4 md:space-x-4 justify-between">
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
                  }
                  width={472}
                  style={{ borderRadius: "10px" }}
                  height={312}
                  quality={75}
                  alt="homepage image"
                />
              </div>
              <div className="space-y-4 w-full md:w-1/2">
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10">
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
                  <span className="text-gray-500">
                    Netflix . 12 minutes ago
                  </span>
                </div>
                <div className="md:text-3xl text-2xl font-bold ">
                  Where To Watch &apos;John Wick: Chapter 4&apos; {index}
                </div>
                <p className="text-gray-500">
                  loremDeserunt magna nulla elit reprehenderit. Incididunt velit
                  aute esse labore ex veniam. Adipisicing est amet sint ullamco
                  exercitation Lorem.
                </p>
                <div className="text-gray-500 font-medium">
                  <span className="text-red-600">Movies</span> . 4 min read
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="carousel-dots">
        {props.data.map((item, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button className="prev-btn w-10 h-10 hidden" onClick={goToPrevSlide}>
        <ChevronLeftIcon />
      </button>
      <button className="next-btn w-10 h-10 hidden" onClick={goToNextSlide}>
        <ChevronRightIcon />
      </button>
      </div>
    </div>
  );
};

export default TopNews;
