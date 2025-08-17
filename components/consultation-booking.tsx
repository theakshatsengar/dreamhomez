import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, Home, ArrowRight } from "lucide-react"

export function ConsultationBooking() {
  const consultationTypes = [
    {
      icon: Home,
      title: "In-Home Consultation",
      duration: "90 minutes",
      price: "Free",
      description: "We visit your space to assess the project and discuss your vision in detail.",
      features: ["Space assessment", "Design direction", "Budget planning", "Project timeline"],
    },
    {
      icon: Video,
      title: "Virtual Consultation",
      duration: "60 minutes",
      price: "Free",
      description: "Connect with our team via video call to discuss your project remotely.",
      features: ["Video walkthrough", "Design guidance", "Resource sharing", "Follow-up materials"],
    },
    {
      icon: Calendar,
      title: "Showroom Visit",
      duration: "45 minutes",
      price: "Free",
      description: "Visit our design showroom to see materials and discuss your project.",
      features: ["Material samples", "Design inspiration", "Portfolio review", "Team introduction"],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Book Your Consultation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the consultation format that works best for you. All initial consultations are complimentary and
            include a detailed project proposal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultationTypes.map((consultation, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <consultation.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{consultation.title}</h3>

                <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{consultation.duration}</span>
                  </div>
                  <div className="font-semibold text-primary">{consultation.price}</div>
                </div>

                <p className="text-muted-foreground text-sm mb-6">{consultation.description}</p>

                <ul className="space-y-2 mb-6">
                  {consultation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full">
                  Book {consultation.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which consultation is right for you? We&apos;re happy to help you choose.
          </p>
          <Button variant="outline" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Quick Call
          </Button>
        </div>
      </div>
    </section>
  )
}
