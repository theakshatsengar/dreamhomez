"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Modern Penthouse",
      location: "Manhattan, NY",
      category: "Residential",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A sophisticated urban retreat featuring clean lines, premium materials, and breathtaking city views.",
    },
    {
      title: "Boutique Hotel Lobby",
      location: "Beverly Hills, CA",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "An inviting hospitality space that balances luxury with comfort, creating memorable guest experiences.",
    },
    {
      title: "Family Estate",
      location: "Hamptons, NY",
      category: "Residential",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A timeless family home blending traditional elegance with modern functionality for multi-generational living.",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Featured Work</h2>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Recent Projects</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest interior design projects showcasing our commitment to creating exceptional spaces.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-96">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-2">
                  {projects[currentProject].title}
                </h4>
                <p className="text-primary font-medium mb-4">{projects[currentProject].location}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{projects[currentProject].description}</p>
                <Button variant="outline" className="self-start bg-transparent">
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? "bg-primary" : "bg-border"
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={prevProject}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextProject}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
