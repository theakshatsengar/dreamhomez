import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Founder & Creative Director",
      specialty: "Luxury Residential Design",
      bio: "With over 15 years of experience, Elena leads our creative vision and oversees all major projects. Her work has been featured in Architectural Digest and Elle Decor.",
      image: "/placeholder.svg?height=400&width=400",
      education: "MFA Interior Design, Parsons School of Design",
    },
    {
      name: "Marcus Chen",
      role: "Senior Designer",
      specialty: "Commercial & Hospitality",
      bio: "Marcus brings a unique perspective to commercial spaces, having worked with leading hospitality brands. His designs seamlessly blend functionality with aesthetic appeal.",
      image: "/placeholder.svg?height=400&width=400",
      education: "BFA Architecture, Rhode Island School of Design",
    },
    {
      name: "Sophia Williams",
      role: "Design Director",
      specialty: "Sustainable Design",
      bio: "Sophia champions our sustainability initiatives, ensuring every project incorporates eco-friendly materials and practices without compromising on luxury.",
      image: "/placeholder.svg?height=400&width=400",
      education: "MS Sustainable Design, California College of the Arts",
    },
    {
      name: "James Thompson",
      role: "Project Manager",
      specialty: "Project Coordination",
      bio: "James ensures every project runs smoothly from concept to completion. His attention to detail and client communication skills are unmatched.",
      image: "/placeholder.svg?height=400&width=400",
      education: "MBA Project Management, NYU Stern",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Meet Our Team</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">The Creative Minds Behind Our Work</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of talented designers, architects, and project managers brings together decades of
            experience and a shared passion for creating extraordinary spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg bg-card group hover:shadow-xl transition-all duration-300"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <CardContent className="md:w-1/2 p-6 lg:p-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-foreground">{member.name}</h4>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>

                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground font-medium">{member.education}</p>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <button className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </button>
                      <button className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-200">
                        <Mail className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-serif font-semibold text-foreground mb-6">What Unites Us</h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Collaborative Spirit</h5>
              <p className="text-muted-foreground text-sm">
                We believe the best ideas emerge when diverse perspectives come together in pursuit of a common vision.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-2">Continuous Learning</h5>
              <p className="text-muted-foreground text-sm">
                Our team stays at the forefront of design trends, materials, and technologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-2">Client-Centric Approach</h5>
              <p className="text-muted-foreground text-sm">
                Every decision we make is guided by our commitment to exceeding our clients' expectations and bringing
                their dreams to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
