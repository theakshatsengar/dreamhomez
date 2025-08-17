import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building2, Sparkles, Hammer, Eye, Users } from "lucide-react"

export function ServicesList() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Complete home transformations from concept to completion. We create personalized living spaces that reflect your lifestyle, preferences, and functional needs.",
      features: ["Space Planning", "Custom Furniture Design", "Color Consultation", "Lighting Design"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "Starting from $150/sq ft",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description:
        "Sophisticated office environments, retail spaces, and hospitality venues that enhance brand identity and create memorable experiences for customers and employees.",
      features: ["Brand Integration", "Workflow Optimization", "Acoustic Solutions", "Sustainable Materials"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "Custom Quote Required",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing spaces with thoughtful renovations that maximize potential, improve functionality, and enhance aesthetic appeal.",
      features: ["Structural Planning", "Permit Assistance", "Contractor Coordination", "Timeline Management"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "Starting from $200/sq ft",
    },
    {
      icon: Sparkles,
      title: "Styling & Consultation",
      description:
        "Expert styling services and design consultations to refine your space with carefully curated furnishings, accessories, and artistic elements.",
      features: ["Furniture Selection", "Art Curation", "Accessory Styling", "Color Schemes"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "Starting from $2,500",
    },
    {
      icon: Eye,
      title: "Virtual Design",
      description:
        "Remote design services perfect for clients who prefer a hands-on approach. Receive detailed design plans, shopping lists, and styling guides.",
      features: ["3D Renderings", "Shopping Lists", "Installation Guides", "Video Consultations"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "Starting from $1,500",
    },
    {
      icon: Users,
      title: "Design Consultation",
      description:
        "One-on-one consultations to discuss your vision, assess your space, and create a roadmap for your design project.",
      features: ["Space Assessment", "Design Strategy", "Budget Planning", "Timeline Development"],
      image: "/placeholder.svg?height=400&width=600",
      pricing: "$300 per session",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Services</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">What We Offer</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg bg-card group hover:shadow-xl transition-all duration-300"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5">
                  <div className="w-full h-48 md:h-full relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="md:w-3/5 p-6 lg:p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-serif font-semibold text-foreground">{service.title}</h4>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2 text-sm">What&apos;s Included:</h5>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-sm font-semibold text-primary">{service.pricing}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
