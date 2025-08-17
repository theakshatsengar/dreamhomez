"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette, Lightbulb, Camera, Leaf, Users } from "lucide-react"

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    { name: "All", icon: null, count: 24 },
    { name: "Design Trends", icon: Palette, count: 8 },
    { name: "Project Showcases", icon: Camera, count: 6 },
    { name: "Tips & Advice", icon: Lightbulb, count: 5 },
    { name: "Sustainability", icon: Leaf, count: 3 },
    { name: "Behind the Scenes", icon: Users, count: 2 },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Explore by Category</h2>
          <p className="text-lg text-muted-foreground">
            Find the content that interests you most, from design trends to project deep-dives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className="flex items-center space-x-2"
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              <span>{category.name}</span>
              <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs">{category.count}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
