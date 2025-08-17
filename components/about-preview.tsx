import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/image.png?height=600&width=800"
              alt="Interior design studio"
              width={800}
              height={600}
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg opacity-20" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">About Our Studio</h2>
              <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">
                Creating Spaces That Tell Your Story
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, we&apos;ve been transforming homes and commercial spaces into extraordinary environments
              that seamlessly blend functionality with timeless beauty. Our approach is deeply personal, ensuring every
              project reflects the unique personality and lifestyle of our clients.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From concept to completion, we handle every detail with meticulous care, sourcing the finest materials and
              working with skilled craftspeople to bring your vision to life. Our portfolio spans luxury residences,
              boutique hotels, and sophisticated commercial spaces.
            </p>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-2xl font-serif font-semibold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-semibold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-semibold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Design Awards</div>
              </div>
            </div>

            <Button className="mt-6">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
