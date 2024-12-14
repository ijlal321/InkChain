import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Shield } from 'lucide-react'

export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">About InkChain</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Lightbulb className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovative Platform</h3>
            <p className="text-gray-300">Leveraging blockchain technology to revolutionize content creation and distribution.</p>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community-Driven</h3>
            <p className="text-gray-300">Empowering creators and readers to connect directly, fostering a vibrant ecosystem.</p>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Transparent</h3>
            <p className="text-gray-300">Ensuring fair compensation and protecting intellectual property through smart contracts.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

