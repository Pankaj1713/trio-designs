import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="px-5 md:px-28">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900">
          Stay in Touch with Trio Clothing
        </h2>
        <p className="ext-sm font-semibold pt-2 leading-relaxed">
          Join our exclusive newsletter to receive the latest updates, special
          offers, and insider access to new collections.
        </p>
        <div className="mt-8 flex ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-72 sm:w-96 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="ml-4 bg-black text-white px-3 md:px-6 md:py-3 hover:bg-gray-800 flex items-center gap-x-1 whitespace-nowrap">
            Subscribe Now
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
