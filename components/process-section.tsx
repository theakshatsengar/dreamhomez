import { CheckCircle, MessageSquare, Palette, Hammer, Sparkles } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description:
        "We begin with an in-depth discussion about your vision, lifestyle, budget, and timeline to understand your unique needs.",
      duration: "1-2 hours",
    },
    {
      icon: Palette,
      title: "Design Development",
      description:
        "Our team creates detailed design concepts, mood boards, and 3D renderings to visualize your future space.",
      duration: "2-3 weeks",
    },
    {
      icon: CheckCircle,
      title: "Design Approval",
      description:
        "We refine the design based on your feedback and finalize all selections, ensuring every detail meets your expectations.",
      duration: "1 week",
    },
    {
      icon: Hammer,
      title: "Implementation",
      description:
        "Our project management team coordinates with contractors, vendors, and craftspeople to bring your design to life.",
      duration: "4-12 weeks",
    },
    {
      icon: Sparkles,
      title: "Final Styling",
      description:
        "We add the finishing touches with carefully selected accessories, artwork, and styling elements to complete your space.",
      duration: "1-2 weeks",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Process</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">How We Work</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven five-step process ensures a smooth journey from initial concept to final installation, with clear
            communication and attention to detail at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`lg:flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="lg:w-1/2 lg:px-8">
                    <div className={`bg-card p-6 rounded-lg shadow-sm ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-serif font-semibold text-foreground">{step.title}</h4>
                          <p className="text-sm text-primary font-medium">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>

                  {/* Mobile step number */}
                  <div className="lg:hidden w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm mb-4">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
