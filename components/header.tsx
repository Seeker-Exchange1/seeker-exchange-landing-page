"use client"

import type React from "react"

import Link from "next/link"
import { SeekerLogo } from "./seeker-logo"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a1f0a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
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
              <Link href="/resources" className="text-gray-300 hover:text-white text-sm transition-colors">
                Resources
              </Link>
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
              <Link href="/waitlist" className="hidden sm:block">
                <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold">Get Started</Button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#c8ff00] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-4 duration-200">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={(e) => {
                  handleComingSoon(e)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-300 hover:text-white text-sm transition-colors py-2"
              >
                Features
              </button>
              <Link
                href="/resources"
                className="block text-gray-300 hover:text-white text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/support"
                className="block text-gray-300 hover:text-white text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 space-y-3">
                <Button
                  onClick={(e) => {
                    handleComingSoon(e)
                    setIsMobileMenuOpen(false)
                  }}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Launch App
                </Button>
                <Link href="/waitlist" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
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
