import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const CARDS_DATA = [
  {
    image: "/images/cards/cardImg1.png",
    title: "Baroque Sport Elegance",
    description:
      "An extraordinary blend of athletic comfort and opulent style, this sport top adorned with baroque embellishments is paired with a silky white satin skirt. A look that redefines sportswear luxury.",
  },
  {
    image: "/images/cards/cardImg2.png",
    title: "Bridal Couture",
    description:
      "Embrace the edgy sophistication with this glossy black vinyl top, infused with golden reflections. A piece that epitomizes the bold spirit of modern fashion.",
  },
  {
    image: "/images/cards/cardImg3.png",
    title: "Monochrome Lace Enchantment",
    description:
      "A timeless creation of black and white lace, this dress weaves together classic elegance and contemporary design. The embodiment of grace for the fashion-forward woman.",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5 md:px-28">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-[#A28140] text-3xl md:text-5xl font-medium">
          Showcase Highlights
        </h1>
        <div className="md:text-[20px] text-md leading-relaxed">
          Explore the fusion of modern elegance and innovative design in our
          'Collection Highlights.' Each piece is a statement, reflecting the
          unique aesthetic of 'Ada Luxe.' Dive into the collection below.
        </div>
      </div>
      <div className="w-full mt-10 md:mt-16">
        <Slider {...settings} className="gap-5">
          {CARDS_DATA?.map((data, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-[330px]">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#A28140]">
                    {data?.title}
                  </h3>
                  <p className="text-sm">{data?.description}</p>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={() => navigate("/gallery")}
                  type="button"
                  className=" text-white bg-[#A28140] px-2 py-1 mt-4"
                >
                  Explore the Collection
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
