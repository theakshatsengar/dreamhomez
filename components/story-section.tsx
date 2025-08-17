export function StorySection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Story */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Our Story</h2>
              <h3 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">A Journey of Design Excellence</h3>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                Founded in 2012 by visionary designer Elena Rodriguez, Dream Homez began as a boutique studio with a
                simple yet profound mission: to create spaces that seamlessly blend timeless elegance with contemporary
                functionality.
              </p>

                <p>
                What started as a passion project in a small Manhattan studio has evolved into an award-winning design
                firm recognized for our innovative approach to luxury interiors. Our journey has been marked by a
                commitment to excellence, attention to detail, and an unwavering dedication to our clients&apos; visions.
              </p>

                <p>
                Over the years, we&apos;ve had the privilege of transforming over 150 spaces, from intimate residential
                projects to large-scale commercial developments. Each project has taught us something new, refined our
                process, and deepened our understanding of how thoughtful design can enhance the human experience.
              </p>

                <p>
                Today, our team of talented designers, architects, and craftspeople continues to push the boundaries of
                interior design, always with the goal of creating spaces that are not just beautiful, but truly
                transformative.
              </p>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-serif font-semibold text-foreground mb-4">By the Numbers</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="text-2xl font-serif font-semibold text-primary">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Excellence</span>
                  <span className="text-2xl font-serif font-semibold text-primary">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Design Awards</span>
                  <span className="text-2xl font-serif font-semibold text-primary">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="text-2xl font-serif font-semibold text-primary">200+</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Recent Recognition</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-foreground">Interior Design Magazine</div>
                  <div className="text-muted-foreground">Best Residential Project 2024</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Architectural Digest</div>
                  <div className="text-muted-foreground">Top 100 Designers 2023</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Dream Homez + Design</div>
                  <div className="text-muted-foreground">Designer of the Year 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
