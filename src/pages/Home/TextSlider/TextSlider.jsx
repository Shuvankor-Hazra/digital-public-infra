import React from 'react';
import './TextSlider.css';
import CalImg from "../../../assets/icon-calender.png";

const TextSlider = () => {
    return (
        <div className="text-slider-container">
            <div className="text-slider">
                <div className='flex items-center'>
                    <img src={CalImg} alt="Calender Img" />
                    <p>Upcoming Webinar on November 6, 2024! What's next: driving adoption of the Universal DPI Safeguards Framework - 🚨 Register here 🚨</p>
                </div>
            </div>
        </div>
    );
};

export default TextSlider;
