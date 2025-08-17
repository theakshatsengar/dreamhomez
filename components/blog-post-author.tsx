import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

interface BlogPostAuthorProps {
  slug: string
}

export function BlogPostAuthor({ slug }: BlogPostAuthorProps) {
  // In a real app, this would fetch author data based on slug
  const author = {
    name: "Elena Rodriguez",
    role: "Founder & Creative Director",
    bio: "Elena is the visionary behind Dream Homez, with over 15 years of experience creating sophisticated spaces for discerning clients. Her work has been featured in Architectural Digest, Elle Decor, and House Beautiful.",
    image: "/placeholder.svg?height=120&width=120",
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-lg bg-card">
          <CardContent className="p-8 lg:p-12">
            <div className="flex items-start space-x-6">
              <img
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">{author.name}</h3>
                <p className="text-primary font-medium mb-3">{author.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{author.bio}</p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
