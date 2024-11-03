import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import TextSlider from "../../pages/Home/TextSlider/TextSlider";
import Banner from "../../pages/Banner/Banner";

const Main = () => {
  return (
    <>
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
