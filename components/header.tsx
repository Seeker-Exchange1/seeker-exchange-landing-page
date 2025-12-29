"use client"

import type React from "react"

import Link from "next/link"
import { SeekerLogo } from "./seeker-logo"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a1f0a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <SeekerLogo />
            </Link>

            {/* Desktop Navigation */}
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

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={handleComingSoon}
                variant="outline"
                className="hidden sm:flex border-white/20 text-white hover:bg-white/10 bg-transparent text-sm"
              >
                Launch App
              </Button>
              <Link href="/waitlist" className="hidden sm:block">
                <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-sm">
                  Get Started
                </Button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col gap-4 mt-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={(e) => {
                    handleComingSoon(e)
                    setMobileMenuOpen(false)
                  }}
                  className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                >
                  Features
                </button>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Support
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {showComingSoon && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 bg-[#c8ff00] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold animate-in fade-in slide-in-from-top-4 duration-300 text-sm sm:text-base">
          Coming Soon...
        </div>
      )}
    </>
  )
}
