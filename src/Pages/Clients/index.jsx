import React from "react";
import OurCustomers from "../Home/ourCustomers";
import Features from "../Home/features";

const Clients = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 px-4 pt-24 mt-4 md:mt-8">
      <Features />
      <OurCustomers />
    </div>
  );
};

export default Clients;
