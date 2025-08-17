export function OfficeMap() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground mb-6">Visit Our Studio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of New York's Design District, our studio showcases the latest in luxury materials,
            furniture, and design inspiration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Office location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                  <p className="text-foreground font-medium">123 Design District</p>
                  <p className="text-muted-foreground text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Studio Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Design District
                    <br />
                    New York, NY 10001
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">Parking</h4>
                  <p className="text-muted-foreground">
                    Complimentary valet parking available for client appointments. Street parking and nearby garages
                    also available.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">Public Transportation</h4>
                  <p className="text-muted-foreground">
                    Conveniently located near multiple subway lines. 2-minute walk from Union Square station.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">What to Expect</h4>
                  <p className="text-muted-foreground">
                    Our 3,000 sq ft showroom features curated furniture collections, material libraries, and design
                    inspiration from our latest projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
