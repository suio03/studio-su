import React from "react"
import Image from "next/image"
import ContactImage from "@/public/contact.svg"
const Contact = () => {
    return (
        <div className="pt-24 sm:pt-48 bg-[#B492C0] min-h-screen px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-8 md:gap-x-18 px-0 sm:px-4">
                    <div className="w-full bg-white/50 px-6 sm:px-12 py-8 sm:py-12 rounded-3xl">
                        <p className="text-lg sm:text-xl font-coming-soon text-black mb-4">
                            Got an idea, a question, or just want to say hi? I&apos;d love to hear from you! Don&apos;t be shy — let&apos;s chat!
                        </p>
                        {/* the placeholder should in black color */}
                        <input type="text" placeholder="Enter your name" className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black/50" />
                        <input type="email" placeholder="Enter your email" className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black/50" />
                        <textarea rows={6} placeholder="Write your message here..." className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black/50" />
                        <button className="bg-[#CFD772] font-bellota w-full text-white px-4 py-2 rounded-lg hover:cursor-pointer">Send</button>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-2/3">
                        <Image src={ContactImage} alt="Contact" className="w-3/4 md:w-auto" />
                        <p className="text-4xl sm:text-8xl font-nerko text-[#CFD772] text-center">
                            I&apos;d love to hear from U!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact