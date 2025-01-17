import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    className: "notes-slider",
  };

  return (
    <div className="w-full px-4 pt-[82px] md:pt-[120px]">
      <Slider {...settings}>
        <div>
          <img
            src="/images/heroImg1.jpg"
            alt="Hero Image 1"
            className="w-full h-[30vh] md:h-[70vh] object-contain md:object-cover"
          />
        </div>
        <div>
          <img
            src="/images/heroImg1.jpg"
            alt="Hero Image 2"
            className="w-full h-[30vh] md:h-[70vh] object-contain md:object-cover"
          />
        </div>
        <div>
          <img
            src="/images/heroImg1.jpg"
            alt="Hero Image 3"
            className="w-full h-[30vh] md:h-[70vh] object-contain md:object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
