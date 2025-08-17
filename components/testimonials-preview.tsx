"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsPreview() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      project: "Upper East Side Apartment",
      content:
        "Working with Dream Homez was an absolute dream. They transformed our apartment into a sophisticated sanctuary that perfectly reflects our lifestyle. Every detail was thoughtfully considered.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Chen",
      role: "Business Owner",
      project: "Corporate Headquarters",
      content:
        "The team created an inspiring workspace that has transformed how our employees feel about coming to work. The design perfectly balances professionalism with comfort and creativity.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Rodriguez",
      role: "Hotel Manager",
      project: "Boutique Hotel Renovation",
      content:
        "Our guests consistently comment on the beautiful interiors. The design has elevated our property to a new level of luxury while maintaining the warm, welcoming atmosphere we wanted.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Client Testimonials</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">What Our Clients Say</h3>
        </div>

        <Card className="border-0 shadow-lg bg-card">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-current" />
              ))}
            </div>

            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 font-serif italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                <div className="text-sm text-primary">{testimonials[currentTestimonial].project}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? "bg-primary" : "bg-border"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
