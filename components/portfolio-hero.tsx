export function PortfolioHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
            Our Design
            <span className="block text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Explore our collection of thoughtfully designed spaces that showcase our commitment to creating
            extraordinary environments that enhance daily living.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">150+ Projects Completed</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">25+ Design Awards</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">12 Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
