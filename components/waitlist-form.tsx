"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"
import { Twitter, Instagram } from "lucide-react"

const countries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Senegal",
  "Ivory Coast",
  "Ethiopia",
  "Other",
]

export function WaitlistForm() {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("Nigeria")
  const [followedSocials, setFollowedSocials] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phoneNumber,
          email: email,
          country,
          followed_socials: followedSocials,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage(result.message)
        // Clear form on success
        setFullName("")
        setPhoneNumber("")
        setEmail("")
        setCountry("Nigeria")
        setFollowedSocials(false)
      } else {
        setStatus("error")
        setMessage(result.message)
      }
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred. Please try again.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="text-left">
        <Label htmlFor="fullName" className="text-white mb-2 block">
          Full Name <span className="text-[#c8ff00]">*</span>
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-12 px-4 rounded-lg focus:ring-2 focus:ring-[#c8ff00]/50 transition-all duration-300 focus:scale-[1.02]"
          disabled={status === "loading"}
        />
      </div>

      <div className="text-left">
        <Label htmlFor="phoneNumber" className="text-white mb-2 block">
          Phone Number <span className="text-[#c8ff00]">*</span>
        </Label>
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="+234..."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-12 px-4 rounded-lg focus:ring-2 focus:ring-[#c8ff00]/50 transition-all duration-300 focus:scale-[1.02]"
          disabled={status === "loading"}
        />
        <p className="text-gray-500 text-xs mt-1">Please include country code (e.g., +234...)</p>
      </div>

      <div className="text-left">
        <Label htmlFor="email" className="text-white mb-2 block">
          Email <span className="text-[#c8ff00]">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-12 px-4 rounded-lg focus:ring-2 focus:ring-[#c8ff00]/50 transition-all duration-300 focus:scale-[1.02]"
          disabled={status === "loading"}
        />
      </div>

      <div className="text-left">
        <Label htmlFor="country" className="text-white mb-2 block">
          Country <span className="text-[#c8ff00]">*</span>
        </Label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className="w-full bg-white/5 border border-white/20 text-white h-12 px-4 rounded-lg focus:ring-2 focus:ring-[#c8ff00]/50 focus:outline-none transition-all duration-300 focus:scale-[1.02]"
          disabled={status === "loading"}
        >
          {countries.map((c) => (
            <option key={c} value={c} className="bg-[#0f2a0f] text-white">
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white/5 rounded-lg p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
        <p className="text-white text-sm mb-4">Follow us on social media:</p>
        <div className="flex gap-4 mb-6 justify-center">
          <a
            href="https://x.com/seeker_exchange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#c8ff00] transition-all duration-300 hover:scale-110"
          >
            <Twitter className="w-6 h-6" />
            <span className="text-sm">X</span>
          </a>
          <a
            href="https://www.instagram.com/_seeker_exchange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#c8ff00] transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="followedSocials"
            checked={followedSocials}
            onCheckedChange={(checked) => setFollowedSocials(checked as boolean)}
            className="mt-1 border-white/40 data-[state=checked]:bg-[#c8ff00] data-[state=checked]:border-[#c8ff00] transition-all duration-300"
            disabled={status === "loading"}
          />
          <Label htmlFor="followedSocials" className="text-white text-sm leading-relaxed cursor-pointer">
            I confirm I have followed Seeker Exchange on X and Instagram <span className="text-[#c8ff00]">*</span>
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === "loading" || !followedSocials}
        className="w-full bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold h-12 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c8ff00]/20"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          "Join Waitlist"
        )}
      </Button>

      {message && (
        <p
          className={`mt-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-500 ${
            status === "success" ? "text-[#c8ff00]" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
