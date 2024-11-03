import React from "react";
import Header from "../../shared/Header/Header";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-3 w-full">
        <Header />
      </div>
      <div className="bg-custom-gradient h-[700px] md:h-[850px] lg:h-[713px] w-full rounded-b-[96px]">
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-[1280px] mx-auto pt-20 px-10">
          <div className="flex-1 text-center lg:text-left z-50">
            <h2 className="text-white font-bold text-[30px] md:text-[70px] leading-none">
              The Universal DPI Safeguards Framework is live
            </h2>
            <p className="text-xl text-white mt-5">
              The Framework (version 1.0) is the result of a multi-stakeholder
              approach to ensure DPI implementations mitigate risks at both the
              individual and societal level, advance the Sustainable Development
              Goals and foster trust and equity across all countries.
            </p>
            <div className="mt-10 flex flex-col lg:flex-row gap-5">
              <button className="btn">
                <span>Read The</span>
                Guide to Framework
              </button>
              <button className="btn">
                <span>Access The</span>
                Safeguards Framework
              </button>
            </div>
          </div>
          <div className="flex-1 lg:relative lg:top-16 absolute top-36 z-10 opacity-70 ">
            <img
              src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084dee_design.svg"
              alt=""
              className="w-full max-h-[660px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
