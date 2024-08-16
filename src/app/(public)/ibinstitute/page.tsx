import CustomeHero from '@/components/widgets/CustomeHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <CustomeHero title={"iBLossomLearn Language Institute"} image={"/languageInstitute.jpeg"} />
            <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                <p className='leading-8 text-center'>
                    {"Welcome to the iBlossomLearn Language Institute, where we open doors to global communication and cultural understanding. Our institute offers a diverse range of language courses designed to meet the needs of students at all levels, from beginners to advanced speakers. Whether you're looking to master a new language for travel, business, or personal enrichment, our comprehensive programs provide the tools and support you need to succeed."} <br />
                    {"At iBlossomLearn Language Institute, we believe in immersive and interactive learning experiences. Our certified instructors bring a wealth of knowledge and cultural insights, ensuring that language acquisition is both effective and engaging. Through a combination of live virtual classes, interactive exercises, and multimedia resources, students are able to develop their speaking, listening, reading, and writing skills in a supportive and dynamic environment. "}<br />
                   {" Our programs are designed with flexibility in mind, allowing students to learn at their own pace and fit their studies into their busy schedules. From children to adults, our courses cater to all age groups, making language learning a family-friendly endeavor. Join us at iBlossomLearn Language Institute and embark on a journey to linguistic fluency and cultural appreciation."}







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