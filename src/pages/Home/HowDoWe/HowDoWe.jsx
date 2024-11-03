import React, { useState } from 'react';
import DesignSvg from '../../../assets/icon-design.svg';
import DiscoverSvg from '../../../assets/icon-discover.svg';
import EvolveSvg from '../../../assets/icon-evolve.svg';
import ImplementSvg from '../../../assets/icon-implement.svg';

const HowDoWe = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('discover');

    return (
        <div className='max-w-screen-xl w-[90%] py-5 mx-auto my-20'>
            <div>
                <h2 className='text-[44px] uppercase leading-[36px] font-light text-center mb-5'>
                    How do we<br />
                    <span className='font-bold'>co-create?</span>
                </h2>
                <p className='max-w-[800px] mx-auto text-center text-lg mt-5 mb-10'>
                    Stewarded by the United Nations, the DPI Safeguards initiative is a multi-stakeholder effort towards ensuring a safe and inclusive digital society. Diverse stakeholders contribute through open dialogue and feedback, which will shape the development of the DPI Safeguards Framework. Through regular updates and dedicated multi-phased working groups, we are aiming for a comprehensive and adaptable framework. Here's our process:
                </p>
            </div>
            <div>
                <div role="tablist" className="relative justify-center lg:space-x-10 tabs">
                    <label
                        className={`tab lg:text-[20px] text-gray-500 ${activeTab === 'discover' ? ' text-black border-b-8 pb-[62px] border-[#139cd8]' : 'pb-[70px]'}`}
                        aria-label="Discover"
                        onClick={() => setActiveTab('discover')}
                    >
                        <img src={DiscoverSvg} alt="Discover icon" className="inline-block w-8 h-8 lg:mr-5 lg:w-12 lg:h-12" />
                        <span>Discover</span>
                    </label>

                    <label
                        className={`tab lg:text-[20px] text-gray-500 ${activeTab === 'design' ? ' text-black border-b-8 pb-[62px] border-[#139cd8]' : 'pb-[70px]'}`}
                        aria-label="Design"
                        onClick={() => setActiveTab('design')}
                    >
                        <img src={DesignSvg} alt="Design icon" className="inline-block w-12 h-12 mr-5" />
                        <span>Design</span>
                    </label>

                    <label
                        className={`tab lg:text-[20px] text-gray-500 ${activeTab === 'implement' ? ' text-black border-b-8 pb-[62px] border-[#139cd8]' : 'pb-[70px]'}`}
                        aria-label="Implement"
                        onClick={() => setActiveTab('implement')}
                    >
                        <img src={ImplementSvg} alt="Implement icon" className="inline-block w-12 h-12 mr-5" />
                        <span>Implement</span>
                    </label>

                    <label
                        className={`tab lg:text-[20px] text-gray-500 ${activeTab === 'evolve' ? 'text-black border-b-8 pb-[62px] border-[#139cd8]' : 'pb-[70px]'}`}
                        aria-label="Evolve"
                        onClick={() => setActiveTab('evolve')}
                    >
                        <img src={EvolveSvg} alt="Evolve icon" className="inline-block w-12 h-12 mr-5" />
                        <span>Evolve</span>
                    </label>
                    <div className='absolute w-full border top-[65px] -z-10'></div>
                </div>

                <div className="py-5 my-5 text-center lg:p-10 lg:m-10">
                    {activeTab === 'discover' &&
                        <div className='lg:max-w-[70%] mx-auto leading-none'>
                            <h2 className='text-[32px] font-bold tracking-wider'>Discover</h2>
                            <h3 className='text-[27px] text-[#232e3d] font-thin mb-4'>We uncover insights.</h3>
                            <p className='text-lg leading-5 text-[#333]'>By analyzing existing resources, implementation experiences, and expert insights, we map best practices and gather valuable knowledge that informs the development of the Framework.</p>
                        </div>
                    }
                    {activeTab === 'design' && <div className='max-w-[70%] mx-auto leading-none'>
                        <h2 className='text-[32px] font-bold tracking-wider'>Design</h2>
                        <h3 className='text-[27px] text-[#232e3d] font-thin mb-4'>We build together.</h3>
                        <p className='text-lg leading-5 text-[#333]'>
                            Leveraging the discoveries, we co-create adaptable, open standards and guidelines grounded in real-world contexts. Collaboration with communities, working groups, and stakeholders ensures continuous refinement, resulting in a robust yet flexible framework.</p>
                    </div>
                    }
                    {activeTab === 'implement' && <div className='max-w-[70%] mx-auto leading-none'>
                        <h2 className='text-[32px] font-bold tracking-wider'>Implement</h2>
                        <h3 className='text-[27px] text-[#232e3d] font-thin mb-4'>We empower action.</h3>
                        <p className='text-lg leading-5 text-[#333]'>
                            Supporting "lighthouse countries" accelerates their implementation journey, driving momentum for widespread adoption of safeguards. Through partnerships and knowledge exchange, this pilot phase ensures continuous learning and evolution of the DPI Safeguards Framework.</p>
                    </div>}
                    {activeTab === 'evolve' && <div className='max-w-[70%] mx-auto leading-none'>
                        <h2 className='text-[32px] font-bold tracking-wider'>Evolve</h2>
                        <h3 className='text-[27px] text-[#232e3d] font-thin mb-4'>  We never stop learning.</h3>
                        <p className='text-lg leading-5 text-[#333]'>
                            Human voices are at the heart of our journey. Through ongoing "Listening & Learning" efforts, we engage with international organizations, conduct in-country consultations, and host multi-stakeholder convenings. This continuous feedback loop refines the DPI Safeguards Framework​, ensuring its relevance, practicality, and ability to address real-world needs.​</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default HowDoWe;
