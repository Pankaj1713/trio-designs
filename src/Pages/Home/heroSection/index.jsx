import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-10 items-center justify-center lg:flex-row lg:justify-between mt-[100px] lg:mt-[120px]">
      <div className="font-bold text-5xl sm:text-6xl z-[1] w-1/2">
        Let's make waves in the digital world.
      </div>
      <div className="sh-image w-[100%] sm:w-[70%] lg:w-[40%] lg:mr-10">
        <img src="/images/heroImg.webp" alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
