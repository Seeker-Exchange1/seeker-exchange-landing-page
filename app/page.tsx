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
      <section className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-8 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
              Easily <span className="text-[#c8ff00]">Trade</span> and Manage Your{" "}
              <span className="text-[#c8ff00]">Crypto Assets</span>
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-8 leading-relaxed text-gray-400">
              Trading crypto has never been simpler. Enjoy quick and effortless trading of your digital currencies
              portfolio today.
            </p>
            <Link href="/waitlist">
              <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl w-full sm:w-auto">
                GET STARTED
              </Button>
            </Link>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="relative z-10">
              <img
                src="/images/chesst-201.png"
                alt="Crypto trading platform"
                className="w-full h-auto max-w-[280px] sm:max-w-md mx-auto lg:max-w-none"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-20 sm:w-32 h-20 sm:h-32 bg-[#c8ff00]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 -right-10 w-24 sm:w-40 h-24 sm:h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Featured On Section */}
      <section className="bg-gradient-to-r from-[#1a3a1a] to-[#0f2a0f] py-6 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-8 text-center">
            Featured On
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center opacity-60">
            <div className="text-gray-400 font-bold text-base sm:text-2xl">TechCrunch</div>
            <div className="text-gray-400 font-serif text-base sm:text-2xl">FAST COMPANY</div>
            <div className="text-gray-400 font-bold text-base sm:text-2xl">MIT</div>
            <div className="text-gray-400 font-serif text-base sm:text-2xl">Forbes</div>
          </div>
        </div>
      </section>

      {/* Africa's Digital Finance Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/bitcoin-amico-201.png"
              alt="Digital finance revolution"
              className="w-full h-auto max-w-[240px] sm:max-w-sm mx-auto lg:max-w-none"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
              &quot;Explore the Future of <span className="text-[#c8ff00]">Africa&apos;s Digital</span> Finance
              Revolution&quot;
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg mb-4 sm:mb-8 leading-relaxed">
              Seeker Exchange bridges the gap between fiat and crypto, making digital finance accessible to everyone.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors group text-sm sm:text-base"
            >
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Financial Freedom Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
              &quot;Take Control of Your <span className="text-[#c8ff00]">Financial Freedom</span>&quot;
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg mb-4 sm:mb-8 leading-relaxed">
              Join Seeker Exchange today - your journey to financial autonomy starts here.
            </p>
            <Link href="/waitlist">
              <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-xl w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="relative">
            <img
              src="/images/finance-20leaders-amico-201.png"
              alt="Financial freedom"
              className="w-full h-auto max-w-[240px] sm:max-w-sm mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-20">
        <div className="bg-gradient-to-br from-[#1a3a1a] to-[#0f2a0f] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-white/5 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#c8ff00] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
              STEP INTO THE <span className="text-[#c8ff00]">FUTURE</span> OF{" "}
              <span className="text-[#c8ff00]">DIGITAL FINANCE</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-8 leading-relaxed text-gray-400">
              Trade, invest, and manage your crypto assets FAST and SECURELY on{" "}
              <span className="text-[#c8ff00] font-semibold">SEEKER EXCHANGE</span>. Built to power Africa&apos;s next
              generation of digital wealth.
            </p>
            <Link href="/waitlist">
              <Button className="bg-[#c8ff00] text-black hover:bg-[#b8ef00] font-semibold text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-xl uppercase w-full sm:w-auto">
                Join Seeker Exchange Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      <Footer />
    </div>
  )
}
