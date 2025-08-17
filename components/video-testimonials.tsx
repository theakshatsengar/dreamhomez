"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videoTestimonials = [
    {
      id: 1,
      title: "Sarah's Apartment Transformation",
      author: "Sarah Mitchell",
      project: "Upper East Side Apartment",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:45",
      description: "See how we transformed Sarah's pre-war apartment into a modern sanctuary.",
    },
    {
      id: 2,
      title: "Corporate Office Redesign",
      author: "David Chen",
      project: "Tech Startup Headquarters",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "3:20",
      description: "Discover how our design boosted productivity and employee satisfaction.",
    },
    {
      id: 3,
      title: "Boutique Hotel Success Story",
      author: "Emma Rodriguez",
      project: "Miami Boutique Hotel",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "4:15",
      description: "Learn how our design increased bookings and guest satisfaction scores.",
    },
  ]

  const openVideo = (index: number) => {
    setSelectedVideo(index)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our clients share their experiences and see the transformation of their spaces firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card
                key={video.id}
                className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openVideo(index)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">{video.duration}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">{video.author}</div>
                    <div className="text-primary">{video.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">{videoTestimonials[selectedVideo].title}</p>
                  <p className="text-sm opacity-75 mt-2">Video player would be embedded here</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="absolute -top-12 right-0 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={closeVideo}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
