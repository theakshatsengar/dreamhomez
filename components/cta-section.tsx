import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed">
          Let&apos;s discuss your vision and create a space that truly reflects your style. Schedule a complimentary
          consultation to get started.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-6 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>hello@luxeinteriors.com</span>
            </div>
          </div>
        </div>

        <p className="text-sm opacity-75">Free consultation • No obligation • Response within 24 hours</p>
      </div>
    </section>
  )
}
