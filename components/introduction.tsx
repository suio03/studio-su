import React from 'react'
import Image from 'next/image'
import Introduction01 from '@/public/introduction01.svg'
import Introduction02 from '@/public/introduction02.svg'
import Introduction03 from '@/public/introduction03.svg'
import Link from 'next/link'
const Introducation = () => {
    return (
        <div className='flex flex-col items-center justify-center font-bellota p-4'>
            <div className="bg-white/50 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xl flex items-center relative">
                <Image className='hidden sm:block absolute -left-20 -top-5 w-36' src={Introduction01} alt="Introduction01" width={100} height={100} />
                <div className='px-3 sm:px-6 py-4 sm:py-6'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-right font-nerko mb-8">Hi Hi Hi, I&apos;m Suyun !</h2>
                    <p className="text-gray-700 mb-8">A curious and solution-focused UI/UX design student at <span className='underline font-bold'>Curtin University</span>.</p>
                    <p className="text-gray-700 mb-4">I enjoy turning <span className='font-bold underline'>user needs into intuitive interfaces</span> – whether I&apos;m sketching wireframes solo or collaborating in a creative team. Right now, I&apos;m diving deeper into <span className='font-bold underline'>front-end development</span> to bring my designs to life through real projects.</p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white/50 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xl mt-16 sm:mt-24 flex items-center relative">
                <div className='px-3 sm:px-6 py-4 sm:py-6'>
                    <Image className='hidden sm:block absolute -right-36 -top-24 w-48' src={Introduction02} alt="Introduction02" width={100} height={100} />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-nerko mb-8">Fresh from the Studio</h2>
                    <p className="text-gray-700 mb-8">A selection of my latest <span className='font-bold underline'>UX case studies, prototypes, and design concepts.</span> Each one shows how I solve problems with clarity, empathy, and a dash of personality.</p>
                    <div className="flex flex-wrap justify-between mt-4 gap-y-4">
                        <div className="flex flex-col items-center w-1/3 sm:w-auto">
                            <div className="w-12 h-12 bg-gray-300 rounded-full" />
                            <span className="text-gray-700">Case one</span>
                        </div>
                        <div className="flex flex-col items-center w-1/3 sm:w-auto">
                            <div className="w-12 h-12 bg-gray-300 rounded-full" />
                            <span className="text-gray-700">Case two</span>
                        </div>
                        <div className="flex flex-col items-center w-1/3 sm:w-auto">
                            <div className="w-12 h-12 bg-gray-300 rounded-full" />
                            <span className="text-gray-700">Case three</span>
                        </div>
                        <div className="flex flex-col items-center w-full sm:w-auto mt-2 sm:mt-0">
                            <div className="w-12 h-12 bg-gray-300/0 rounded-full hidden sm:block" />
                            <Link href="/portfolio" className="text-gray-700 underline font-bold">more &gt;</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className="bg-white/50 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xl mt-16 sm:mt-24 flex items-center relative mb-16 sm:mb-24">
                <Image className='hidden sm:block absolute -left-24 w-36' src={Introduction03} alt="Introduction03" width={100} height={100} />
                <div className='px-3 sm:px-6 py-4 sm:py-6'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-right font-nerko mb-8">What I Believe In ?</h2>
                    <p className="text-gray-700 mb-8"><span className='font-bold underline'>User-first</span>, always. I believe great design starts with listening – to users, context, and purpose. My approach balances function and feeling, keeping things <span className='font-bold underline'>simple, clear</span>, and <span className='font-bold underline'>a little playful.</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Introducation
