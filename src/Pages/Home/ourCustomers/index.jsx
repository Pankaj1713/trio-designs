import React from "react";

const CARDS = [
  {
    customerImage: "/images/customers/customer1.png",
    name: "Jonathan Vallem",
    address: "New York",
    description:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
  },
  {
    customerImage: "/images/customers/customer2.png",
    name: "Smith Johnson",
    address: "New York",
    description:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
  },
];

const OurCustomers = () => {
  return (
    <div className="px-5 md:px-28">
      <h2 className="text-3xl md:text-5xl font-medium text-center">
        Our customers say the nicest things about our service
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mt-20">
        {CARDS?.map?.((cards, index) => (
          <div key={index} className="bg-white p-8 shadow-md">
            <div className="flex items-center gap-x-5">
              <img
                src={cards.customerImage}
                alt="Customers"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{cards.name}</h3>
                <p className="text-sm text-gray-500">{cards.address}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">{cards.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomers;
