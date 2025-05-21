'use client'
import Link from "next/link"
import Logo from "@/public/logo.svg"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={`fixed w-full z-30 transition-all duration-300 bg-[#B492C0]`}>
            <div className="mx-auto max-w-6xl px-2">
                <div className="relative flex h-14 items-center justify-between gap-3 px-3">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Link href="/">
                            <Image src={Logo.src} alt="Logo" className="w-24 h-24 -mt-2" width={200} height={200} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-200 hover:text-indigo-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop menu links */}
                        <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
                            <li>
                                <Link
                                    href="/about"
                                    className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400 lg:px-3"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400 lg:px-3"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400 lg:px-3"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Navigation Menu */}
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-[#B492C0] p-4 md:hidden">
                            <ul className="flex flex-col space-y-4">
                                <li>
                                    <Link
                                        href="/about"
                                        className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/portfolio"
                                        className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="flex items-center font-bold text-xl hover:underline px-2 py-1 text-gray-200 transition hover:text-indigo-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
