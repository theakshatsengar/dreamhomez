"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup here
    console.log("Newsletter signup:", email)
    setIsSubscribed(true)
  }

  if (isSubscribed) {
    return (
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">Thank You for Subscribing!</h2>
          <p className="text-lg opacity-90">
            You'll receive our latest design insights and inspiration directly in your inbox.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-16 w-16 mx-auto mb-6" />
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">Stay Inspired</h2>
        <p className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed">
          Get the latest design trends, project showcases, and expert tips delivered to your inbox. Join our community
          of design enthusiasts.
        </p>

        <Card className="max-w-md mx-auto border-0 shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                Subscribe to Newsletter
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm opacity-75">
          <span>Weekly design insights</span>
          <span>•</span>
          <span>Exclusive project previews</span>
          <span>•</span>
          <span>Expert tips & trends</span>
        </div>
      </div>
    </section>
  )
}
