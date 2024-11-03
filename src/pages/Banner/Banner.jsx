import React from "react";
import Header from "../../shared/Header/Header";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute z-50 w-full top-3">
        <Header />
      </div>
      <div className="bg-custom-gradient h-[750px] md:h-[850px] lg:h-[713px] w-full rounded-b-[96px]">
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-[1280px] mx-auto pt-24 md:pt-28  px-10">
          <div className="z-40 flex-1 text-center lg:text-left">
            <h2 className="text-white font-bold text-[30px] md:text-[55px] leading-none">
              The Universal DPI Safeguards Framework is live
            </h2>
            <p className="mt-5 text-xl text-white">
              The Framework (version 1.0) is the result of a multi-stakeholder
              approach to ensure DPI implementations mitigate risks at both the
              individual and societal level, advance the Sustainable Development
              Goals and foster trust and equity across all countries.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 mt-10 lg:flex-row">
              <button className=" bg-[#fbb04c] px-5 py-2 flex items-center gap-3 rounded-badge max-w-[320px] justify-between">
                <div className="flex flex-col items-end justify-end">
                  <span className="text-md">Read The</span>
                  <span className="text-[18px] md:text-xl font-bold text-right">
                    Guide to Framework
                  </span>
                </div>
                <div>
                  <img
                    className="h-[40px]"
                    src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084da6_Play%20circle.svg"
                    alt=""
                  />
                </div>
              </button>
              <button className=" bg-[#fbb04c] px-5 py-2 flex items-center gap-3 rounded-badge justify-between max-w-[320px]">
                <div className="flex flex-col items-end">
                  <span className="text-sm lg:text-md">Access The</span>
                  <p className="text-[18px] md:text-xl  font-bold text-right">
                    Safeguards Framework
                  </p>
                </div>
                <div>
                  <img
                    className="h-[40px]"
                    src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084da6_Play%20circle.svg"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="absolute z-10 flex-1 lg:relative lg:top-16 top-36 opacity-70 ">
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
