import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export function FeaturedPost() {
  const featuredPost = {
    id: "sustainable-luxury-design-trends-2024",
    title: "Sustainable Luxury: The Design Trends Defining 2024",
    excerpt:
      "Explore how eco-conscious materials and sustainable practices are reshaping luxury interior design, creating spaces that are both beautiful and environmentally responsible.",
    author: "Elena Rodriguez",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Design Trends",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Featured Article</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground">Latest Insights</h3>
        </div>

        <Card className="overflow-hidden border-0 shadow-xl bg-card">
          <div className="lg:flex">
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>

            {/* Content */}
            <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="mt-4">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
