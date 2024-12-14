"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublishArticle() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or smart contract
    console.log("Article published:", { title, content, price })
    // Redirect to the articles page after publishing
    router.push("/articles")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 font-poppins">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold gradient-text">Publish New Article</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={10}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price (ETH)
                </label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">Publish Article</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

