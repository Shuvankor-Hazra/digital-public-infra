import React from 'react'
import WhyNowImg from "../../../assets/why-now.svg"

const WhyNow = () => {
    return (
        <div className='max-w-screen-xl w-[90%] py-10 mx-auto lg:my-20 my-10'>
            <div className='flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-0'>
                <div className='flex-1'>
                    <img src={WhyNowImg} alt="img" className='lg:pr-[100px]' />
                </div>
                <div className='flex-1 space-y-10 text-center lg:text-left'>
                    <h2 className='text-[30px] lg:text-[44px] uppercase leading-[36px] font-light'>
                        why <br />
                        <span className='font-bold'>now?</span>
                    </h2>

                    <div className='flex flex-col flex-1 space-y-5 text-[18px]'>
                        <p className=''>Like roads and bridges, digital public infrastructure (DPI) is made of digital building blocks that allow governments to provide safe and inclusive services to people at scale.</p>

                        <p>Some governments are already deploying DPI at incredible speed and scale, while others are at the beginning of their digital journeys. Regardless of what stage they are in their journey, the necessary safeguards ought to be in place to ensure DPI is safe, trusted, and inclusive for all.</p>

                        <p>This is where the DPI Safeguards initiative comes in. It is an opportunity for everyone, including from the public and private sectors and civil society, to share lessons learned, create guidance and shape the world's collective digital future.​</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyNow