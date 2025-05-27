import React from "react"
import Introduction03 from "@/public/introduction03.svg"
import Me from "@/public/me.svg"
import Image from "next/image"
import DoubleQuote from "@/public/double-quote.svg"
import DoubleQuote2 from "@/public/double-quote02.svg"
import Link from "next/link"
const About = () => {
    return (
        <div className="pt-24 sm:pt-36 min-h-screen px-4">
            <div className="max-w-3xl mx-auto relative">
                <div className="hidden sm:flex justify-center items-center mb-12 absolute top-2/5 -left-18 -translate-x-1/2">
                    <Image src={DoubleQuote2} alt="DoubleQuote2" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-0">
                    <div className="flex items-center">
                        <Image src={Me} alt="Me" className="w-32 sm:w-auto mt-4 z-10" />
                        <Image src={Introduction03} alt="Introduction03" className="w-32 sm:w-auto -ml-8 pt-14 z-0" />
                    </div>
                    <p className="text-5xl sm:text-8xl font-nerko text-[#B492C0] mt-4 sm:mt-0">
                        Hey! U~
                    </p>
                </div>
                <div className="flex justify-center items-center my-8 sm:my-12">
                    <p className="text-black/80 text-base sm:text-xl font-bellota text-center sm:text-left">
                        I&apos;m Suyun (you can call me Suvin!), the human behind &apos;Studio Su&apos;. Right now, I&apos;m deep in the world of UI/UX design at Curtin University, figuring out how to make digital stuff not just look good, but feel right.
                    </p>
                </div>
                <div className="flex justify-center items-center mb-8 sm:mb-12">
                    <p className="text-black/80 text-base sm:text-xl font-bellota text-center sm:text-left">
                        What really gets me excited? Finding that sweet spot where thoughtful design meets clean front-end development. I love the challenge of translating real user needs into intuitive interfaces people actually enjoy using.
                    </p>
                </div>
                <div className="flex justify-center items-center mb-12">
                    <p className="text-black/80 text-base sm:text-xl font-bellota text-center sm:text-left">
                        My journey here involved a fascinating detour through marketing, which taught me a ton about understanding what makes people tick. Now, I bring that insight into every Figma file and line of code.
                    </p>
                </div>
                <div className="hidden sm:flex justify-center items-center mb-12 absolute -bottom-36 -right-4 translate-x-1/2">
                    <Image src={DoubleQuote} alt="DoubleQuote" />
                </div>

            </div>
            <div className="max-w-3xl mx-auto pb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-12 gap-4 sm:gap-x-12">
                    <Link href="/resume" className="bg-[#CFD772] text-white px-4 py-1 rounded-full font-bellota w-36 text-center">
                        Resume
                    </Link>
                    <Link href="/portfolio" className="bg-[#CFD772] text-white px-4 py-1 rounded-full font-bellota w-36 text-center">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="bg-[#CFD772] text-white px-4 py-1 rounded-full font-bellota w-36 text-center">
                        Get in touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About