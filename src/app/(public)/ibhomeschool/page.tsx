import CustomeHero from '@/components/widgets/CustomeHero'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <CustomeHero title={"SEL For Homeschooling Families"} image={"/sellHero.png"} />
            <div className='sm:container mx-auto py-[30px] p-2 font-semibold font-serif'>
                <p className='leading-8 text-center'>
                    Homeschooling with iBlossomLearn offers numerous benefits, especially in moments of isolation. Our Social and Emotional Learning (SEL) curriculum provides a structured yet flexible environment, helping students develop essential coping skills for real-world challenges. This curriculum encourages independent learning and critical thinking, fostering personal growth and resilience. With strong support systems in place, students stay connected and engaged, minimizing the feelings of isolation often experienced during homeschooling. <br />
                    Moreover, our SEL curriculum strengthens bonds between students and caregivers during the formative and often confusing years of growth. Tailored to different educational stages—K-5, 6-8, and 9-12—our courses allow caregivers to actively participate in their child’s education, providing necessary guidance and support. This collaborative approach not only enhances academic success but also fortifies family relationships, creating a nurturing and supportive learning environment.



                </p>
            </div>

            <div className='py-[40px]  flex justify-center items-center'>

                <div className='p-1 text-lg  text-white border-2 border-primary w-fit rounded-3xl'>
                    <button className='bg-primary p-1 px-12 rounded-3xl'>
                        SEL For HomeSchooling Families
                    </button>
                </div>
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