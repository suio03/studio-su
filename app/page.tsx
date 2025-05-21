import React from "react"
import HeroLogo from "@/public/hero-logo.svg"
import Image from "next/image"
import Introduction from "@/components/introduction"
export default function Home() {
    return (
        <div className=''>
            <div className="flex flex-col items-center justify-center pt-36">
                <Image className="max-w-[350px] mx-auto" src={HeroLogo} alt="Hero Logo" />
            </div>
            <div className='bg-[#64A7B4] min-h-screen'>
                <Introduction />
            </div>
        </div>
    )
}
