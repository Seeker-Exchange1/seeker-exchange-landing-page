import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, Clock, HelpCircle } from "lucide-react"

export default function SupportPage() {
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
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How Can We <span className="text-[#c8ff00]">Help You?</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our support team is here to assist you with any questions or concerns about Seeker Exchange.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
              {/* Email Support */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c8ff00]/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#c8ff00]/10 rounded-full">
                    <Mail className="h-6 w-6 text-[#c8ff00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Email Support</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Send us an email and our team will get back to you within 24 hours.
                </p>
                <a
                  href="mailto:support@seekerexchange.com"
                  className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors"
                >
                  support@seekerexchange.com
                  <span>→</span>
                </a>
              </div>

              {/* WhatsApp Support */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#c8ff00]/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#c8ff00]/10 rounded-full">
                    <MessageCircle className="h-6 w-6 text-[#c8ff00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">WhatsApp Support</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Chat with us directly on WhatsApp for quick assistance and real-time support.
                </p>
                <a
                  href="https://wa.me/message/6CAXWFYQZ7WUK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c8ff00] hover:text-[#b8ef00] font-semibold transition-colors"
                >
                  Start WhatsApp Chat
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#c8ff00]/10 to-transparent border border-[#c8ff00]/20 rounded-2xl p-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c8ff00]/10 rounded-full">
                  <Clock className="h-6 w-6 text-[#c8ff00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Support Hours</h3>
                  <p className="text-gray-300 text-lg">
                    Our support team is available <span className="text-[#c8ff00] font-semibold">24/7</span> to assist
                    you with any inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="h-8 w-8 text-[#c8ff00]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "When will Seeker Exchange launch?",
                    answer:
                      "We're currently in development and working hard to bring you the best crypto trading experience. Join our waitlist to be notified when we launch!",
                  },
                  {
                    question: "What cryptocurrencies will be supported?",
                    answer:
                      "Seeker Exchange will support all major cryptocurrencies including Bitcoin, Ethereum, and many altcoins. We'll announce the complete list closer to launch.",
                  },
                  {
                    question: "Is Seeker Exchange secure?",
                    answer:
                      "Security is our top priority. We implement industry-leading security measures including cold storage, multi-factor authentication, and regular security audits.",
                  },
                  {
                    question: "Will there be a mobile app?",
                    answer:
                      "Yes! We're launching our web application first to ensure a stable and secure platform. Mobile apps for both iOS and Android will follow after the web app launch.",
                  },
                  {
                    question: "What payment methods will be accepted?",
                    answer:
                      "At launch, we'll support bank transfers and mobile money for African markets. Debit and credit card payments will be added in future updates.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#c8ff00]/50 transition-all group"
                  >
                    <summary className="font-semibold text-white text-lg cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-[#c8ff00] group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto text-center mt-16">
              <div className="bg-gradient-to-r from-[#c8ff00]/10 via-[#c8ff00]/5 to-transparent border border-[#c8ff00]/20 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our support team is ready to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:support@seekerexchange.com"
                    className="px-8 py-3 bg-[#c8ff00] text-black rounded-lg hover:bg-[#b8ef00] font-semibold transition-colors"
                  >
                    Email Us
                  </a>
                  <a
                    href="https://wa.me/message/6CAXWFYQZ7WUK1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 font-semibold transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
