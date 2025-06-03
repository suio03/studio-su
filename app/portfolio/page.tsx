'use client'
import React from "react"
import Image from "next/image"
import Introduction02 from "@/public/introduction02.svg"
import PortfolioImage01 from "@/public/portfolio01.png"
import PortfolioImage02 from "@/public/portfolio02.png"
import PortfolioImage03 from "@/public/portfolio03.png"
import PortfolioImage04 from "@/public/portfolio04.png"
import PortfolioImage05 from "@/public/portfolio05.png"
const Portfolio = () => {
    const onClick = () => {
        window.location.href = "/portfolio/rspca"
    }
    const onClick02 = () => {
        window.location.href = "/portfolio/habit-tracker"
    }
    const onClick04 = () => {
        window.location.href = "/portfolio/lilac-valley"
    }
    const onClick05 = () => {
        window.location.href = "/portfolio/moving-service"
    }
    const onClick03 = () => {
        window.location.href = "/portfolio/vocabin"
    }
    return (
        <div className="py-16 sm:py-24 min-h-screen px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-center items-center max-w-3xl mx-auto gap-x-12 sm:mt-12">
                    <div className="flex flex-col items-center w-full sm:w-1/2 pt-12 sm:pt-36">
                        <p className="text-5xl sm:text-7xl font-nerko text-[#B492C0] text-center">
                            Show time!
                        </p>
                        <p className="pt-4 font-coming-soon text-black/80">
                            Here&apos;s a collection of thoughtful and playful design projects I&apos;ve crafted with care.
                            Each one solves a real problem — and adds a little joy along the way. Scroll down to explore!
                        </p>
                    </div>
                    <Image src={Introduction02} alt="Introduction02" className="w-48 sm:w-64 mt-6 sm:mt-0" height={200} width={200} />
                </div>
                <div className="flex flex-col items-center gap-y-8 sm:gap-y-12 mt-16 sm:mt-24">
                    <Image src={PortfolioImage02} alt="Portfolio02" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick} />
                    <Image src={PortfolioImage01} alt="Portfolio01" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick02} />
                    <Image src={PortfolioImage03} alt="Portfolio03" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick03} />
                    <Image src={PortfolioImage04} alt="Portfolio04" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick04} />
                    <Image src={PortfolioImage05} alt="Portfolio05" className="w-full sm:w-4/5 hover:cursor-pointer" height={600} width={600} onClick={onClick05} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio