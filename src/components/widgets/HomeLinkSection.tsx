import Link from 'next/link'
import React from 'react'

const HomeLinkSection = () => {
  return (
    <div>
        <div className='py-[40px] bg-black '>
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl text-center text-white font-semibold p-5">
              What they need to learn. How they want to learn.
            </h2>
          </div>
          <div className="sm:container p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4   items-center mx-auto">
            <div className='p-1 text-lg  border-2 transition-all duration-700 hover:border-primary w-full rounded-3xl  font-semibold'>
              <button className='hover:bg-primary te xt-black  hover:text-white bg-gray-300 transition-all w-full duration-700 p-1  rounded-3xl'>
                <Link  className='w-full' href={"/ibschool"}>Private School</Link>
              </button>
            </div>
            <div className='p-1 text-lg  border-2 transition-all duration-700 hover:border-primary w-full rounded-3xl  font-semibold'>
              <button className='hover:bg-primary  text-black  hover:text-white bg-gray-300 transition-all w-full duration-700 p-1  rounded-3xl'>
              <Link  className='w-full' href={"/ibeducation"}>Flex Accredited K12</Link>
              </button>
            </div>
            <div className='p-1 text-lg sm:col-span-6 md:col-auto border-2 transition-all duration-700 hover:border-primary w-full rounded-3xl  font-semibold'>
              <button className='hover:bg-primary  text-black  hover:text-white bg-gray-300 transition-all w-full duration-700 p-1  rounded-3xl'>
              <Link  className='w-full' href={"/ibhomeschool"}>SEL For HomeSchooling Families</Link>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 justify-center items-center px-0 sm:px-[15px] md:px-[50px] mt-3">
            <div className='p-1 text-lg  border-2 transition-all duration-700 hover:border-primary w-full h-fit sm:w-[85%] md:w-[70%] rounded-3xl mx-auto font-semibold'>
              <button className='hover:bg-primary  text-black  hover:text-white bg-gray-300 transition-all w-full duration-700 p-1  rounded-3xl'>
              <Link  className='w-full' href={"/ibcast"}>iBlossom Cast</Link>
              </button>
            </div>
            <div className='p-1 text-lg  border-2 transition-all duration-700 hover:border-primary w-full h-fit sm:w-[85%] md:w-[70%] rounded-3xl mx-auto font-semibold'>
              <button className='hover:bg-primary  text-black  hover:text-white bg-gray-300 transition-all w-full duration-700 p-1  rounded-3xl'>
              <Link className='w-full'  href={"/ibinstitute"}>iBLossomLearn Language Institute</Link>
              </button>
            </div>
          </div>


        </div>
    </div>
  )
}

export default HomeLinkSection