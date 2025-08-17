import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import Image from "next/image"

export function BlogPostHero() {
  // In a real app, this would fetch post data based on slug
  const post = {
    title: "Sustainable Luxury: The Design Trends Defining 2024",
    excerpt:
      "Explore how eco-conscious materials and sustainable practices are reshaping luxury interior design, creating spaces that are both beautiful and environmentally responsible.",
    author: "Elena Rodriguez",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Design Trends",
    image: "/placeholder.svg?height=600&width=1200",
  }

  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} width={1200} height={600} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
