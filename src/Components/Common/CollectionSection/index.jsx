import React from "react";
import { useNavigate } from "react-router-dom";

const CollectionSection = () => {
  const navigate = useNavigate();
  return (
    <div

    //   style={{ backgroundImage: `url('/images/collection.jpeg')` }}
    >
      <div className="px-5 md:px-28  relative bg-gradient-to-r from-black to-transparent via-black bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Unleash Your Style with Exquisite Ethnic Wear
          </h1>
          <p className="text-lg text-white mb-8">
            Discover a stunning collection of handcrafted designer outfits
            tailored to perfection for every occasion.
          </p>
          <button
            onClick={() => navigate("/gallery")}
            type="button"
            className=" text-white bg-[#A28140] px-2 py-1 mt-4"
          >
            Explore the Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
