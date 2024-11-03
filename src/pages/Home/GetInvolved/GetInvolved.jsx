import React from "react";

const GetInvolved = () => {
  return (
    <div className="complex-gradient min-h-screen text-white bg-cover md:bg-fixed bg-center flex justify-center items-center py-32">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="mb-10">
          <h2 className="text-[44px] uppercase leading-[36px] font-light text-center mb-5">
            Get
            <br />
            <span className="font-bold">Involved</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch justify-center">
          {/* section-1 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="h-[200px]">
              <h2 className="text-white text-2xl font-semibold">
                Organize a Gathering
              </h2>
              <p className="text-white text-sm mt-5 mb-10">
                Host discussions on DPI safeguards with your community through
                workshops or events. Share your insights and learnings with us!
                Get started with our planning kit.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-badge bg-white text-black text-md font-semibold  hover:bg-yellow-500 flex items-center gap-5 mt-5">
                <span>Organize</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e2e_3-User.svg"
                  alt=""
                  className="bg-yellow-500 p-4 rounded-full"
                />
              </button>
            </div>
          </div>
          {/* section-2 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="h-[200px]">
              <h2 className="text-white text-2xl font-semibold">
                Contribute to the DPI Safeguards Resource Hub
              </h2>
              <p className="text-white text-sm mt-5 mb-10">
                Submit your papers, learnings, use cases, or resources on DPI to
                share with the community.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-badge bg-white text-black text-md font-semibold  hover:bg-yellow-500 flex items-center gap-5 mt-5">
                <span>Contribute</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e07_repo-icon.svg"
                  alt=""
                  className="bg-yellow-500 p-4 rounded-full"
                />
              </button>
            </div>
          </div>
          {/* section-3 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="h-[200px]">
              <h2 className="text-white text-2xl font-semibold">
                Organize a Gathering
              </h2>
              <p className="text-white text-sm mt-5 mb-10">
                Host discussions on DPI safeguards with your community through
                workshops or events. Share your insights and learnings with us!
                Get started with our planning kit.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-badge bg-white text-black text-md font-semibold  hover:bg-yellow-500 flex items-center gap-5 mt-5">
                <span>Organize</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e08_calendar_icon.svg"
                  alt=""
                  className="bg-yellow-500 p-4 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
