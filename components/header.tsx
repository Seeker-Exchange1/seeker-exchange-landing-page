"use client"

import type React from "react"

import Link from "next/link"
import { SeekerLogo } from "./seeker-logo"
import { Button } from "./ui/button"
import { useState } from "react"

export function Header() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a1f0a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <SeekerLogo />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <button onClick={handleComingSoon} className="text-gray-300 hover:text-white text-sm transition-colors">
                Features
              </button>
              <Link href="/support" className="text-gray-300 hover:text-white text-sm transition-colors">
                Support
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={handleComingSoon}
                variant="outline"
                className="hidden sm:flex border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Launch App
              </Button>
              <Link href="/waitlist">
                <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {showComingSoon && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#c8ff00] text-black px-6 py-3 rounded-lg shadow-lg font-semibold animate-in fade-in slide-in-from-top-4 duration-300">
          Coming Soon...
        </div>
      )}
    </>
  )
}
