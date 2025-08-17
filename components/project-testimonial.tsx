import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function ProjectTestimonial() {
  // In a real app, this would fetch testimonial based on slug
  const testimonial = {
    content:
      "Working with Dream Homez was an absolute dream. They transformed our apartment into a sophisticated sanctuary that perfectly reflects our lifestyle. Every detail was thoughtfully considered, from the custom millwork to the carefully curated art pieces. The team's professionalism and attention to detail exceeded our expectations at every turn.",
    author: "Sarah & Michael Chen",
    role: "Homeowners",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Client Testimonial</h2>
        </div>

        <Card className="border-0 shadow-xl bg-card">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-current" />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
              &quot;{testimonial.content}&quot;
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} fill className="object-cover" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
