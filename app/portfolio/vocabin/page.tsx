'use client'
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Vocabin01 from "@/public/vocabin/vocabin01.png"
import Vocabin02 from "@/public/vocabin/vocabin02.png"
import Vocabin03 from "@/public/vocabin/vocabin03.png"
import Vocabin04 from "@/public/vocabin/vocabin04.png"
import Vocabin05 from "@/public/vocabin/vocabin05.png"
import Vocabin06 from "@/public/vocabin/vocabin06.png"
import Vocabin07 from "@/public/vocabin/vocabin07.png"
import Vocabin08 from "@/public/vocabin/vocabin08.png"
import Vocabin09 from "@/public/vocabin/vocabin09.png"
import Vocabin10 from "@/public/vocabin/vocabin10.png"
import Vocabin11 from "@/public/vocabin/vocabin11.png"
import Vocabin12 from "@/public/vocabin/vocabin12.png"
export const runtime = 'edge'
const Vocabin = () => {
    const router = useRouter()

    return (
        <div className="py-16 sm:py-24 min-h-screen">
            <div className="max-w-4xl mx-auto p-4">
                {/* Back button */}
                <button 
                    onClick={() => router.back()} 
                    className="flex items-center text-black font-bellota text-lg mb-8 hover:opacity-70 transition-opacity"
                >
                    <span className="mr-2">←</span>
                    back
                </button>
                
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-24 px-4">
                    <div className="w-3/5">
                        <p className="text-[#B492C0] text-3xl sm:text-4xl font-nerko mt-12 mb-6 text-center sm:text-left">
                            VOCABIN - English Learning Website
                        </p>
                        <div className="w-full">
                            <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                                What I did
                            </p>
                            <ul className="ml-4 text-black md:list-disc list-none font-bellota text-center md:text-left">
                                <li>
                                    UI + UX Design
                                </li>
                                <li>
                                    Frontend Development
                                </li>
                                <li>
                                    Backend Development
                                </li>
                                <li>
                                    API Design & Implementation
                                </li>
                                <li>
                                    Database Design
                                </li>
                                <li>
                                    Project Management & Solo Development
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image src={Vocabin01} alt="Vocabin01" className="w-2/5" height={500} width={500} />

                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Vocabin02} alt="Vocabin02" className="w-1/2" height={500} width={500} />
                    <div className="w-1/2">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Project Overview
                        </p>
                        <p className="text-black font-bellota">
                            Vocabin, a language learning app, identified a user need for a more engaging and interactive learning experience. This project focused on designing and integrating this feature to help users learn languages more effectively and efficiently.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Project Goals
                        </p>
                        <p className="text-black font-bellota">
                            The initial motivation was to create a personal learning tool. The primary goal for VOCABIN is to offer users an easily accessible and engaging platform to effectively learn and remember English vocabulary, improve listening skills, and practice reading through personalized, interactive exercises, while also allowing them to track their progress.
                        </p>
                    </div>
                    <Image src={Vocabin03} alt="Vocabin03" className="w-1/2" height={500} width={500} />
                </div>

                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-1/2">
                        <Image src={Vocabin04} alt="Vocabin04" className="w-full" height={500} width={500} />
                    </div>
                    <div className="w-1/2 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            User Research
                            & Definition
                        </p>
                        <p className="text-black font-bellota">
                            VOCABIN targets learners of English across various ages and motivations, from students preparing for exams to professionals seeking to improve their communication. Key user goals include learning new vocabulary, tracking progress, and having a smooth, focused learning experience. Administrators are also considered for content management.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <p className="text-white text-3xl sm:text-4xl font-nerko text-center md:text-left">
                        IA & Design Sketches                    </p>
                    <p className="text-black font-bellota">
                        The design process involved sketching initial concepts, developing detailed wireframes for key user flows, and conducting usability testing to refine the interface and user experience.
                    </p>
                </div>
                <Image src={Vocabin05} alt="Vocabin05" className="w-full my-12" height={500} width={500} />

                <div className="flex flex-col py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <p className="text-white text-3xl sm:text-4xl font-nerko text-center md:text-left">
                        Visual Design & Tech Stack
                    </p>
                    <p className="text-black font-bellota">
                        The visual design aims for a calm, focused, and supportive learning environment. This is achieved through soft and warm color palettes, clean typography prioritizing readability, and a minimalist, functional aesthetic.
                    </p>
                </div>
                <div className="flex py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Vocabin06} alt="Vocabin06" className="w-1/2" height={500} width={500} />
                    <Image src={Vocabin07} alt="Vocabin07" className="w-1/2" height={500} width={500} />
                </div>
                <p className="text-black font-bellota px-4">
                    VOCABIN was built as a full-stack application using a modern JavaScript stack, including Next.js for both frontend and backend, React for UI, Tailwind CSS for styling, Node.js for server-side logic, and MongoDB for data storage. Google Gemini AI is utilized for generating personalized reading content.
                </p>
                <div className="flex flex-row py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Vocabin08} alt="Vocabin08" className="w-1/2" height={500} width={500} />
                    <Image src={Vocabin09} alt="Vocabin09" className="w-1/2" height={500} width={500} />
                </div>
                <div className="flex flex-row py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Vocabin10} alt="Vocabin10" className="w-1/2" height={500} width={500} />
                    <Image src={Vocabin11} alt="Vocabin11" className="w-1/2" height={500} width={500} />
                </div>
                <div className="py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                        My Solution
                    </p>
                    <p className="text-black font-bellota">
                        An all-in-one pet care companion that simplifies pet adoption, streamlines pet food and grooming, and provides peace of mind through a pet health assistant.
                    </p>
                </div>
                <Image src={Vocabin12} alt="Vocabin12" className="w-full my-12" height={500} width={500} />
            </div>
        </div>
    )
}

export default Vocabin