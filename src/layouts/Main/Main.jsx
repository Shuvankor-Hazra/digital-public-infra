import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import TextSlider from '../../pages/Home/TextSlider/TextSlider';

const Main = () => {
    return (
        <>
            <TextSlider />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main;
