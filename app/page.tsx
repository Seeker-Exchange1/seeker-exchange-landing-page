import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Globe, Lock, TrendingUp, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(10, 61, 10, 0.9) 0%, rgba(5, 31, 5, 0.95) 50%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white text-pretty">
                Easily <span className="text-[#c8ff00]">Trade</span> and Manage Your{" "}
                <span className="text-[#c8ff00]">Crypto Assets</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Trading crypto has never been simpler. Enjoy quick and effortless trading of your digital currencies
                portfolio today.
              </p>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-[#c8ff00] text-black hover:bg-[#b3e600] font-bold text-base px-10 py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c8ff00]/30 uppercase tracking-wide"
                >
                  GET STARTED
                </Button>
              </Link>
            </div>

            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <img
                src="/images/chesst 1.svg"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-black/30 backdrop-blur-sm py-16 border-y border-[#c8ff00]/10">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-12 text-center font-medium">
              Featured On
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
              <div className="text-gray-400 font-bold text-2xl">TechCrunch</div>
              <div className="text-gray-400 font-serif italic text-2xl">FAST COMPANY</div>
              <div className="text-gray-400 font-bold text-2xl">MIT</div>
              <div className="text-gray-400 font-serif italic text-2xl">Forbes</div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trade Without <span className="text-[#c8ff00]">Limits</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Experience seamless crypto trading with enterprise-grade security and lightning-fast execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your assets are protected with Blockchain encryption and secure servers.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Execute trades in milliseconds with our high-performance matching engine.",
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Trade 24/7 from anywhere in the world with instant settlement.",
              },
              {
                icon: Lock,
                title: "Self-Custody",
                description: "You own your keys, you own your crypto. Full control over your assets.",
              },
              {
                icon: TrendingUp,
                title: "Advanced Trading",
                description: "Professional charts and real-time data.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Join thousands of traders building Africa's financial future together.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border-2 border-[#c8ff00]/20 hover:border-[#c8ff00] transition-all duration-300 hover:shadow-xl hover:shadow-[#c8ff00]/20"
              >
                <div className="mb-6 inline-block p-4 rounded-xl bg-[#c8ff00]/10 group-hover:bg-[#c8ff00]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <img
                src="images\Bitcoin-amico 1.svg"
                alt="Africa's digital finance revolution"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white text-pretty">
                "Explore the Future of <span className="text-[#c8ff00]">Africa's Digital</span> Finance Revolution"
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Seeker Exchange bridges the gap between fiat and crypto, making digital finance accessible to everyone.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b3e600] font-semibold text-lg transition-colors group"
              >
                Learn more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white text-pretty">
                "Take Control of Your <span className="text-[#c8ff00]">Financial Freedom</span>"
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Join Seeker Exchange today - your journey to financial autonomy starts here.
              </p>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-[#c8ff00] text-black hover:bg-[#b3e600] font-bold text-base px-10 py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c8ff00]/30"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <img
                src="\images\Finance leaders-amico 1.svg"
                alt="Financial freedom - person standing on coin stacks"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="relative rounded-[3rem] p-12 sm:p-16 lg:p-20 overflow-hidden bg-gradient-to-br from-[#0a3d0a]/80 to-[#051f05]/90 border-2 border-[#c8ff00]/20">
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight text-balance">
                STEP INTO THE <span className="text-[#c8ff00]">FUTURE</span>
                <br />
                OF <span className="text-[#c8ff00]">DIGITAL FINANCE</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Trade, invest, and manage your crypto assets FAST and SECURELY on{" "}
                <span className="font-bold text-[#c8ff00]">SEEKER EXCHANGE</span>.
                <br />
                Built to power Africa's next generation of digital wealth.
              </p>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-[#c8ff00] text-black hover:bg-[#b3e600] font-bold text-base sm:text-lg px-10 sm:px-14 py-6 sm:py-7 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8ff00]/40"
                >
                  JOIN SEEKER EXCHANGE NOW
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
