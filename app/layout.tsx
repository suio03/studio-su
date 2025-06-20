import type { Metadata } from "next"
import { Bellota_Text, Coming_Soon, Nerko_One } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
const nerkoOne = Nerko_One({
    variable: "--font-nerko-one",
    subsets: ["latin"],
    weight: ["400"],
})
const bellotaText = Bellota_Text({
    variable: "--font-bellota-text",
    subsets: ["latin"],
    weight: ["400"],
})
const comingSoon = Coming_Soon({
    variable: "--font-coming-soon",
    subsets: ["latin"],
    weight: ["400"],
})
export const metadata: Metadata = {
    title: "Studio Suyun",
    description: "All about Suyun",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${nerkoOne.variable} ${bellotaText.variable} ${comingSoon.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
