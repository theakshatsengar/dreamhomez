import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectHero } from "@/components/project-hero"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectDetails } from "@/components/project-details"
import { ProjectTestimonial } from "@/components/project-testimonial"
import { RelatedProjects } from "@/components/related-projects"

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
  <ProjectHero />
  <ProjectGallery />
  <ProjectDetails />
  <ProjectTestimonial />
  <RelatedProjects />
      <Footer />
    </main>
  )
}
