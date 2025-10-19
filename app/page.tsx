import React from "react"
import Image from "next/image"
import UnionCurve from "@/public/Union.svg"
import Introduction from "@/components/introduction"
import AnimatedLogo from "@/components/AnimatedLogo"
export default function Home() {
    return (
        <div className='min-h-screen'>
            {/* Pink header section */}
            <div className="bg-[#E5C3C3] h-60 sm:h-80 flex flex-col items-center justify-center">
                {/* Header content can go here */}
            </div>

            {/* Curve-only SVG */}
            <div className="relative curve-container">
                <Image
                    className="w-full h-auto"
                    src={UnionCurve}
                    alt="Organic curve divider"
                    priority
                />
                
                {/* Logo positioned on the curve edge */}
                <AnimatedLogo className="absolute logo-on-curve mt-10 w-[250px] sm:w-[350px] md:w-[400px] z-20" />
            </div>

            {/* Teal content section */}
            <div className="bg-[#64A7B4] min-h-screen">
                    <Introduction />
            </div>
        </div>
    )
}
