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
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a1f0a]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
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

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={handleComingSoon}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Launch App
              </Button>
              <Link href="/waitlist">
                <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white text-base transition-colors py-2"
              >
                Home
              </Link>
              <button
                onClick={handleComingSoon}
                className="block text-gray-300 hover:text-white text-base transition-colors py-2 w-full text-left"
              >
                Features
              </button>
              <Link
                href="/support"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white text-base transition-colors py-2"
              >
                Support
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white text-base transition-colors py-2"
              >
                About
              </Link>
              <div className="pt-4 space-y-3">
                <Button
                  onClick={handleComingSoon}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Launch App
                </Button>
                <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button className="w-full bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* </CHANGE> */}

      {showComingSoon && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 bg-[#c8ff00] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold animate-in fade-in slide-in-from-top-4 duration-300 text-sm sm:text-base mx-4 max-w-[calc(100%-2rem)]">
          Coming Soon...
        </div>
      )}
    </>
  )
}
