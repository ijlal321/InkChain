import Header from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import DynamicBackground from "@/components/DynamicBackground"

const dummyArticles = [
  { id: 1, title: "Introduction to Blockchain", price: 0.1, author: "Alice Nakamoto" },
  { id: 2, title: "The Future of Decentralized Finance", price: 0.2, author: "Bob Buterin" },
  { id: 3, title: "Web3 and Its Impact on Society", price: 0.15, author: "Charlie Hoskinson" },
  { id: 4, title: "Smart Contracts Explained", price: 0.12, author: "David Antonopoulos" },
  { id: 5, title: "The Rise of NFTs", price: 0.18, author: "Eve Winklevoss" },
]

export default function Articles() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 font-poppins">
      <DynamicBackground />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center gradient-text">All Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                <CardTitle className="text-lg font-semibold text-white">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4" style={{backgroundColor:"#50346c"}}>
                <p className="text-sm text-gray-300 mb-2">By {article.author}</p>
                <p className="text-lg font-bold mb-4">{article.price} ETH</p>
                <Link href={`/articles/${article.id}`}>
                  <Button variant="outline" className="w-full group bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

