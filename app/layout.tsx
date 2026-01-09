import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
// ...existing code...
import "./globals.css"

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Seeker Exchange - Trusted Crypto Exchange Platform",
  description:
    "Trade crypto with speed, security, and trust. Seeker Exchange is Africa's most reliable cryptocurrency exchange platform.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#b4ff39",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${monaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
