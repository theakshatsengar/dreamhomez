import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function RelatedProjects() {
  // In a real app, this would fetch related projects based on slug
  const relatedProjects = [
    {
      id: "boutique-hotel",
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "/placeholder.svg?height=400&width=600",
      description: "An inviting hospitality space balancing luxury with comfort.",
    },
    {
      id: "family-estate",
      title: "Hamptons Family Estate",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      description: "Timeless family home blending traditional elegance with modern functionality.",
    },
    {
      id: "luxury-apartment",
      title: "Upper East Side Apartment",
      category: "Renovation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete renovation transforming a classic pre-war apartment.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Related Projects</h2>
          <p className="text-lg text-muted-foreground">Explore more of our design work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <div className="w-full h-48 relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <Link href={`/portfolio/${project.id}`}>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Project
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
