import {
  DocumentIcon,
  EnvelopeIcon,
  FlagIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1140px] md:mx-auto px-4 space-y-12 my-6 carousel-animation-show">
      <section className="sm:flex space-y-4 gap-4 justify-between">
        <div className="sm:w-1/2 space-y-4">
          <div className="text-lg font-bold text-red-600">About</div>
          <h1 className="text-2xl font-black">
            Cupidatat duis dolore elit cupidatat. Velit in proident anim enim
            fugiat enim aute nisi duis. Commodo veniam magna quis quis pariatur.
          </h1>
          <p className="">
            Tempor aliqua in ad anim sit amet culpa elit anim irure Lorem. Magna
            id proident et id id mollit tempor Lorem mollit. Esse labore quis
            culpa cupidatat cupidatat esse eiusmod quis. Id eu esse est proident
            aliqua excepteur esse voluptate pariatur laboris id. Occaecat anim
            pariatur tempor tempor Lorem nostrud incididunt irure sint. Nostrud
            ullamco ipsum ad sit id officia aliquip minim consectetur.
          </p>
        </div>
        <div className="relative h-[312px] md:w-[472px] w-full">
          <Image
            src={
              "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
            }
            style={{ borderRadius: "10px", objectFit: "cover" }}
            // width={472}
            // height={312}
            fill
            quality={75}
            alt="homepage image"
          />
        </div>
      </section>
      <section className="sm:flex relative justify-between space-y-4 gap-4">
        <div className="absolute border-b border-gray-300 top-8 hidden sm:block w-full"></div>
        <div className="space-y-4 z-20">
          <div className="text-white bg-black inline-block p-3 font-bold rounded-full">
            <FlagIcon className="h-4 w-4" />
          </div>
          <div className="font-bold text-lg">Founded</div>
          <p>
            Laboris id cillum sit proident incididunt deserunt incididunt ipsum
            dolore officia ut nostrud laboris excepteur.
          </p>
        </div>
        <div className="space-y-4 z-20">
          <div className="text-white bg-black inline-block p-3 font-bold rounded-full">
            <DocumentIcon className="h-4 w-4" />
          </div>
          <div className="font-bold text-lg">Founded</div>
          <p>
            Laboris id cillum sit proident incididunt deserunt incididunt ipsum
            dolore officia ut nostrud laboris excepteur.
          </p>
        </div>
        <div className="space-y-4 z-20">
          <div className="text-white bg-black inline-block p-3 font-bold rounded-full">
            <UsersIcon className="h-4 w-4" />
          </div>
          <div className="font-bold text-lg">Founded</div>
          <p>
            Laboris id cillum sit proident incididunt deserunt incididunt ipsum
            dolore officia ut nostrud laboris excepteur.
          </p>
        </div>
      </section>
      <section className="sm:flex space-y-4 justify-between gap-6">
        <div className="sm:w-1/2 shrink-0 space-y-4">
          <div className="font-bold text-lg">Our Mission</div>
          <p className=" text-justify">
            Adipisicing sint pariatur deserunt occaecat eiusmod. Officia mollit
            minim mollit commodo quis dolor ut commodo cupidatat. Eiusmod do
            proident enim ullamco exercitation eu Lorem anim occaecat. Officia
            occaecat cupidatat duis officia exercitation qui magna occaecat ut
            voluptate nisi. Irure aliquip nostrud dolore ipsum esse. Amet
            officia pariatur eiusmod ea consectetur labore velit irure occaecat
            voluptate amet. Amet ea mollit qui eu dolore cupidatat aliquip
            fugiat. Nostrud fugiat pariatur officia excepteur occaecat sint duis
            nostrud anim. Dolore ipsum enim aliquip non quis officia anim sit
            incididunt aliqua reprehenderit esse ipsum.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between shadow gap-4 items-start p-4 hover:scale-105 transition-all hover:ease-in ease-out delay-75 duration-300">
            <Squares2X2Icon className="h-6 w-6 shrink-0" />
            <div>
              <div className="font-bold text-lg">Team</div>
              <p className="line-clamp-2">
                Consectetur sit sit dolore ea consequat excepteur irure eu duis
                reprehenderit consequat excepteur. Et aliqua sunt veniam quis id
                eiusmod excepteur quis nisi culpa nostrud laboris. Eu sint culpa
                qui mollit. Culpa id exercitation duis pariatur excepteur magna.
              </p>
            </div>
          </div>
          <div className="flex justify-between shadow  gap-4 items-start p-4 hover:scale-105 transition-all hover:ease-in ease-out delay-75 duration-300">
            <UserGroupIcon className="h-6 w-6 shrink-0" />
            <div>
              <div className="font-bold text-lg">Board</div>
              <p className="line-clamp-2">
                Consectetur sit sit dolore ea consequat excepteur irure eu duis
                reprehenderit consequat excepteur. Et aliqua sunt veniam quis id
                eiusmod excepteur quis nisi culpa nostrud laboris. Eu sint culpa
                qui mollit. Culpa id exercitation duis pariatur excepteur magna.
              </p>
            </div>
          </div>
          <div className="flex justify-between shadow  gap-4 items-start p-4 hover:scale-105 transition-all hover:ease-in ease-out delay-75 duration-300">
            <EnvelopeIcon className="h-6 w-6 shrink-0" />
            <div>
              <div className="font-bold text-lg">Press</div>
              <p className="line-clamp-2">
                Consectetur sit sit dolore ea consequat excepteur irure eu duis
                reprehenderit consequat excepteur. Et aliqua sunt veniam quis id
                eiusmod excepteur quis nisi culpa nostrud laboris. Eu sint culpa
                qui mollit. Culpa id exercitation duis pariatur excepteur magna.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
