import React from 'react'
import Undp from "../../assets/undp.png"
import UnitedNation from "../../assets/united-nations.png"

const Footer = () => {
    return (
        <div className=' bg-gray-800 text-white mt-[10px] pt-[20px] pb-[40px] lg:py-[40px] lg:px-[20px]'>
            <div className='max-w-screen-xl mx-auto w-[90%]'>
                <div className='flex flex-col-reverse lg:flex-row items-center lg:gap-[50px] '>
                    <div className='max-w-[300px] cursor-pointer pb-5 lg:pb-0'>
                        <img src={UnitedNation} alt="" />
                    </div>
                    <div className='max-w-[103px] cursor-pointer'>
                        <img src={Undp} alt="" />
                    </div>
                </div>
                <div className='border border-[#ffffff52]'></div>
                <div className='flex flex-col items-center justify-between pt-5 lg:flex-row'>
                    <div className='lg:w-[762px]'>
                        <h2 className='text-[13px]'>DPI Safeguards is initiated by the Office of the UN Secretary-General’s Envoy on Technology (OSET) and the United Nations Development Programme (UNDP). © 2024</h2>
                        <div className='border border-[#ffffff52] my-5 lg:border-none'></div>
                    </div>
                    <div>
                        <button className='text-white btn btn-outline'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;