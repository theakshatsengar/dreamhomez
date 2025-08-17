import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Award, Heart } from "lucide-react"

export function TestimonialsStats() {
  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      description: "Based on 200+ client reviews",
    },
    {
      icon: Users,
      value: "98%",
      label: "Client Satisfaction",
      description: "Would recommend us to friends",
    },
    {
      icon: Award,
      value: "150+",
      label: "Projects Completed",
      description: "Successfully delivered on time",
    },
    {
      icon: Heart,
      value: "85%",
      label: "Repeat Clients",
      description: "Return for additional projects",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm bg-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
