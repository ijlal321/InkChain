import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LatestArticles from "@/components/LatestArticles"
import TrendingCreators from "@/components/TrendingCreators"
import AboutUs from "@/components/AboutUs"
import HowItWorks from "@/components/HowItWorks"
import DynamicBackground from "@/components/DynamicBackground"
import { Button } from "@/components/ui/button"
import { WalletProvider } from '../context/WalletContext';


export default function Home() {
  return (
    <WalletProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 font-poppins">
        <DynamicBackground />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 text-white">
              Welcome to <span className="gradient-text blockscribe-logo">InkChain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Unleash your creativity on the blockchain. Write, read, and earn in a decentralized content ecosystem.
            </p>
            <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </Button>
          </div>
          <LatestArticles />
          <HowItWorks />
          <TrendingCreators />
          <AboutUs />
        </main>
        <Footer />
      </div>
    </WalletProvider>
  )
}

