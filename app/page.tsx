import React from "react"
import HeroLogo from "@/public/hero-logo.svg"
import Image from "next/image"
import Introduction from "@/components/introduction"
export default function Home() {
    return (
        <div className='relative'>
            <div className="h-90 flex flex-col items-center justify-center">
            </div>
            <div className='bg-[#64A7B4] min-h-screen pt-32'>
                <Introduction />
            </div>
            {/* Absolutely positioned logo to overlap between sections */}
            <Image
                className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[350px] z-10"
                src={HeroLogo}
                alt="Hero Logo"
            />
        </div>
    )
}
