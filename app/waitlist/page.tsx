import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WaitlistForm } from "@/components/waitlist-form"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f0a] via-[#0f2a0f] to-[#0a1f0a]">
      <Header />

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Trade Without <span className="text-[#c8ff00]">Limits</span>.
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Seeker Exchange gives you the speed, security, and tools you need to trade smarter—without complexity.
          </p>

          <div className="bg-gradient-to-br from-[#1a3a1a] to-[#0f2a0f] rounded-3xl p-8 md:p-12 border border-white/5 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Join Our <span className="text-[#c8ff00]">Waitlist</span>
            </h2>
            <p className="text-gray-400 mb-8">Be among the first to get notified about our app updates and many more</p>

            <WaitlistForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
