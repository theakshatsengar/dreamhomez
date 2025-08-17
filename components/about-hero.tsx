import Image from "next/image"
export function AboutHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
                Crafting Spaces That
                <span className="block text-primary">Inspire & Delight</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that exceptional design has the power to transform not just spaces, but lives. Our passion
                lies in creating environments that tell your unique story while enhancing your daily experience.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Interior design studio workspace"
              width={800}
              height={600}
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-lg" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
