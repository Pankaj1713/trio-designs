import React from "react";
import CollectionSection from "../../Components/Common/CollectionSection";

const teamMembers = [
  { name: "Bonnie Green", position: "Name of the Position" },
  { name: "Thomas Lean", position: "Name of the Position" },
  { name: "Jese Leos", position: "Name of the Position" },
  { name: "Leslie Livingston", position: "Name of the Position" },
];

const AboutUs = () => {
  return (
    <div className="px-4 pt-20">
      <div className="bg-[#A28140] px-4 sm:px-8 md:px-16 lg:px-28 py-16">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-sm md:text-base text-white mb-4">
              At TROIS DESIGNS, we believe that fashion is not just about
              clothing—it’s about expressing your unique identity and
              celebrating life’s moments with grace. Rooted in heritage and
              inspired by modern aesthetics, our brand specializes in curating
              exquisite ethnic wear that embodies timeless craftsmanship and
              contemporary sophistication.
            </p>
            <p className="text-sm md:text-base text-white">
              Each piece in our collection is a testament to our commitment to
              quality, artistry, and individuality. From the delicate touch of
              handcrafted embroidery to the luxurious feel of premium fabrics,
              we ensure that every outfit tells a story—your story.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/aboutUsImg.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-[50vh] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="mt-16 py-8 px-4 sm:px-8 md:px-16 lg:px-28 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center md:text-start mb-8 md:mb-12">
          Our Promise
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 bg-white p-6 md:p-14 rounded-lg shadow-lg">
          <div className="flex items-start">
            <span className="text-3xl sm:text-4xl font-bold text-[#A28140] mr-4">
              01
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                Exceptional Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Designed to perfection by skilled artisans.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-3xl sm:text-4xl font-bold text-[#A28140] mr-4">
              02
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                Bespoke Designs
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Tailored to reflect your personality and vision.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-3xl sm:text-4xl font-bold text-[#A28140] mr-4">
              03
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                Unmatched Quality
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Only the finest materials and techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-[#F5F0E5] px-4 sm:px-8 md:px-16 lg:px-28 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4"
            >
              <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-black">{member.name}</h3>
              <p className="text-sm font-medium text-[#A28140] mb-2">
                {member.position}
              </p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          ))}
        </div>
      </div>

      <CollectionSection />
    </div>
  );
};

export default AboutUs;
