import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { OfficeMap } from "@/components/office-map"
import { ConsultationBooking } from "@/components/consultation-booking"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ConsultationBooking />
      <OfficeMap />
      <Footer />
    </main>
  )
}
