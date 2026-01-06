"use client"

import type React from "react"

import Link from "next/link"
import { SeekerLogo } from "./seeker-logo"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <SeekerLogo />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  pathname === "/" ? "bg-[#c8ff00] text-black" : "text-white hover:text-[#c8ff00]"
                }`}
              >
                Home
              </Link>
              <button
                onClick={handleComingSoon}
                className="px-4 py-2 text-sm font-medium text-white hover:text-[#c8ff00] transition-colors rounded-full"
              >
                Features
              </button>
              <Link
                href="/resources"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  pathname === "/resources" ? "bg-[#c8ff00] text-black" : "text-white hover:text-[#c8ff00]"
                }`}
              >
                Resources
              </Link>
              <Link
                href="/support"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  pathname === "/support" ? "bg-[#c8ff00] text-black" : "text-white hover:text-[#c8ff00]"
                }`}
              >
                Support
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  pathname === "/about" ? "bg-[#c8ff00] text-black" : "text-white hover:text-[#c8ff00]"
                }`}
              >
                About
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleComingSoon}
                className="hidden sm:flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white relative group overflow-visible rounded-lg border-2 border-dashed border-gray-400 hover:border-[#c8ff00] transition-colors"
              >
                <span className="relative z-10">Launch App</span>
              </button>
              <Link href="/waitlist" className="hidden sm:block">
                <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] hover:scale-105 font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-[#c8ff00]/50">
                  Get Started
                </Button>
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
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-4 duration-200 bg-black/60 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <Link
                href="/"
                className="block text-white hover:text-[#c8ff00] text-sm transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={(e) => {
                  handleComingSoon(e)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white hover:text-[#c8ff00] text-sm transition-colors py-2 font-medium"
              >
                Features
              </button>
              <Link
                href="/resources"
                className="block text-white hover:text-[#c8ff00] text-sm transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/support"
                className="block text-white hover:text-[#c8ff00] text-sm transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/about"
                className="block text-white hover:text-[#c8ff00] text-sm transition-colors py-2 font-medium"
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
                  className="w-full border-white/20 text-white hover:bg-white/10"
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
