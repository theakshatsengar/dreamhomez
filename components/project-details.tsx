import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectDetails() {
  // In a real app, this would fetch project details based on slug
  const projectDetails = {
    concept:
      "This Manhattan penthouse transformation focused on creating a sophisticated urban sanctuary that maximizes natural light and city views while maintaining intimate, comfortable living spaces. The design philosophy centered on timeless elegance with contemporary functionality.",
    process:
      "The project began with a complete gut renovation, allowing us to reconfigure the layout for optimal flow and light. We collaborated closely with structural engineers to create the open-concept living area while maintaining the building's architectural integrity. Custom millwork and built-in storage solutions were designed to maximize space efficiency.",
    materials: [
      "Carrara marble countertops and backsplash",
      "Wide-plank European oak flooring",
      "Custom brass fixtures and hardware",
      "Italian leather upholstery",
      "Hand-blown glass lighting elements",
      "Natural stone accent walls",
    ],
    challenges:
      "The primary challenge was working within the constraints of a pre-war building while achieving a modern aesthetic. We had to carefully navigate structural limitations and building regulations while creating the open, airy feel the clients desired.",
    outcome:
      "The completed space seamlessly blends luxury with livability, featuring custom furniture pieces, curated art collections, and sophisticated lighting design. The result is a timeless interior that will age gracefully while providing the ultimate urban living experience.",
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Design Concept</h3>
                <p className="text-muted-foreground leading-relaxed">{projectDetails.concept}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Design Process</h3>
                <p className="text-muted-foreground leading-relaxed">{projectDetails.process}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Challenges & Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">{projectDetails.challenges}</p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Materials & Finishes</h3>
                <ul className="space-y-2">
                  {projectDetails.materials.map((material, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Project Outcome</h3>
                <p className="text-muted-foreground leading-relaxed">{projectDetails.outcome}</p>
              </CardContent>
            </Card>

            {/* Before/After Section */}
            <Card className="border-0 shadow-sm bg-card">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Before & After</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Before renovation"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">Before</p>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="After renovation"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">After</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
