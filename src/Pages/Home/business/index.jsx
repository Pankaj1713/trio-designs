import React from "react";

const Business = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg  rounded-lg p-5 items-center overflow-hidden h-full flex flex-col justify-between hover:shadow-2xl group ">
          <h2>Capacity of producing</h2>
          <div>10 Million</div>
          <div>garments per year.</div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg  rounded-lg p-5 items-center overflow-hidden h-full flex flex-col justify-between hover:shadow-2xl group">
          <h2>Investing in our employees</h2>
          <div>4000+</div>
          <div>
            employees trained under P.A.C.E., a soft- Skills Training program.
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg  rounded-lg p-5 items-center overflow-hidden h-full flex flex-col justify-between hover:shadow-2xl group">
          <h2>Working towards being</h2>
          <div>100%</div>
          <div>sustainable</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2>Our Business</h2>
        <p>
          The five pillars of our Good Business approach allows us to align our
          growth with the development of people, the community and the
          environment.
        </p>
        <div>
          <div>
            <div>Environmental</div>
            <div>Sustainability</div>
          </div>
          <div>
            <div>Women’s </div>
            <div>Advancement</div>
          </div>
          <div>
            <div>Skilling and</div>
            <div>Training</div>
          </div>
          <div>
            <div>Health and</div>
            <div>Wellbeing</div>
          </div>
          <div>
            <div>Protecting</div>
            <div>Human Rights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
