import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, FileText, Video, Code, TrendingUp, Shield } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/light.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                Learning <span className="text-[#c8ff00]">Resources</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Everything you need to master crypto trading on Seeker Exchange.
              </p>
            </div>

            {/* Resources Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {/* Getting Started Guide */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Getting Started Guide</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Learn the basics of crypto trading and how to get started on Seeker Exchange.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Trading Tutorials */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <Video className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Trading Tutorials</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Step-by-step video guides to help you navigate our platform and execute trades.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Market Analysis */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Market Analysis</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Expert insights and analysis to help you make informed trading decisions.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* API Documentation */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">API Documentation</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Complete API reference for developers building on Seeker Exchange.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Security Best Practices */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Security Best Practices</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Learn how to keep your account and assets safe with our security guidelines.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Glossary */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c8ff00]/50 transition-all group">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Crypto Glossary</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  A comprehensive guide to common cryptocurrency and trading terms.
                </p>
                <button className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors">
                  Coming Soon
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto text-center mt-16">
              <div className="bg-gradient-to-r from-[#c8ff00]/10 via-[#c8ff00]/5 to-transparent border border-[#c8ff00]/20 rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                  Join the waitlist to get early access and free airtime when we launch.
                </p>
                <a
                  href="/waitlist"
                  className="inline-block px-6 sm:px-8 py-3 bg-[#c8ff00] text-black rounded-lg hover:bg-[#b8ef00] font-semibold transition-colors"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
