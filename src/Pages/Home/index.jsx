import React from "react";
import HeroSection from "./heroSection";
import Banner from "./banner";
import AboutWebsite from "./aboutWebsite";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20">
      <HeroSection />
      <Banner />
      <AboutWebsite />
    </div>
  );
};

export default Home;
