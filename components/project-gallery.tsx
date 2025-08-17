"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectGalleryProps {
  slug: string
}

export function ProjectGallery({ slug }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // In a real app, this would fetch gallery images based on slug
  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Living room overview",
      caption: "Open-concept living space with floor-to-ceiling windows",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Kitchen design",
      caption: "Custom kitchen with marble countertops and brass fixtures",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Master bedroom",
      caption: "Serene master bedroom with city views",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Dining area",
      caption: "Elegant dining space with custom lighting",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Home office",
      caption: "Sophisticated home office with built-in storage",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Bathroom design",
      caption: "Luxurious master bathroom with soaking tub",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-4">Project Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Explore the detailed transformation of this sophisticated urban retreat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium">{images[selectedImage].caption}</p>
              <p className="text-white/70 text-sm mt-1">
                {selectedImage + 1} of {images.length}
              </p>
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="sm"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Close Button */}
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
