import React from "react";
import HeroSection from "./heroSection";
import Banner from "./banner";
import AboutWebsite from "./aboutWebsite";
import Newsletter from "./newsLetter";
import Features from "./features";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20">
      <HeroSection />
      <Banner />
      <AboutWebsite />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
