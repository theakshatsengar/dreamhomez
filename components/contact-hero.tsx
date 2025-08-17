export function ContactHero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
            Let's Create Something
            <span className="block text-primary">Beautiful Together</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision
            to life. Get in touch to schedule your complimentary consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">Free Consultation</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">24-Hour Response</span>
            <span className="bg-muted px-4 py-2 rounded-full text-muted-foreground">No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
