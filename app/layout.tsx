import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
import Script from "next/script"
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
    icon: [{ url: "/favicon.png", type: "image/png" }],
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
        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CPD4MP64T0"></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CPD4MP64T0');
          `}
        </Script>
      </head>

      <body className={`${monaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
