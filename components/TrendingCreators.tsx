import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const trendingCreators = [
  { id: 1, name: "Alice Nakamoto", avatar: "/avatars/alice.jpg", articles: 15, followers: 1200 },
  { id: 2, name: "Bob Buterin", avatar: "/avatars/bob.jpg", articles: 12, followers: 980 },
  { id: 3, name: "Charlie Hoskinson", avatar: "/avatars/charlie.jpg", articles: 18, followers: 1500 },
]

export default function TrendingCreators() {
  return (
    <section id="creators" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Trending Creators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingCreators.map((creator) => (
          <Card key={creator.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <CardHeader className="flex flex-row items-center gap-4 p-4">
              <Avatar>
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold text-white">{creator.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-gray-300 mb-2">{creator.articles} Articles Published</p>
              <p className="text-sm text-gray-300">{creator.followers} Followers</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

