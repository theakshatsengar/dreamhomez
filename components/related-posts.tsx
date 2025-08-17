import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export function RelatedPosts() {
  // In a real app, this would fetch related posts based on slug
  const relatedPosts = [
    {
      id: "maximizing-small-spaces",
      title: "Maximizing Small Spaces: 10 Designer Secrets",
      excerpt: "Learn how to make any small space feel larger and more functional with these professional techniques.",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Tips & Advice",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "color-psychology-interiors",
      title: "The Psychology of Color in Interior Design",
      excerpt: "Discover how different colors affect mood and behavior in your design decisions.",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Design Trends",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "lighting-design-basics",
      title: "Lighting Design 101: Creating Ambiance",
      excerpt: "Master the art of lighting design with our comprehensive guide to perfect ambiance.",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Tips & Advice",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Related Articles</h2>
          <p className="text-lg text-muted-foreground">Continue exploring our design insights</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <div className="w-full h-48 relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 leading-tight">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read Article
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
