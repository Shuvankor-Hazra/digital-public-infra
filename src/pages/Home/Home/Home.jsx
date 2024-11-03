import React from "react";
import Banner from "../../Banner/Banner";
import Focus from "../Focus/Focus";
import GetInvolved from "../GetInvolved/GetInvolved";
import HowDoWe from "../HowDoWe/HowDoWe";
import WhyNow from "../WhyNow/WhyNow";

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyNow />
            <Focus />
            <HowDoWe />
            <GetInvolved />
        </div>
    );
};

export default Home;
