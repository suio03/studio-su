import React from 'react'
import logo from '@/public/footer-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from '@/public/ins.svg'
import LinkedIn from '@/public/linkedin.svg'
import Join from '@/public/join.svg'
export default function Footer() {

    return (
        <footer className="bg-[#EBC8C6] text-gray-300 px-4 mt-12 sm:px-12">
            <div className="container max-w-6xl mx-auto px-4 pt-16 pb-8">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-8 gap-8 md:gap-0">
                    <div className="flex flex-col gap-2 mb-4 w-48 text-center">
                        <Image src={logo} alt="My portfolio" className="w-18 mx-auto" />
                        <span className="font-coming-soon text-white">
                            Where design meets development
                        </span>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12'>
                        <div>
                            <h3 className="text-black font-coming-soon mb-4 text-xl text-center md:text-left">QUICK LINKS</h3>
                            <ul className="space-y-2 text-black font-bellota text-center md:text-left">
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link href="/#">Download</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <div className='flex flex-col gap-2 relative w-64 mx-auto md:mx-0'>
                                <Image src={Join} alt="Join" className="w-48" />
                                <span className="text-white text-sm font-coming-soon absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2">Joint the conversation, let&apos;s connect!</span>
                            </div>
                            <div className='flex gap-1 justify-center md:justify-start md:ml-16 mt-4 md:mt-0'>
                                <Image src={LinkedIn} alt="LinkedIn" className="w-7 h-7" />
                                <Image src={Instagram} alt="Instagram" className="w-7 h-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
