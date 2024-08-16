import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ThirdPartyWebsiteSection = () => {
    return (
        <div className="sm:container p-2 sm:p-0 mx-auto py-[20px] gap-10 flex flex-col">

            <div className='mt-6'>
                <h2 className='text-center  text-4xl font-bold leading-normal mb-6'>
                    IBlossomLearn Essential Pathways
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className=' rounded-lg'>
                        <Image src={"/thirdparty1.png"} className='h-[450px] rounded-xl border-8 border-gray-300' alt='' width={1200} height={1200} />
                    </div>
                    <div className='p-2 flex flex-col justify-between'>

                        <p className='leading-8'><span className='font-bold mr-2'>Welcome to Your Exciting Learning Adventure!</span>
                        Get ready to embark on a journey of discovery and growth with iBlossomLearn! Imagine a world where learning is fun, interactive, and tailored just for you. Our exclusive learning partnerships bring you captivating lessons across various subjects, designed to spark your curiosity and ignite your passion for knowledge.
                        Each activity is a step toward mastering new skills and uncovering fascinating facts about the world around you. You will find yourself engaged in dynamic, multimedia-rich content that makes learning feel like an adventure. From solving challenging problems to exploring new concepts, every moment will be filled with excitement and discovery.
                        Are you ready to start this incredible journey? Click the link below to access your personalized learning experience and let the adventure begin. Your path to success and endless possibilities awaits!
                        </p>

                        <div className='rounded-3xl border-2 border-primary w-full mt-5'>
                        <button className='bg-primary p-2 rounded-3xl px-5 border-4 text-[12px] lg:text-base text-white border-white w-full'>
                                <Link href={"/contact"} >
                                Click Here To Continue your Learning Adventure</Link>
                            </button>
                        </div>




                    </div>
                </div>

            </div>
            <div>
                <h2 className='text-center  text-4xl font-bold leading-normal mb-6'>
                    IBlossomLearn Comprehensive
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                    <div className='p-2 flex flex-col justify-between'>

                        <p className='leading-8'><span className='font-bold mr-2'>Welcome to Your Exciting Learning Adventure!</span>
                        Get ready to embark on a journey of discovery and growth with iBlossomLearn! Imagine a world where learning is fun, interactive, and tailored just for you. Our exclusive learning partnerships bring you captivating lessons across various subjects, designed to spark your curiosity and ignite your passion for knowledge.
                        Each activity is a step toward mastering new skills and uncovering fascinating facts about the world around you. You will find yourself engaged in dynamic, multimedia-rich content that makes learning feel like an adventure. From solving challenging problems to exploring new concepts, every moment will be filled with excitement and discovery.
                        Are you ready to start this incredible journey? Click the link below to access your personalized learning experience and let the adventure begin. Your path to success and endless possibilities awaits!

                        </p>

                        <div className='rounded-3xl border-2 border-primary w-full mt-5'>
                        <button className='bg-primary p-2 rounded-3xl px-5 border-4 text-[12px] lg:text-base text-white border-white w-full'>
                                <Link href={"/contact"}>
                                Click Here To Continue your Learning Adventure</Link>
                            </button>
                        </div>




                    </div>
                    <div className=''>
                        <Image src={"/thirdparty2.png"} className='h-[450px] rounded-xl border-8 border-gray-300' alt='' width={1200} height={1200} />
                    </div>
                </div>

            </div>
            <div>
                <h2 className='text-center  text-4xl font-bold leading-normal mb-6'>
                    IBlossomLearn Word Wonders
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className=''>
                        <Image src={"/thirdparty1.png"} className='h-[450px] rounded-xl border-8 border-gray-300' alt='' width={1200} height={1200} />
                    </div>
                    <div className='p-2 flex flex-col justify-between'>

                        <p className='leading-8'><span className='font-bold mr-2'>Welcome to Your Exciting Learning Adventure!</span>
                        Get ready to embark on a journey of discovery and growth with iBlossomLearn! Imagine a world where learning is fun, interactive, and tailored just for you. Our exclusive learning partnerships bring you captivating lessons across various subjects, designed to spark your curiosity and ignite your passion for knowledge. 
                        Each activity is a step toward mastering new skills and uncovering fascinating facts about the world around you. You will find yourself engaged in dynamic, multimedia-rich content that makes learning feel like an adventure. From solving challenging problems to exploring new concepts, every moment will be filled with excitement and discovery. 
                        Are you ready to start this incredible journey? Click the link below to access your personalized learning experience and let the adventure begin. Your path to success and endless possibilities awaits!
                        </p>

                        <div className='rounded-3xl border-2 border-primary w-full mt-5'>
                            <button className='bg-primary p-2 rounded-3xl px-5 border-4 text-[12px] lg:text-base text-white border-white w-full'>
                                <Link href={"/contact"}>
                                Click Here To Continue your Learning Adventure</Link>
                            </button>
                        </div>




                    </div>
                </div>

            </div>



        </div>
    )
}

export default ThirdPartyWebsiteSection