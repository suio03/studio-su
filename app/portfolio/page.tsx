'use client'
import React from "react"
import Image from "next/image"
import Introduction02 from "@/public/introduction02.svg"
import PortfolioImage01 from "@/public/portfolio01.png"
import PortfolioImage02 from "@/public/portfolio02.png"
const Portfolio = () => {
    const onClick = () => {
        window.location.href = "/portfolio/rspca"
    }
    return (
        <div className="py-16 sm:py-24 bg-[#B492C0] min-h-screen px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-center items-center max-w-3xl mx-auto gap-x-12 sm:mt-12">
                    <div className="flex flex-col items-center w-full sm:w-1/2 pt-12 sm:pt-36">
                        <p className="text-5xl sm:text-7xl font-nerko text-[#CFD772] text-center">
                            Show time!
                        </p>
                        <p className="pt-4 font-coming-soon text-white text-center">
                            Here&apos;s a collection of thoughtful and playful design projects I&apos;ve crafted with care.
                            Each one solves a real problem — and adds a little joy along the way. Scroll down to explore!
                        </p>
                    </div>
                    <Image src={Introduction02} alt="Introduction02" className="w-48 sm:w-64 mt-6 sm:mt-0" height={200} width={200} />
                </div>
                <div className="flex flex-col items-center gap-y-8 sm:gap-y-12 mt-16 sm:mt-24">
                    <Image src={PortfolioImage02} alt="Portfolio02" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick} />
                    <Image src={PortfolioImage01} alt="Portfolio01" className="w-full sm:w-4/5" height={600} width={600}  />
                    <div className="flex flex-col items-center bg-white/50 px-6 sm:px-12 py-8 sm:py-12 rounded-3xl w-full sm:w-4/5 h-48 sm:h-64">
                    </div>
                    <div className="flex flex-col items-center bg-white/50 px-6 sm:px-12 py-8 sm:py-12 rounded-3xl w-full sm:w-4/5 h-48 sm:h-64">
                    </div>
                    <div className="flex flex-col items-center bg-white/50 px-6 sm:px-12 py-8 sm:py-12 rounded-3xl w-full sm:w-4/5 h-48 sm:h-64">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio