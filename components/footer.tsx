import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-semibold mb-4">Dream Homez</h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Award-winning interior design studio creating sophisticated, personalized spaces that reflect your unique
              style and elevate your everyday living.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Inspired</h4>
              <div className="flex space-x-2 max-w-sm">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-background/80">
              <div>
                <p className="font-medium text-background">Phone</p>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-background">Email</p>
                <p>hello@luxeinteriors.com</p>
              </div>
              <div>
                <p className="font-medium text-background">Address</p>
                <p>
                  123 Design District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 Dream Homez. All rights reserved.</p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-background/60 hover:text-background transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors duration-200">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
