import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const dummyArticles = [
  { id: 1, title: "The Future of Decentralized Finance", price: 0.1, author: "Alice Nakamoto" },
  { id: 2, title: "Web3 and Its Impact on Society", price: 0.2, author: "Bob Buterin" },
  { id: 3, title: "NFTs: Beyond Digital Art", price: 0.15, author: "Charlie Hoskinson" },
]

export default function LatestArticles() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyArticles.map((article) => (
          <Card key={article.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
              <CardTitle className="text-lg font-semibold text-white">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-gray-300 mb-2">By {article.author}</p>
              <p className="text-lg font-bold mb-4 text-white">{article.price} ETH</p>
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
    </div>
  )
}

