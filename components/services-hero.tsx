export function ServicesHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
            Comprehensive Design
            <span className="block text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            From initial concept to final installation, we offer a complete range of interior design services tailored
            to transform your space into something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="bg-muted px-4 py-2 rounded-full">Residential Design</span>
            <span className="bg-muted px-4 py-2 rounded-full">Commercial Spaces</span>
            <span className="bg-muted px-4 py-2 rounded-full">Renovation</span>
            <span className="bg-muted px-4 py-2 rounded-full">Styling</span>
          </div>
        </div>
      </div>
    </section>
  )
}
