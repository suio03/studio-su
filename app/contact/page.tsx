'use client'
import React, { useState } from "react"
import Image from "next/image"
import ContactImage from "@/public/contact.svg"
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="pt-24 sm:pt-48 min-h-screen px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-8 md:gap-x-18 px-0 sm:px-4">
                    <div className="w-full bg-white/50 px-6 sm:px-12 py-8 sm:py-12 rounded-3xl">
                        <p className="text-lg sm:text-xl font-coming-soon text-black mb-4">
                            Got an idea, a question, or just want to say hi? I&apos;d love to hear from you! Don&apos;t be shy — let&apos;s chat!
                        </p>
                        
                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name" 
                                className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black placeholder:text-black/50" 
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email" 
                                className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black placeholder:text-black/50" 
                                required
                            />
                            <textarea 
                                rows={6} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..." 
                                className="w-full bg-white/50 px-4 py-2 rounded-lg my-4 text-black placeholder:text-black/50" 
                                required
                            />
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#CFD772] font-bellota w-full text-white px-4 py-2 rounded-lg hover:bg-[#B8C85A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-2/3">
                        <Image src={ContactImage} alt="Contact" className="w-3/4 md:w-auto" />
                        <p className="text-4xl sm:text-8xl font-nerko text-[#B492C0] text-center">
                            I&apos;d love to hear from U!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact