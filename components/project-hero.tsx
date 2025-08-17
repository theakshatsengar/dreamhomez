import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectHeroProps {
  slug: string
}

export function ProjectHero({ slug }: ProjectHeroProps) {
  // In a real app, this would fetch project data based on slug
  const project = {
    title: "Modern Manhattan Penthouse",
    category: "Residential Design",
    location: "New York, NY",
    year: "2024",
    size: "3,500 sq ft",
    duration: "8 months",
    image: "/placeholder.svg?height=800&width=1200",
  }

  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">{project.title}</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="h-5 w-5" />
              <span>{project.size}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{project.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
