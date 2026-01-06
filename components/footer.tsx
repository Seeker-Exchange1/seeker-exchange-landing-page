"use client"

import type React from "react"
import { SeekerLogo } from "./seeker-logo"
import { Twitter, Instagram, Github, MessageCircle } from "lucide-react"
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
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_seeker_exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/seeker-exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/message/6CAXWFYQZ7WUK1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c8ff00] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
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
