const Focus = () => {
  return (
    <div className="complex-gradient min-h-screen text-white bg-cover md:bg-fixed bg-center flex justify-center items-center py-32">
      <div className="px-10 max-w-[1280px] mx-auto">
        <div>
          <h2 className="text-[44px] uppercase leading-[36px] font-light text-center mb-5">
            WHAT IS THE FOCUS OF
            <br />
            <span className="font-bold">the DPI Safeguards Initiative?</span>
          </h2>
          <p className="max-w-[800px] mx-auto text-center text-lg mt-5 mb-10">
            Our approach aims to minimize risks across all layers of digital
            transformation—technical, normative, and organizational—while
            ensuring maximum adherence to standards and regulations. This
            strategic focus creates an environment where DPI implementation is
            secure, inclusive, practical, and adaptable, thereby safeguarding
            the integrity of DPI and fostering a secure and trustworthy
            environment for all stakeholders. Our three key areas include:
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
          {/* card-1 */}
          <div className="bg-[#139cd8] px-[36px] py-[60px] w-full lg:max-w-[320px] text-center rounded-lg">
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084df0_icon-framework.svg"
                alt=""
                className="h-[140px]"
              />
            </div>
            <div className="h-[180px]">
              <h2 className="my-5 text-2xl">DPI Safeguards Framework</h2>
              <p className="text-sm">
                Co-created through expert-led discussions and public
                contributions, the Universal DPI Safeguards Framework provides
                actionable recommendations to ensure DPI are safe and inclusive.
              </p>
            </div>
            <button className="mt-14 border-2 border-white rounded-badge px-4 py-1 text-white hover:bg-white hover:text-[#139cd8]">
              Access the Universal DPI Safeguards Framework
            </button>
          </div>
          {/* card-2 */}
          <div className="bg-[#139cd8] px-[36px] py-[60px] w-full lg:max-w-[320px] text-center rounded-lg">
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084def_icon-gitbook.svg"
                alt=""
                className="h-[140px]"
              />
            </div>
            <div className="h-[180px]">
              <h2 className="my-5 text-2xl">DPI Safeguards Resource Hub</h2>
              <p className="text-sm">
                A community hub will feature resources from and for partners,
                including the latest iterations of the Framework, DPI research,
                and implementation guidance to facilitate international and
                in-country collaboration as well as knowledge sharing.
              </p>
            </div>
            <button className="mt-14 border-2 border-white rounded-badge px-4 py-1 text-white hover:bg-white hover:text-[#139cd8]">
              Visit the DPI Safeguards Resource Hub
            </button>
          </div>
          {/* card-3 */}
          <div className="bg-[#139cd8] px-[36px] py-[60px] w-full lg:max-w-[320px] text-center rounded-lg">
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084df1_icon-inconty-ap.svg"
                alt=""
                className="h-[140px]"
              />
            </div>
            <div className="h-[180px]">
              <h2 className="my-5 text-2xl">
                In-Country DPI Safeguards Adoption
              </h2>
              <p className="text-sm">
                As the DPI Safeguards Framework is being developed, in-country
                applications of DPI will serve as a test bed to gather insights
                for improving the Framework's development.
              </p>
            </div>
            <button className="mt-14 border-2 border-white rounded-badge px-4 py-1 text-white hover:bg-white hover:text-[#139cd8]">
              Access the Universal DPI Safeguards Framework
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
