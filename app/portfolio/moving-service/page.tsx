'use client'
import React from "react"
import Image from "next/image"
import MovingService01 from "@/public/moving/moving01.png"
import MovingService02 from "@/public/moving/moving02.png"
import MovingService03 from "@/public/moving/moving03.png"
import MovingService04 from "@/public/moving/moving04.png"
import MovingService05 from "@/public/moving/moving05.png"
import MovingService06 from "@/public/moving/moving06.png"
import MovingService07 from "@/public/moving/moving07.png"
export const runtime = 'edge'
const MovingService = () => {

    return (
        <div className="py-16 sm:py-24 min-h-screen">
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl px-4">
                    <div className="w-1/2">
                        <p className="text-[#B492C0] text-3xl sm:text-4xl font-nerko mt-12 mb-6 text-center sm:text-left">
                            Help Me Move - Moving Services Website Design
                        </p>
                        <div className="w-full">
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
                            </ul>
                        </div>
                    </div>
                    <Image src={MovingService01} alt="MovingService01" className="w-1/2" height={500} width={500} />

                </div>
                <div className="flex flex-col py-8 rounded-3xl px-4">
                    <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                        Project Overview
                    </p>
                    <p className="text-black font-bellota">
                        Lilac Valley is a farm stay aiming to provide a deluxe accommodation experience for guests seeking a peaceful retreat from city life. This project involved designing and developing a responsive website to showcase its unique offerings, attract target audiences (families, couples, solo travelers, groups), and facilitate bookings, focusing on creating a tranquil, inviting, and user-friendly online presence.
                    </p>
                </div>
                <Image src={MovingService02} alt="MovingService02" className="w-full px-4" height={500} width={500} />

                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-8 px-4">
                    <Image src={MovingService03} alt="MovingService03" className="w-3/5" height={500} width={500} />
                    <div className="w-2/5 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Challenge & Goals
                        </p>
                        <p className="text-black font-bellota">
                            <span>
                                The challenge was to create a unique and compelling online identity for Lilac Valley, differentiating it from competitors and effectively communicating its rustic charm and modern amenities. The design needed to appeal to a desire for escaping urban hustle and offer an intuitive user experience.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex py-8 sm:py-12 rounded-3xl px-4">

                    <div className="w-1/3">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            User Research
                            & Key Insights
                        </p>
                        <p className="text-black font-bellota">
                            UX research, including user interviews, revealed key pain points such as difficulty finding comprehensive services, hidden costs, lack of clarity on insurance and pet transport, and inefficient customer support. Users expressed a need for transparent pricing, reliable movers, easy booking, and accessible customer service.
                        </p>
                    </div>
                    <Image src={MovingService04} alt="MovingService04" className="w-2/3 px-4" height={600} width={600} />
                </div>
                <Image src={MovingService05} alt="MovingService05" className="w-2/3 mx-auto mt-10" height={600} width={600} />
                <div className="flex py-8 sm:py-12 rounded-3xl gap-x-12 px-4">

                    <div className="w-2/5">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Key Designs
                            & Interface
                        </p>
                        <p className="text-black font-bellota">
                            A clear information architecture and intuitive user flows were designed to guide users seamlessly through the platform, from browsing services to completing a request.
                        </p>
                    </div>
                    <Image src={MovingService06} alt="MovingService06" className="w-3/5 px-4" height={600} width={600} />
                </div>
                <div className="flex flex-col py-8 rounded-3xl px-4">
                    <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                        Final Outcome
                    </p>
                    <p className="text-black font-bellota">
                        The resulting Lilac Valley website offers a visually engaging and intuitive online experience, successfully translating the farm stay&apos;s tranquil atmosphere into a responsive digital platform. The project resulted in a fully designed interactive prototype, ready for further testing and development, demonstrating a clear solution to the identified user needs and business objectives.
                    </p>
                </div>
                <Image src={MovingService07} alt="MovingService07" className="w-full px-4" height={500} width={500} />
            </div>
        </div>
    )
}

export default MovingService