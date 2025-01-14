import React from "react";
import OurCustomers from "../Home/ourCustomers";
import Features from "../Home/features";

const Clients = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 px-4 py-20">
      <Features />
      <OurCustomers />
    </div>
  );
};

export default Clients;
