import CustomeHero from '@/components/widgets/CustomeHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <CustomeHero title={"iBLossom Cast"} image={"/CastHero.png"} />
            <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                <p className='leading-8 text-center'>
                    {"At iBlossomLearn, our innovative iBlossom Cast offers students a flexible learning format that goes beyond traditional library resources. Students can access essential reading materials, and listen to stories  through engaging podcasts, perfect for listening while commuting or multitasking. This platform not only enhances learning but also fosters creativity and storytelling skills as students create and share their audio stories."} <br />
                    {"iBlossom Cast also promotes collaboration and communication. Students work together to produce podcasts, developing teamwork and research skills. Additionally, podcasting provides a practical way for students to practice speaking skills, such as tone, pace, and clarity, ensuring they become effective communicators. This dynamic approach makes learning interactive and adaptable to each student’s lifestyle."}
                    




                </p>
            </div>
            <div className='py-[40px] bg-black flex justify-center items-center'>

                <div className='p-1 text-lg  text-white border-2 border-primary w-fit rounded-3xl'>
                <button className='bg-primary p-1 px-12 rounded-3xl'>
                            <Link href={"/contact"}>
                            Contact iBLossomLearn For Details</Link>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default page