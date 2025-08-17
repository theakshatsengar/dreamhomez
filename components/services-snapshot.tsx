import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Palette, Sparkles } from "lucide-react"

export function ServicesSnapshot() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "Complete home transformations from concept to completion, creating personalized living spaces that reflect your lifestyle.",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description:
        "Sophisticated office environments, retail spaces, and hospitality venues that enhance brand identity and user experience.",
    },
    {
      icon: Palette,
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing spaces with thoughtful renovations that maximize potential and functionality.",
    },
    {
      icon: Sparkles,
      title: "Styling & Consultation",
      description:
        "Expert styling services and design consultations to refine your space with carefully curated furnishings and accessories.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Services</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Comprehensive Design Solutions</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final styling, we offer a full range of interior design services tailored to your
            unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
