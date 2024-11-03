import React from "react";
import HowDoWe from "../HowDoWe/HowDoWe";
import WhyNow from "../WhyNow/WhyNow";
import GetInvolved from "../GetInvolved/GetInvolved";
import Focus from "../Focus/Focus";

const Home = () => {
  return (
    <div>
      <WhyNow />
      <Focus />
      <HowDoWe />
      <GetInvolved />
    </div>
  );
};

export default Home;
