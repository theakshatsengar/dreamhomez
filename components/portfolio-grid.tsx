"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Residential", "Commercial", "Hospitality", "Renovation"]

  const projects = [
    {
      id: "modern-penthouse",
      title: "Modern Manhattan Penthouse",
      category: "Residential",
      location: "New York, NY",
      year: "2024",
      image: "/placeholder.svg?height=600&width=800",
      description: "A sophisticated urban retreat featuring clean lines and breathtaking city views.",
      featured: true,
    },
    {
      id: "boutique-hotel",
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      location: "Beverly Hills, CA",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "An inviting hospitality space balancing luxury with comfort.",
      featured: true,
    },
    {
      id: "family-estate",
      title: "Hamptons Family Estate",
      category: "Residential",
      location: "Hamptons, NY",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Timeless family home blending traditional elegance with modern functionality.",
      featured: false,
    },
    {
      id: "corporate-office",
      title: "Tech Startup Headquarters",
      category: "Commercial",
      location: "San Francisco, CA",
      year: "2024",
      image: "/placeholder.svg?height=600&width=800",
      description: "Dynamic workspace fostering creativity and collaboration.",
      featured: false,
    },
    {
      id: "luxury-apartment",
      title: "Upper East Side Apartment",
      category: "Renovation",
      location: "New York, NY",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete renovation transforming a classic pre-war apartment.",
      featured: false,
    },
    {
      id: "restaurant-design",
      title: "Fine Dining Restaurant",
      category: "Hospitality",
      location: "Miami, FL",
      year: "2024",
      image: "/placeholder.svg?height=600&width=800",
      description: "Elegant dining space creating memorable culinary experiences.",
      featured: false,
    },
    {
      id: "modern-townhouse",
      title: "Brooklyn Townhouse",
      category: "Residential",
      location: "Brooklyn, NY",
      year: "2023",
      image: "/placeholder.svg?height=600&width=800",
      description: "Contemporary family home with sustainable design elements.",
      featured: false,
    },
    {
      id: "retail-flagship",
      title: "Fashion Flagship Store",
      category: "Commercial",
      location: "Los Angeles, CA",
      year: "2024",
      image: "/placeholder.svg?height=600&width=800",
      description: "Immersive retail experience reflecting brand identity.",
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="px-6"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    project.featured ? "h-64 lg:h-80" : "h-48 lg:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <Link href={`/portfolio/${project.id}`} className="block pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 bg-transparent"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
