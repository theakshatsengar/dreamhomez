import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectHero } from "@/components/project-hero"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectDetails } from "@/components/project-details"
import { ProjectTestimonial } from "@/components/project-testimonial"
import { RelatedProjects } from "@/components/related-projects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectHero slug={params.slug} />
      <ProjectGallery slug={params.slug} />
      <ProjectDetails slug={params.slug} />
      <ProjectTestimonial slug={params.slug} />
      <RelatedProjects slug={params.slug} />
      <Footer />
    </main>
  )
}
