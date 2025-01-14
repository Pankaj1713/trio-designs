import React from "react";
import { useNavigate } from "react-router-dom";

const CollectionSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F0E5] px-4 sm:px-8 md:px-16 lg:px-28 py-8">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden shadow-lg px-4 sm:px-8 md:px-12"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%), url('/images/collection.jpeg')",
        }}
      >
        <div className="container mx-auto py-16 md:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Unleash Your Style with Exquisite Ethnic Wear
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-10">
            Discover a stunning collection of handcrafted designer outfits
            tailored to perfection for every occasion.
          </p>
          <button
            onClick={() => navigate("/gallery")}
            type="button"
            className="text-white bg-[#A28140] hover:bg-[#8F6E35] px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300"
          >
            Explore the Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
