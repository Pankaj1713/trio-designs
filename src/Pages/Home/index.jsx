import React from "react";
import HeroSection from "./heroSection";
import Banner from "./banner";
import AboutWebsite from "./aboutWebsite";
import OurCustomers from "./ourCustomers";
import Features from "./features";
import CollectionSection from "../../Components/Common/CollectionSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 mt-28">
      <HeroSection />
      <Banner />
      <AboutWebsite />
      <OurCustomers />
      <Features />
      <CollectionSection />
    </div>
  );
};

export default Home;
