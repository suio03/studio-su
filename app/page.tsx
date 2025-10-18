import React from "react"
import SubtractBg from "@/public/Subtract.svg"
import Image from "next/image"
import Introduction from "@/components/introduction"
import AnimatedLogo from "@/components/AnimatedLogo"
export default function Home() {
    return (
        <div className='relative bg-[#E5C3C3] min-h-screen'>
            {/* Pink background section */}
            <div className="h-60 sm:h-80 flex flex-col items-center justify-center">
            </div>

            {/* Curved hill SVG background */}
            <div className='relative w-full'>
                <Image
                    className="w-full h-auto"
                    src={SubtractBg}
                    alt="Background curve"
                    priority
                />

                {/* Content container positioned over the SVG */}
                <div className='absolute top-0 left-0 w-full pt-32 sm:pt-48'>
                    <Introduction />
                </div>
            </div>

            {/* Absolutely positioned logo to sit on top of the curved hill */}
            <AnimatedLogo className="absolute top-65 sm:top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] md:w-[400px] z-20" />
        </div>
    )
}
