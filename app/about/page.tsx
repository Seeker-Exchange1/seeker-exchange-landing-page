import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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

        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-[#c8ff00]">Seeker Exchange</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A forward-thinking and technologically advanced digital financial platform committed to redefining the
                landscape of cryptocurrency transactions across Africa and beyond.
              </p>
            </div>
          </section>

          {/* About the Brand Section */}
          <section className="py-16 px-6 bg-[#002f00]/20">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Who We Are</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Seeker Exchange is a reliable cryptocurrency onramp and offramp service that empowers individuals and
                  businesses to seamlessly convert fiat currencies into digital assets — and vice versa — with unmatched
                  speed, precision, and integrity. At our core, we exist to foster financial inclusion and eliminate the
                  barriers that prevent everyday users from safely participating in the decentralized financial
                  ecosystem.
                </p>
                <p>
                  Our platform is designed with user trust and transactional transparency in mind, enabling crypto
                  exchanges that are not only fast and secure but also shielded from the common pitfalls of scams,
                  fraudulent intermediaries, and inefficient delays. With a laser focus on creating a streamlined,
                  user-centric experience, Seeker Exchange bridges the gap between traditional finance and the evolving
                  digital economy, allowing users to take full control of their financial autonomy in a secure,
                  efficient, and affordable manner.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="bg-gradient-to-br from-[#002f00]/30 to-[#070c0e] p-8 rounded-2xl border border-[#19a44b]/20">
                  <h3 className="text-2xl font-bold text-[#c8ff00] mb-6 uppercase tracking-wide">Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Seeker Exchange is committed to eliminating crypto scams and transactional delays by providing a
                    secure, fast, and trusted platform for cryptocurrency exchange. We aim to set a new standard of
                    safety, reliability, and user-centered service in the digital finance space.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gradient-to-br from-[#002f00]/30 to-[#070c0e] p-8 rounded-2xl border border-[#19a44b]/20">
                  <h3 className="text-2xl font-bold text-[#c8ff00] mb-6 uppercase tracking-wide">Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our vision is to become the most trusted and recognized crypto exchange platform across Africa and
                    globally — driving financial inclusion, enabling secure digital transactions, and transforming how
                    people access and interact with the crypto economy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-16 px-6 bg-[#002f00]/20">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Core <span className="text-[#c8ff00]">Values</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Trust */}
                <div className="text-center p-8 bg-[#070c0e]/50 rounded-xl border border-[#19a44b]/20 hover:border-[#c8ff00]/40 transition-colors">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c8ff00]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Trust</h3>
                  <p className="text-gray-400">Building confidence through transparency and reliability</p>
                </div>

                {/* Reliability */}
                <div className="text-center p-8 bg-[#070c0e]/50 rounded-xl border border-[#19a44b]/20 hover:border-[#c8ff00]/40 transition-colors">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c8ff00]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Reliability</h3>
                  <p className="text-gray-400">Consistent performance and dependable service</p>
                </div>

                {/* Affordability */}
                <div className="text-center p-8 bg-[#070c0e]/50 rounded-xl border border-[#19a44b]/20 hover:border-[#c8ff00]/40 transition-colors">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c8ff00]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Affordability</h3>
                  <p className="text-gray-400">Fair pricing that makes crypto accessible to all</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Trade <span className="text-[#c8ff00]">Smarter?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users who trust Seeker Exchange for secure, fast, and reliable crypto transactions.
              </p>
              <a
                href="/waitlist"
                className="inline-block bg-[#c8ff00] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b8ef00] transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
