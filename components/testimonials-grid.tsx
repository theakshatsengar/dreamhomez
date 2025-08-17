import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsGrid() {
  const testimonials = [
    {
      content:
        "Working with Dream Homez was an absolute dream. They transformed our apartment into a sophisticated sanctuary that perfectly reflects our lifestyle. Every detail was thoughtfully considered, from the custom millwork to the carefully curated art pieces.",
      author: "Sarah Mitchell",
      role: "Homeowner",
      project: "Upper East Side Apartment",
      location: "New York, NY",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: true,
    },
    {
      content:
        "The team created an inspiring workspace that has transformed how our employees feel about coming to work. The design perfectly balances professionalism with comfort and creativity. Our productivity has noticeably increased.",
      author: "David Chen",
      role: "CEO, Tech Startup",
      project: "Corporate Headquarters",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: false,
    },
    {
      content:
        "Our guests consistently comment on the beautiful interiors. The design has elevated our property to a new level of luxury while maintaining the warm, welcoming atmosphere we wanted. Bookings have increased significantly.",
      author: "Emma Rodriguez",
      role: "Hotel Manager",
      project: "Boutique Hotel Renovation",
      location: "Miami, FL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: false,
    },
    {
      content:
        "From the initial consultation to the final reveal, the process was seamless. They listened to our needs, respected our budget, and delivered beyond our expectations. Our home now feels like a luxury resort.",
      author: "Michael & Jennifer Thompson",
      role: "Homeowners",
      project: "Family Estate Renovation",
      location: "Hamptons, NY",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: true,
    },
    {
      content:
        "The attention to detail is extraordinary. Every element was carefully selected and perfectly executed. They managed to create a space that's both functional for our family and elegant enough for entertaining.",
      author: "Lisa Park",
      role: "Interior Design Enthusiast",
      project: "Modern Townhouse",
      location: "Brooklyn, NY",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: false,
    },
    {
      content:
        "What impressed me most was their ability to translate our vision into reality while adding their own creative touches. The result is a space that feels uniquely ours but elevated to a level we never imagined possible.",
      author: "Robert Williams",
      role: "Art Collector",
      project: "Penthouse Design",
      location: "Manhattan, NY",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: false,
    },
    {
      content:
        "The project management was flawless. They coordinated everything seamlessly, kept us informed throughout the process, and delivered exactly on schedule. The quality of workmanship is exceptional.",
      author: "Amanda Foster",
      role: "Business Executive",
      project: "Executive Office Suite",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: false,
    },
    {
      content:
        "They transformed our dated restaurant into a stunning dining destination. The new design has created an atmosphere that perfectly complements our cuisine, and our customer reviews have never been better.",
      author: "Chef Marco Antonelli",
      role: "Restaurant Owner",
      project: "Fine Dining Restaurant",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      featured: true,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Client Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Read detailed testimonials from clients across our diverse portfolio of residential, commercial, and
            hospitality projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 ${
                testimonial.featured ? "lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6 font-serif italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
