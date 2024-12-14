"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star } from 'lucide-react'
import DynamicBackground from "@/components/DynamicBackground"

const dummyArticles = [
  { id: 1, title: "Introduction to Blockchain", price: 0.1, author: "Alice Nakamoto", content: "This is the full content of the article about blockchain..." },
  { id: 2, title: "The Future of Decentralized Finance", price: 0.2, author: "Bob Buterin", content: "This is the full content of the article about DeFi..." },
  { id: 3, title: "Web3 and Its Impact on Society", price: 0.15, author: "Charlie Hoskinson", content: "This is the full content of the article about Web3..." },
]

export default function ArticlePage() {
  const { id } = useParams()
  const article = dummyArticles.find(a => a.id === Number(id))
  const [isPurchased, setIsPurchased] = useState(false)
  const [review, setReview] = useState("")

  if (!article) {
    return <div>Article not found</div>
  }

  const handlePurchase = () => {
    // Here you would typically handle the crypto payment
    console.log(`Purchasing article for ${article.price} ETH`)
    setIsPurchased(true)
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Review submitted:", review)
    // Here you would typically send the review to your backend
    setReview("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 font-poppins">
      <DynamicBackground />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
            <CardTitle className="text-3xl font-bold gradient-text">{article.title}</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">By {article.author}</p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-2xl font-bold mb-6">{article.price} ETH</p>
            {!isPurchased ? (
              <Button onClick={handlePurchase} className="w-full mb-4">
                Purchase for {article.price} ETH
              </Button>
            ) : (
              <>
                <div className="mt-4 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Article Content:</h3>
                  <p className="text-gray-400 dark:text-gray-400">{article.content}</p>
                </div>
                <form onSubmit={handleReviewSubmit} className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Leave a Review:</h3>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-yellow-400 cursor-pointer" />
                    ))}
                  </div>
                  <Textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                    rows={4}
                    className="w-full mb-4"
                  />
                  <Button type="submit">Submit Review</Button>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

