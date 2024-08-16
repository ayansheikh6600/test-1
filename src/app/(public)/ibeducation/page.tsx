import CustomeHero from '@/components/widgets/CustomeHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <CustomeHero title={"Flex Accredited K12"} image={"/flexBanner.jpeg"} />
            <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                <p className='leading-8 text-center'>
                    {"Flex Education is an excellent approach to homeschool independently. It offers a flexible, personalized learning experience that allows students to progress at their own pace while receiving comprehensive support tailored to their individual needs."} <br />
                    <br />
                    {"At iBlossomLearn, we provide K-12 learners with an accredited core curriculum ensuring all educational bases are covered. Our self-paced classes allow your child to progress at their own speed, whether fast or slow. In addition to our affordable core program, we offer various electives and language courses as add-ons at a low cost. Students earn their high school diploma upon completion, which serves as proof of their eligibility to attend college or pursue another area of study."}  <br />
                    {"We partner with parents to support the unique homeschooling journey, whether it's traditional homeschooling, roadschooling, worldschooling, unschooling, eclectic homeschooling, classical homeschooling, Montessori homeschooling, or homeschooling with unit studies. iBlossomLearn Flex  ensures a personalized and flexible educational experience for your child."}




                </p>
            </div>
            <div className='flex flex-col items-center'>


                <div className='p-1 text-lg  text-white border-2 border-primary w-fit rounded-3xl'>
                    <button className='bg-primary p-1 px-12 rounded-3xl'>
                        iBLossomLearn Flex K12
                    </button>
                </div>
                <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                    <p className='leading-8 text-center'>
                        {"Perfect for Traveling Students Stay on top of your young learner’s core classes, electives, and state testing while traveling anywhere in the USA or around the world. All you need is access to our curriculum."} <br />
                        {"Ideal for Unschoolers iBlossomLearn provides engaging courses that keep your child ready to learn more, while allowing their educational passion to shine. Our electives cater to your child’s unique learning path."}

                    </p>
                </div>
                <div className='bg-black w-full text-white'>

                    <div className='py-[30px]'>
                        <h2 className='text-center text-2xl '>
                            Flexible for All HomeScholling Styles
                        </h2>
                        <div className='sm:container mx-auto '>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    4 Core Course: $55 Monthly
                                </li>
                                <li>
                                    Add-on 2 Electives: $25 Monthly
                                </li>
                                <li>
                                    AP Classes (with instrutor): $65 Monthly
                                </li>
                                <li>
                                    Online State Testing
                                </li>
                                <li>
                                    Flexible Schedule
                                </li>
                                <li>
                                    Transcripts and Progress Reports Provide
                                </li>
                                <li>
                                    HomeSchool with Ease With iBlossomLearn, you can homeschool confidently knowing we have you covered.
                                </li>
                            </ul>
                            <div className='flex items-center py-10 justify-center'>

                                <div className='p-1 text-lg  text-white border-2 border-primary w-fit rounded-3xl'>
                                    <button className='bg-primary p-1 px-12 rounded-3xl'>
                                        <Link href={"/contact"}>
                                            Contact iBLossomLearn For Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page