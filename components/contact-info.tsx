import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Mon-Fri: 9AM-6PM EST"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@luxeinteriors.com", "Response within 24 hours"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Design District", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: By appointment"],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Contact Information</h2>
          <p className="text-lg text-muted-foreground">Multiple ways to reach us and start your design journey.</p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <Card key={index} className="border-0 shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-4">
          <Card className="border-0 shadow-sm bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule a Consultation</h3>
              <p className="text-sm opacity-90 mb-4">Book a free 30-minute consultation to discuss your project</p>
              <Button variant="secondary" size="sm">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-card">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Prefer to Call?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our design team about your project
              </p>
              <Button variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                (555) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">How long does a typical project take?</h4>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on scope and complexity. Residential projects typically take 3-6 months,
                  while commercial projects may take 6-12 months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Do you work outside of New York?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we work with clients nationwide and internationally. Travel expenses are included in project
                  quotes for locations outside the NYC metro area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">What's included in the consultation?</h4>
                <p className="text-sm text-muted-foreground">
                  Our complimentary consultation includes space assessment, design direction, budget planning, and a
                  detailed proposal for your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
