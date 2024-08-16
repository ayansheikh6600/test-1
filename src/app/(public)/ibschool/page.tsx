import CustomeHero from '@/components/widgets/CustomeHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <CustomeHero title={"Private School"} image={"/privateHero.jpeg"} />
            <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                <p className='leading-8 md:leading-10  text-center'>
                    {"At iBlossomLearn, a top-tier private school, literacy is at the heart of our instruction across all content areas. We redefine education with our personalized and holistic approach. Our rigorous curriculum adapts to each student's academic and skill levels, ensuring they excel in core subjects while enhancing their critical thinking and application skills. We prepare students for successful global citizenship by prioritizing real-world skills. Our dedicated certified teachers, flexible self-paced learning, and strong SEL support make us stand out. With iBlossomLearn, your scholar achieves academic excellence and essential life skills for an ever-changing world. "}
                    {"Homeschooling, or Homeschooling with unit studies. iBlossomLearn Flex  ensures a personalized and flexible educational experience for your child."}


                </p>
            </div>

            <div className='bg-black py-[40px] flex flex-col gap-2'>
                <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4   items-center mx-auto '>

                    <div className=' p-1 text-lg w-full  text-white border-2 border-primary  rounded-3xl'>
                        <button className='bg-primary p-1 px-12 rounded-3xl uppercase w-full'>
                            <Link href={'/learning?data=%7B"categoryId"%3A"65d4c8f3f790f217497b5768"%2C"color"%3A"%23FB8500"%7D'}>
                            Math K12
                            </Link>
                        </button>
                    </div>
                    <div className=' p-1 text-lg w-full  text-white border-2 border-primary  rounded-3xl'>
                        <button className='bg-primary p-1 px-12 rounded-3xl uppercase w-full'>
                            <Link href={'/learning?data=%7B"categoryId"%3A"65c1e1c0ab18ffccd57fba26"%2C"color"%3A"%23FFDA15"%7D'}>
                            Language ArtS
                            </Link>
                        </button>
                    </div>
                    <div className=' p-1 text-lg w-full  text-white border-2 border-primary  rounded-3xl'>
                        <button className='bg-primary p-1 px-12 rounded-3xl uppercase w-full'>
                            <Link href={'/learning?data=%7B"categoryId"%3A"65b7dad8e838e88e3a7b2c11"%2C"color"%3A"%232C92A8"%7D'}>
                            Professional Development
                            </Link>
                        </button>
                    </div>


                </div>
                <div className='flex justify-center mt-0 sm:mt-5'>
                <div className=' p-1 text-lg  text-white border-2 border-primary w-fit rounded-3xl'>
                        <button className='bg-primary p-1 px-12 rounded-3xl'>
                            <Link href={"/contact"}>
                            Contact iBLossomLearn For Details</Link>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page