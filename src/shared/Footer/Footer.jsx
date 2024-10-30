import React from 'react'
import Undp from "../../assets/undp.png"
import UnitedNation from "../../assets/united-nations.png"

const Footer = () => {
    return (
        <div className='min-h-[400px] bg-gray-700 text-white mt-[10px] pt-[40px]'>
            <div className='mx-auto max-w-screen-2xl'>
                <div className='flex items-center gap-[50px]'>
                    <div className='max-w-[300px] cursor-pointer'>
                        <img src={UnitedNation} alt="" />
                    </div>
                    <div className='max-w-[103px] cursor-pointer'>
                        <img src={Undp} alt="" />
                    </div>
                </div>
                <div className='border border-[#ffffff52]'></div>
                <div className='flex items-center justify-between pt-5'>
                    <div className='w-[762px]'>
                        <h2 className='text-[13px]'>DPI Safeguards is initiated by the Office of the UN Secretary-General’s Envoy on Technology (OSET) and the United Nations Development Programme (UNDP). © 2024</h2>
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