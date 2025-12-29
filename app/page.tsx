import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f0a] via-[#0f2a0f] to-[#0a1f0a]">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance">
              Easily <span className="text-[#c8ff00]">Trade</span> and Manage Your{" "}
              <span className="text-[#c8ff00]">Crypto Assets</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Trading crypto has never been simpler. Enjoy quick and effortless trading of your digital currencies
              portfolio today.
            </p>
            <Link href="/waitlist">
              <Button className="w-full sm:w-auto bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c8ff00]/20">
                GET STARTED
              </Button>
            </Link>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="relative z-10">
              <img
                src="/images/chesst-201.png"
                alt="Crypto trading platform"
                className="w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto h-auto"
              />
            </div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-[#c8ff00]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="bg-gradient-to-r from-[#1a3a1a] to-[#0f2a0f] py-8 sm:py-12 animate-in fade-in duration-700 delay-300">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-6 sm:mb-8 text-center">
            Featured On
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center opacity-60">
            <div className="text-gray-400 font-bold text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:opacity-100">
              TechCrunch
            </div>
            <div className="text-gray-400 font-serif text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:opacity-100">
              FAST COMPANY
            </div>
            <div className="text-gray-400 font-bold text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:opacity-100">
              MIT
            </div>
            <div className="text-gray-400 font-serif text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:opacity-100">
              Forbes
            </div>
          </div>
        </div>
      </section>

      {/* Africa's Digital Finance Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
            <img
              src="/images/bitcoin-amico-201.png"
              alt="Digital finance revolution"
              className="w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              &quot;Explore the Future of <span className="text-[#c8ff00]">Africa&apos;s Digital</span> Finance
              Revolution&quot;
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Seeker Exchange bridges the gap between fiat and crypto, making digital finance accessible to everyone.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[#c8ff00] hover:text-[#b8ef00] font-semibold text-sm sm:text-base transition-all duration-300 group"
            >
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Financial Freedom Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              &quot;Take Control of Your <span className="text-[#c8ff00]">Financial Freedom</span>&quot;
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Join Seeker Exchange today - your journey to financial autonomy starts here.
            </p>
            <Link href="/waitlist">
              <Button className="w-full sm:w-auto bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c8ff00]/20">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <img
              src="/images/finance-20leaders-amico-201.png"
              alt="Financial freedom"
              className="w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="bg-gradient-to-br from-[#1a3a1a] to-[#0f2a0f] rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-[#c8ff00]/20 hover:shadow-xl hover:shadow-[#c8ff00]/10">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8ff00] rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance">
              STEP INTO THE <span className="text-[#c8ff00]">FUTURE</span> OF{" "}
              <span className="text-[#c8ff00]">DIGITAL FINANCE</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Trade, invest, and manage your crypto assets FAST and SECURELY on{" "}
              <span className="text-[#c8ff00] font-semibold">SEEKER EXCHANGE</span>. Built to power Africa&apos;s next
              generation of digital wealth.
            </p>
            <Link href="/waitlist">
              <Button className="w-full sm:w-auto bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-xl uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c8ff00]/20">
                Join Seeker Exchange Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
