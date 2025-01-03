import React from "react";
import HeroSection from "./heroSection";
import Banner from "./banner";
import Business from "./business";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 px-4 py-20">
      <HeroSection />
      <Banner />
      <Business/>
    </div>
  );
};

export default Home;
