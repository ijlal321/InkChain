import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileText } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <CardTitle className="text-xl font-semibold text-white">PADO Attestation</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300">Ensures only authentic and verified content creators can publish on our platform, maintaining high-quality standards.</p>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <CardTitle className="text-xl font-semibold text-white">Secure Data Transfer</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300">Utilizes PADO's file sharing technology for secure and encrypted transfer of content between creators and readers.</p>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardHeader className="text-center">
            <FileText className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <CardTitle className="text-xl font-semibold text-white">Decentralized Publishing</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300">Content is stored and distributed across a decentralized network, ensuring censorship resistance and permanent availability.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

