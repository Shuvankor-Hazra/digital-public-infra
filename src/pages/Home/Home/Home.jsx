import React from 'react'
import HowDoWe from '../HowDoWe/HowDoWe'
import WhyNow from '../WhyNow/WhyNow'
import TextSlider from '../TextSlider/TextSlider'

const Home = () => {
    return (
        <div>
            <TextSlider />
            <WhyNow />
            <HowDoWe />
        </div>
    )
}

export default Home