import React from "react";

const GetInvolved = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-32 text-white bg-center bg-cover complex-gradient md:bg-fixed">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="mb-10">
          <h2 className="text-[44px] uppercase leading-[36px] font-light text-center mb-5">
            Get
            <br />
            <span className="font-bold">Involved</span>
          </h2>
        </div>
        <div className="grid items-stretch justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* section-1 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="md:h-[200px]">
              <h2 className="text-2xl font-semibold text-white">
                Organize a Gathering
              </h2>
              <p className="mt-5 mb-10 text-sm text-white">
                Host discussions on DPI safeguards with your community through
                workshops or events. Share your insights and learnings with us!
                Get started with our planning kit.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-5 px-4 py-2 mt-5 font-semibold text-black bg-white rounded-badge text-md hover:bg-yellow-500">
                <span>Organize</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e2e_3-User.svg"
                  alt=""
                  className="p-4 bg-yellow-500 rounded-full"
                />
              </button>
            </div>
          </div>
          {/* section-2 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="md:h-[200px]">
              <h2 className="text-2xl font-semibold text-white">
                Contribute to the DPI Safeguards Resource Hub
              </h2>
              <p className="mt-5 mb-10 text-sm text-white">
                Submit your papers, learnings, use cases, or resources on DPI to
                share with the community.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-5 px-4 py-2 mt-5 font-semibold text-black bg-white rounded-badge text-md hover:bg-yellow-500">
                <span>Contribute</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e07_repo-icon.svg"
                  alt=""
                  className="p-4 bg-yellow-500 rounded-full"
                />
              </button>
            </div>
          </div>
          {/* section-3 */}
          <div className="p-[60px] border-2 border-white rounded-badge max-w-[380px] text-center">
            <div className="md:h-[200px]">
              <h2 className="text-2xl font-semibold text-white">
                Organize a Gathering
              </h2>
              <p className="mt-5 mb-10 text-sm text-white">
                Host discussions on DPI safeguards with your community through
                workshops or events. Share your insights and learnings with us!
                Get started with our planning kit.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-5 px-4 py-2 mt-5 font-semibold text-black bg-white rounded-badge text-md hover:bg-yellow-500">
                <span>Organize</span>
                <img
                  src="https://cdn.prod.website-files.com/66436001b87a6ae0f7084d56/66436001b87a6ae0f7084e08_calendar_icon.svg"
                  alt=""
                  className="p-4 bg-yellow-500 rounded-full"
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
