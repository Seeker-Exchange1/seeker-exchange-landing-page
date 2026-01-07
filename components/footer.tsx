"use client"

import type React from "react"
import { SeekerLogo } from "./seeker-logo"
import { useState } from "react"

export function Footer() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState("")

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 2000)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubscribing) return

    setIsSubscribing(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setSubscribeMessage("Thanks for subscribing!")
        setEmail("")
      } else {
        setSubscribeMessage(result.message || "Failed to subscribe")
      }
    } catch (error) {
      setSubscribeMessage("Something went wrong")
    } finally {
      setIsSubscribing(false)
      setTimeout(() => setSubscribeMessage(""), 3000)
    }
  }

  return (
    <>
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-1">
              <SeekerLogo className="h-10 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                The world&apos;s most secure and futuristic crypto exchange platform. Trade smarter, faster, and safer
                with Seeker Exchange.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Markets
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Exchange
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Fiat Gateway
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/resources" className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors">
                    Learning Center
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    API Documentation
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Trading Guides
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Security Tips
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/support" className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@seekerexchange.com"
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/6CAXWFYQZ7WUK1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Community
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleComingSoon}
                    className="text-gray-400 hover:text-[#c8ff00] text-sm transition-colors"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 pb-8 border-b border-white/5">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates and exclusive offers</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubscribing}
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8ff00]/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-4 py-2 bg-[#c8ff00] text-black rounded-lg hover:bg-[#b8ef00] font-semibold transition-colors disabled:opacity-50"
              >
                {isSubscribing ? "..." : "→"}
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8">
            <p className="text-gray-500 text-sm">© 2025 Seeker Exchange. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="https://x.com/seeker_exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="X"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M19.4 4.6a1 1 0 00-1.4-1.4L12 9.17 6 3.2A1 1 0 004.6 4.6L10.6 10.6 4.6 16.6a1 1 0 101.4 1.4l6-6 6 6a1 1 0 001.4-1.4l-6-6 6-6z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_seeker_exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 1112 14a2.5 2.5 0 010-4.5zM17.5 6a.75.75 0 110 1.5A.75.75 0 0117.5 6z" />
                </svg>
              </a>
              <a
                href="https://github.com/Seeker-Exchange1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.815 1.103.815 2.222 0 1.606-.015 2.903-.015 3.296 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/message/6CAXWFYQZ7WUK1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 0 5.373 0 12c0 2.117.553 4.092 1.606 5.82L0 24l6.415-1.648A11.906 11.906 0 0012 24c6.627 0 12-5.373 12-12 0-3.184-1.236-6.168-3.48-8.52zM12 21.6c-1.53 0-3.03-.36-4.35-1.04l-.31-.17-3.8.98.98-3.71-.2-.32A8.4 8.4 0 013.6 12 8.4 8.4 0 0112 3.6c4.65 0 8.4 3.75 8.4 8.4S16.65 21.6 12 21.6zm4.58-6.65c-.25-.13-1.47-.73-1.7-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.07-.25-.13-1.06-.39-2.02-1.24-.75-.66-1.25-1.49-1.4-1.74-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.49-.43-.42-.57-.43-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.67.31-.23.24-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.58.13.17 1.78 2.72 4.31 3.81 2.53 1.09 2.53.73 2.99.68.46-.05 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.09-.23-.13-.48-.26z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {subscribeMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#c8ff00] text-black px-6 py-3 rounded-lg shadow-lg font-semibold animate-in fade-in slide-in-from-bottom-4 duration-300">
          {subscribeMessage}
        </div>
      )}

      {showComingSoon && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#c8ff00] text-black px-6 py-3 rounded-lg shadow-lg font-semibold animate-in fade-in slide-in-from-bottom-4 duration-300">
          Coming Soon...
        </div>
      )}
    </>
  )
}
