import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center gap-y-10 md:gap-x-5 flex-col md:flex-row">
        <div className="flex flex-col gap-y-5 md:w-[70%]">
          <h1 className="md:text-5xl text-xl font-bold">
            Welcome to trio designs
          </h1>
          <p className="leading-relaxed">
            {` Established in 1998, under the leadership of Mr. Anshul Choudhary, a
          qualified charted accountant, we are pleased to introduce ourselves as
          one of the reputed garment/home furnishing manufacturers & exporters,
          based in Noida, India. We have been serving various brands across the
          globe, backed by five state of the art units with a capacity to
          produce 10 million garments per annum. Apart from being fully equipped
          to produce both woven and knitted products, ‘on time’ delivery has
          been the golden feather in our hat and we aim to continously deliver
          high quality within the stipulated customer timelines. Following the
          world ' s best practices such as innovative design , latest fash lon
          trends , worldwide sourcing and Indepth knowledge of specially the
          European market has helped us in being our customer's delight . we
          believe in a proactive approach and work as an extended team for our
          clients. With years of experience and expertise in handling special
          fabrics , prints and embelishments we have expanded our portfolio to
          high quality home furnishings including bed , kitchen , table and bath
          linens, windows and other decorative accessories , focussingon dynamic
          seasons and moods. While we strive to deliver and perform we continue
          to comply to ethical work and compliance standards and give back to
          the society and environment with various heath and safety initatives.`}
          </p>
        </div>
        <div>
          <img src="/images/bannerImg.jpg" alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
