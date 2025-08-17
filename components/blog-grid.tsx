import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export function BlogGrid() {
  const blogPosts = [
    {
      id: "maximizing-small-spaces",
      title: "Maximizing Small Spaces: 10 Designer Secrets",
      excerpt:
        "Learn how to make any small space feel larger and more functional with these professional design techniques.",
      author: "Sophia Williams",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Tips & Advice",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "penthouse-transformation",
      title: "Behind the Scenes: Manhattan Penthouse Transformation",
      excerpt:
        "Go behind the scenes of our latest penthouse project and see how we transformed a dated space into a modern masterpiece.",
      author: "Marcus Chen",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Project Showcases",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "color-psychology-interiors",
      title: "The Psychology of Color in Interior Design",
      excerpt:
        "Discover how different colors affect mood and behavior, and learn to use color psychology in your design decisions.",
      author: "Elena Rodriguez",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Design Trends",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "sustainable-materials-guide",
      title: "A Complete Guide to Sustainable Materials",
      excerpt:
        "Explore eco-friendly materials that don't compromise on luxury, from reclaimed wood to recycled metals.",
      author: "Sophia Williams",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Sustainability",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "lighting-design-basics",
      title: "Lighting Design 101: Creating Ambiance",
      excerpt:
        "Master the art of lighting design with our comprehensive guide to creating the perfect ambiance in any space.",
      author: "James Thompson",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Tips & Advice",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "team-spotlight-elena",
      title: "Team Spotlight: Elena's Design Philosophy",
      excerpt: "Get to know our founder Elena Rodriguez and learn about the design philosophy that drives our studio.",
      author: "Dream Homez Team",
      date: "December 1, 2024",
      readTime: "5 min read",
      category: "Behind the Scenes",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Recent Articles</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`} className="block pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
