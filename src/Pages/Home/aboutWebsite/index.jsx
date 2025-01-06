import React from "react";

const AboutWebsite = () => {
  return (
    <div className="px-5 md:px-28">
      <div>
        <div className=" text-3xl md:text-5xl font-medium pb-2 md:pb-6">
          About Website
        </div>
        <div className="text-md md:text-[20px] font-semibold">
          Where Tradition Meets Modern Elegance -
        </div>
      </div>
      <div className="flex items-center gap-x-12">
        <div className="flex flex-col gap-y-8">
          <div className="text-sm font-semibold pt-2 leading-relaxed">
            At Trio Clothing, we are passionate about redefining ethnic wear for
            the modern individual. Our designs blend the charm of heritage
            craftsmanship with contemporary trends, offering you outfits that
            celebrate your uniqueness.
          </div>
          <div>
            <h2 className="text-[20px] font-semibold">Our Mission - </h2>
            <p className="text-sm font-semibold pt-2  leading-relaxed">
              To redefine luxury fashion by offering exclusive, handcrafted
              pieces that embody creativity, quality, and elegance. We strive to
              inspire confidence and individuality in every wear.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-semibold">Our Vision - </h2>
            <p className="text-sm font-semibold pt-2 leading-relaxed">
              To redefine luxury fashion by offering exclusive, handcrafted
              pieces that embody creativity, quality, and elegance. We strive to
              inspire confidence and individuality in every wear.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/images/aboutWebsite/aboutWebsiteImg.png" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;
