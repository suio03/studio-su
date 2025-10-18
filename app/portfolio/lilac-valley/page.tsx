'use client'
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import LilacValley01 from "@/public/lilac/lilac01.png"
import LilacValley02 from "@/public/lilac/lilac02.png"
import LilacValley03 from "@/public/lilac/lilac03.png"
import LilacValley04 from "@/public/lilac/lilac04.png"
import LilacValley05 from "@/public/lilac/lilac05.png"
import LilacValley06 from "@/public/lilac/lilac06.png"
import LilacValley07 from "@/public/lilac/lilac07.png"
import LilacValley08 from "@/public/lilac/lilac08.png"
import LilacValley09 from "@/public/lilac/lilac09.png"
export const runtime = 'edge'
const LilacValley = () => {
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

                <div className="items-center pb-8 rounded-3xl bg-[#ffffff]/30">
                    <Image src={LilacValley01} alt="LilacValley01" className="w-full" height={500} width={500} />
                    <div className="w-full text-center rounded-3xl">
                        <p className="text-[#B492C0] text-3xl sm:text-4xl font-nerko mt-12 mb-6 text-center">
                            Lilac Valley - Farm Stay Website Design
                        </p>
                        <div className="w-full p-4 rounded-3xl">
                            <p className="text-white text-3xl sm:text-4xl my-6 font-nerko">
                                What I did
                            </p>
                            <ul className="ml-4 text-black list-none font-bellota">
                                <li>
                                    1. UX Research
                                </li>
                                <li>
                                    2. UI Design(Include phone screen size)
                                </li>
                                <li>
                                    3. Frontend Development
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={LilacValley02} alt="LilacValley02" className="w-3/5" height={500} width={500} />
                    <div className="w-2/5">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Project Overview
                        </p>
                        <p className="text-black font-bellota">
                            Lilac Valley is a farm stay aiming to provide a deluxe accommodation experience for guests seeking a peaceful retreat from city life. This project involved designing and developing a responsive website to showcase its unique offerings, attract target audiences (families, couples, solo travelers, groups), and facilitate bookings, focusing on creating a tranquil, inviting, and user-friendly online presence.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Challenge & Goals
                        </p>
                        <p className="text-black font-bellota">
                            <span>
                                The challenge was to create a unique and compelling online identity for Lilac Valley, differentiating it from competitors and effectively communicating its rustic charm and modern amenities. The design needed to appeal to a desire for escaping urban hustle and offer an intuitive user experience.
                            </span>
                            <br />
                            <br />
                            <br />
                            <span>
                                ey goals included designing a visually appealing and responsive website, incorporating unique features like hand-drawn illustrations, ensuring clear navigation, and implementing interactive elements to enhance user engagement and drive bookings.
                            </span>
                        </p>
                    </div>
                    <Image src={LilacValley03} alt="LilacValley03" className="w-1/2" height={500} width={500} />
                </div>

                <div className="flex flex-col py-8 sm:py-12 rounded-3xl gap-x-12 px-4">

                    <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                        Design Exploration
                    </p>
                    <p className="text-black font-bellota">
                        The design process included creating multiple mood boards to explore different visual tones (e.g., comfort & relaxation, calm & tranquil, cheerful & warm). Several wireframes were developed to define page layouts and user flows for both desktop and mobile. Three distinct visual concepts were then proposed, each with unique color palettes, typography, and illustration styles.
                    </p>
                </div>
                <div className="flex flex-row py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={LilacValley04} alt="LilacValley04" className="w-1/2" height={500} width={500} />
                    <Image src={LilacValley05} alt="LilacValley05" className="w-1/2" height={500} width={500} />
                </div>
                <div className="flex flex-row py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={LilacValley06} alt="LilacValley06" className="w-1/2" height={500} width={500} />
                    <Image src={LilacValley07} alt="LilacValley07" className="w-1/2" height={500} width={500} />
                </div>
                <div className="flex flex-col py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <p className="text-white text-3xl sm:text-4xl font-nerko text-center md:text-left">
                        Final Outcome
                    </p>
                    <p className="text-black font-bellota">
                        The resulting Lilac Valley website offers a visually engaging and intuitive online experience, successfully translating the farm stay&apos;s tranquil atmosphere into a responsive digital platform.
                    </p>
                </div>
                <Image src={LilacValley08} alt="LilacValley08" className="w-full my-12" height={500} width={500} />
                <Image src={LilacValley09} alt="LilacValley09" className="w-full mt-24" height={500} width={500} />

            </div>
        </div>
    )
}

export default LilacValley