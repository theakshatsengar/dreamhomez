import { Lightbulb, Heart, Palette, Users } from "lucide-react"

export function PhilosophySection() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge design trends while respecting timeless principles of beauty and function.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every project is infused with our genuine love for design and commitment to excellence.",
    },
    {
      icon: Palette,
      title: "Artistry",
      description: "We approach each space as a canvas, carefully curating elements that create visual harmony.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best results come from close partnership with our clients throughout the process.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Philosophy</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Design Principles That Guide Us</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our approach to interior design is rooted in four fundamental principles that ensure every project reflects
            both our expertise and your unique vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <principle.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-foreground mb-3">{principle.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="bg-muted/30 p-8 lg:p-12 rounded-lg">
          <blockquote className="text-xl lg:text-2xl font-serif text-foreground text-center leading-relaxed italic">
            "We believe that great design is not about following trends, but about creating timeless spaces that evolve
            with their inhabitants. Every room should tell a story, evoke emotion, and enhance the daily rituals of
            life."
          </blockquote>
          <div className="text-center mt-6">
            <div className="font-semibold text-foreground">Elena Rodriguez</div>
            <div className="text-sm text-muted-foreground">Founder & Creative Director</div>
          </div>
        </div>
      </div>
    </section>
  )
}
