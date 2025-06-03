'use client'
import Link from "next/link"
import Logo from "@/public/logo.svg"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed w-full z-30 transition-all duration-300 ${
            isScrolled ? 'bg-[#EBC8C6]/10 backdrop-blur-sm' : 'bg-[#EBC8C6]'
        }`}>
            <div className="mx-auto max-w-6xl px-2 py-2">
                <div className="relative flex h-14 items-center justify-between gap-3 px-3">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Link href="/">
                            <Image src={Logo.src} alt="Logo" className="w-36 h-36" width={200} height={200} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-200 hover:text-[#CFD772]"
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
                                    className={`flex items-center font-bold text-xl rounded-full hover:underline px-2 py-1 transition hover:text-white hover:bg-[#CFD772] lg:px-3 ${
                                        pathname === '/about' ? 'bg-[#CFD772]' : 'text-white'
                                    }`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className={`flex items-center font-bold text-xl rounded-full hover:underline px-2 py-1 transition hover:text-white hover:bg-[#CFD772] lg:px-3 ${
                                        pathname === '/portfolio' ? 'bg-[#CFD772]' : 'text-white'
                                    }`}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className={`flex items-center font-bold text-xl rounded-full hover:underline px-2 py-1 transition hover:text-white hover:bg-[#CFD772] lg:px-3 ${
                                        pathname === '/contact' ? 'bg-[#CFD772]' : 'text-white'
                                    }`}
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
                                        className={`flex items-center font-bold text-xl hover:underline px-2 py-1 transition hover:text-indigo-400 ${
                                            pathname === '/about' ? 'text-[#CFD772]' : 'text-white'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/portfolio"
                                        className={`flex items-center font-bold text-xl hover:underline px-2 py-1 transition hover:text-indigo-400 ${
                                            pathname === '/portfolio' ? 'text-[#CFD772]' : 'text-white'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className={`flex items-center font-bold text-xl hover:underline px-2 py-1 transition hover:text-indigo-400 ${
                                            pathname === '/contact' ? 'text-[#CFD772]' : 'text-white'
                                        }`}
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
