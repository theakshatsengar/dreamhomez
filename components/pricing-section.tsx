import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function PricingSection() {
  const packages = [
    {
      name: "Design Consultation",
      price: "$300",
      duration: "per session",
      description: "Perfect for getting expert advice and direction for your project",
      features: [
        "2-hour in-home consultation",
        "Space assessment and recommendations",
        "Design direction and style guidance",
        "Budget planning assistance",
        "Resource and vendor recommendations",
      ],
      popular: false,
    },
    {
      name: "Virtual Design Package",
      price: "$1,500",
      duration: "per room",
      description: "Complete design plans delivered digitally for DIY implementation",
      features: [
        "Detailed floor plan and layout",
        "3D renderings and mood boards",
        "Complete shopping list with links",
        "Color and material specifications",
        "Installation and styling guide",
        "Two revision rounds included",
      ],
      popular: true,
    },
    {
      name: "Full-Service Design",
      price: "Custom",
      duration: "quote required",
      description: "Complete design and project management from concept to completion",
      features: [
        "Comprehensive design development",
        "Project management and coordination",
        "Custom furniture and millwork",
        "Contractor and vendor management",
        "Installation and final styling",
        "Unlimited revisions during design phase",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Pricing</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Investment Options</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the service level that best fits your project needs and budget. All packages include our commitment
            to exceptional quality and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 shadow-lg bg-card ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardContent className={`p-6 lg:p-8 ${pkg.popular ? "pt-12" : ""}`}>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-2">{pkg.name}</h4>
                  <div className="mb-2">
                    <span className="text-3xl font-serif font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                  {pkg.price === "Custom" ? "Get Quote" : "Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All pricing is subject to project scope and complexity. Contact us for a detailed quote.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
