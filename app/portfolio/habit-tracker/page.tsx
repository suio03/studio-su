'use client'
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Rsp04 from "@/public/rsp04.png"
import Habit01 from "@/public/habit/habit01.png"
import Habit02 from "@/public/habit/habit02.png"
import Habit03 from "@/public/habit/habit03.png"
import Habit04 from "@/public/habit/habit04.png"
import Habit05 from "@/public/habit/habit05.png"
import Habit06 from "@/public/habit/habit06.png"
import Habit07 from "@/public/habit/habit07.png"
import Habit08 from "@/public/habit/habit08.png"
export const runtime = 'edge'
const HabitTracker = () => {
    const router = useRouter()
    // const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // const nextImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    //     )
    // }

    // const prevImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    //     )
    // }

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
                    <Image src={Habit01} alt="Habit01" className="w-2/5" height={500} width={500} />

                    <div className="w-3/5">
                        <p className="text-[#B492C0] text-3xl sm:text-4xl font-nerko mt-12 mb-6 text-center sm:text-left">
                            Headspace - Habit Tracker App Re-design
                        </p>
                        <div className="w-full md:mt-24 mt-0">
                            <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                                What I did
                            </p>
                            <ul className="ml-4 text-black md:list-disc list-none font-bellota text-center md:text-left">
                                <li>
                                    User Research
                                </li>
                                <li>
                                    UI + UX Design
                                </li>
                                <li>
                                    Prototype
                                </li>
                                <li>
                                    Testing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Project Overview
                        </p>
                        <p className="text-black font-bellota">
                            Headspace, a mobile application renowned for guided meditation, identified a user need for a habit tracking feature to aid in cultivating self-discipline alongside mindfulness. This project focused on designing and integrating this feature to help users track both good and bad habits, thereby enhancing their journey towards improved well-being.
                        </p>
                    </div>
                </div>
                <Image src={Habit02} alt="Habit02" className="w-full" height={500} width={500} />
                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-1/5 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Problem
                        </p>
                        <p className="text-black font-bellota">
                            Users need the functionality to track and manage their daily habits within the Headspace application to enhance self-discipline and improve quality of life.
                        </p>
                    </div>
                    <div className="w-full md:w-4/5 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Research
                        </p>
                        <p className="text-black font-bellota">
                            <span className="font-bold block">
                                To understand user needs for habit tracking, we conducted quantitative research (online survey with 20 users, age 18-60) and developed user personas.
                            </span>
                            <br />
                            Key Findings: Users prioritize an intuitive interface (90%), desire personalized options (75%), and value features that support positive habit cultivation (85%). Privacy and security are also significant concerns (95%). Core user needs include integrated tracking, customization, and motivational incentives.
                        </p>
                    </div>
                </div>
                <Image src={Habit03} alt="Habit03" className="w-full" height={500} width={500} />
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-2/3 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Ideation
                        </p>
                        <p className="text-black font-bellota">
                            Based on user insights, I focused on creating an intuitive and motivating habit tracking experience within Headspace. Key features include an <span className="font-bold">interactive dashboard, personalized settings</span> and reminders, and <span className="font-bold">an achievement system with community support</span> to foster engagement and long-term adherence.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src={Rsp04} alt="Rsp04" className="w-full" height={500} width={500} />
                    </div>
                </div>
                <Image src={Habit04} alt="Habit04" className="w-2/3 mx-auto" height={500} width={500} />
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-2/3">
                        <div className="py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                            <p className="text-white text-3xl sm:text-4xl font-nerko text-center md:text-left">
                                Key Design Process
                            </p>
                            <p className="text-black font-bellota">
                                The design process involved sketching initial concepts, developing detailed wireframes for key user flows, and conducting usability testing to refine the interface and user experience.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                            <div className="flex-1 max-w-xs">
                                <Image src={Habit06} alt="Habit06" className="w-full" height={500} width={500} />
                            </div>

                            <div className="flex-1 max-w-xs">
                                <Image src={Habit05} alt="Habit05" className="w-full" height={500} width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-xs -mb-12">
                        <Image src={Habit07} alt="Habit07" className="w-full" height={500} width={500} />
                    </div>
                </div>
                <div className="py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                        My Solution
                    </p>
                    <p className="text-black font-bellota">
                        An all-in-one pet care companion that simplifies pet adoption, streamlines pet food and grooming, and provides peace of mind through a pet health assistant.
                    </p>
                </div>
                <Image src={Habit08} alt="Habit08" className="w-full my-12" height={500} width={500} />
            </div>
        </div>
    )
}

export default HabitTracker