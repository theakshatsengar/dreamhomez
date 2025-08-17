import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesSnapshot } from "@/components/services-snapshot"
import { FeaturedProjects } from "@/components/featured-projects"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <ServicesSnapshot />
      <FeaturedProjects />
      <TestimonialsPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
