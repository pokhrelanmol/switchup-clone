import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100 min-w-full p-5 pb-0 border-b-4 border-red-600">
      <div className=" grid md:grid-cols-2 ">
        <div className="flex flex-col pt-44 md:pt-0 justify-center items-center">
          <h1 className=" font-bold  text-5xl md:text-7xl sm:font-extrabold text-gray-700 sm:p-5  leading-14 tracking-wide      ">
            Your Guide to the Best Tech Bootcamps
          </h1>
          <p className="text-lg text-gray-800 leading-14 tracking-wider p-5">
            Your Guide to the Best Tech Bootcamps Providing data-driven rankings
            and reviews to launch your tech career since 2014.
          </p>
        </div>
        <div className="">
          <img
            src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/su-home-hero-image-d/original.png?1629356727"
            alt="hero-image"
            className="container object-contain h-96 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
