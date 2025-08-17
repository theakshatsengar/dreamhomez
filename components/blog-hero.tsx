export function BlogHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
            Design Insights &<span className="block text-primary">Inspiration</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Discover the latest design trends, get behind-the-scenes glimpses of our projects, and learn expert tips to
            elevate your own space. Our insights are crafted to inspire and inform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">Weekly Updates</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">Expert Tips</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">Project Stories</span>
          </div>
        </div>
      </div>
    </section>
  )
}
