import React from "react";
import { FaHandHoldingHeart, FaFeatherAlt } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";

const Features = () => {
  const features = [
    {
      icon: <LuLightbulb className="w-12 h-12 mx-auto mb-4" />,
      title: "Bridal Couture:",
      description:
        "We never settle. Innovation drives us to explore new horizons, creating fashion that's always a step ahead.",
    },
    {
      icon: <FaHandHoldingHeart className="w-12 h-12 mx-auto mb-4" />,
      title: "Quality",
      description:
        "Every stitch, every fabric, is chosen with care. Quality isn't just a word: it's our promise.",
    },
    {
      icon: <FaFeatherAlt className="w-12 h-12 mx-auto mb-4" />,
      title: "Elegance",
      description:
        "Elegance is our essence. In every design, we aim to capture the timeless beauty that makes you shine.",
    },
  ];

  return (
    <div className="bg-[#A28140] py-16 px-6 sm:px-12 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        {features.map((feature, index) => (
          <div key={index}>
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-4 text-sm leading-relaxed font-semibold">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
