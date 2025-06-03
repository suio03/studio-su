'use client'
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Respca05 from "@/public/respca05.png"
import Respca07 from "@/public/respca07.png"
import Respca08 from "@/public/respca08.png"
import Respca09 from "@/public/respca09.png"
import Respca10 from "@/public/respca10.png"
import Rsp01 from "@/public/rsp01.png"
import Rsp02 from "@/public/rsp02.png"
import Rsp03 from "@/public/rsp03.png"
import Rsp04 from "@/public/rsp04.png"
import Rsp05 from "@/public/rsp05.png"
import Rsp06 from "@/public/rsp06.png"
export const runtime = 'edge'
const Portfolio = () => {
    const router = useRouter()
    const carouselImages = [Respca07, Respca08, Respca09, Respca10]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="py-16 sm:py-24 min-h-screen">
            <div className="max-w-4xl mx-auto p-4">
                <button 
                    onClick={() => router.back()} 
                    className="flex items-center text-black font-bellota text-lg mb-8 hover:opacity-70 transition-opacity"
                >
                    <span className="mr-2">←</span>
                    back
                </button>
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl  px-4">
                    <div className="w-1/2">
                        <p className="text-[#B492C0] text-3xl sm:text-4xl font-nerko mb-6 text-center sm:text-left">
                            RSPCA Pet Care App Design
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
                    <Image src={Rsp01} alt="Rsp01" className="w-1/2" height={500} width={500} />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Project Overview
                        </p>
                        <p className="text-black font-bellota">
                            The RSPCA Pet Care App is designed to provide pet owners with a comprehensive management tool, covering everything from adoption to daily care and health management. With this app, pet owners can easily locate veterinary services nearby, manage their pet&apos;s health records, and gain access to essential information and support for pet care.
                        </p>
                    </div>
                </div>
                <Image src={Rsp02} alt="Rsp02" className="w-full" height={500} width={500} />
                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-2/5 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Problem
                        </p>
                        <p className="text-black font-bellota">
                            Through early online observation, I noticed common frustrations among pet owners: difficulty finding nearby veterinary help, tracking health records, remembering vaccination schedules, and staying updated on food and supply availability.
                            Although these needs may seem different, they all point to one central issue:
                            <br />
                            <span className="font-bold">pet care today is scattered across too many sources and tools—especially for busy or first-time owners.</span>
                        </p>
                    </div>
                    <div className="w-full md:w-3/5">
                        <Image src={Respca05} alt="Respca05" className="w-full" height={500} width={500} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Rsp03} alt="Rsp03" className="w-full md:w-2/5" height={500} width={500} />
                    <div className="w-full">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Research
                        </p>
                        <p className="text-black font-bellota">
                            <span className="font-bold block mb-8">Pet owners often feel stressed when trying to manage everything their pets need. It&apos;s hard to find the right info quickly, especially in emergencies.</span>
                            To better design this pet care app, I conducted a few user interviews and casual observations. I talked with several pet owners about how they take care of their pets, what kind of problems they face, and whether they use any apps to help them.
                            <br />
                            Many people said they often worry about their pet&apos;s health, especially when it&apos;s hard to quickly find a reliable vet. Most of them wished there was an &quot;all-in-one&quot; app so they wouldn&apos;t have to switch between different tools for feeding, grooming, checkups, and emergencies.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <div className="w-full md:w-2/3 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            Ideation
                        </p>
                        <p className="text-black font-bellota">
                            After collecting insights from my research, I started to define the core problems users were facing. The main issue was that pet care tasks are scattered across too many platforms, which makes managing everything stressful and time-consuming. Based on what I heard from users, I focused on four key areas:
                            <span className="font-bold">pet adoption, health tracking, grooming, and user profiles (for pet).</span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Image src={Rsp04} alt="Rsp04" className="w-full" height={500} width={500} />
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-24 px-4">
                    <div className="w-full md:w-3/5 bg-white/50 px-4 sm:px-12 py-8 sm:py-12 rounded-3xl relative mt-8 md:mt-0">
                        <Image src={carouselImages[currentImageIndex]} alt={`Respca ${currentImageIndex + 7}`} height={500} width={500} className="h-64 sm:h-96 max-w-[90%] mx-auto" />
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl sm:text-6xl text-white p-2 rounded-full ml-1 sm:ml-2"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl sm:text-6xl text-white p-2 rounded-full mr-1 sm:mr-2"
                        >
                            &gt;
                        </button>
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentImageIndex === index ? "bg-white" : "bg-gray-400"
                                        }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 mt-8 md:mt-0">
                        <p className="text-white text-3xl sm:text-4xl my-6 font-nerko text-center md:text-left">
                            A/B Testing
                        </p>
                        <p className="text-black font-bellota">
                            Using two smartphones, the Prototype A and Prototype B were tested concurrently. Users participated in testing under the same functional conditions to gather suggestions for improvements on different design aspects.
                        </p>
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
                <Image src={Rsp05} alt="Rsp05" className="w-full my-12" height={500} width={500} />
                <div className="flex flex-col md:flex-row items-center py-8 sm:py-12 rounded-3xl gap-x-12 px-4">
                    <Image src={Rsp06} alt="Rsp06" className="w-2/3 mx-auto" height={500} width={500} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio