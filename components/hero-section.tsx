"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import React from "react"

export function HeroSection() {
  // Scroll-based video control
  React.useEffect(() => {
    const video = document.getElementById("hero-bg-video") as HTMLVideoElement | null
    if (!video) return

    // Keep the page locked until the video has been driven to the end
    document.body.style.overflow = "hidden"

    let rafId: number | null = null
    let running = false
    let videoPlayed = false

  // targetProgress is 0..1 based on accumulated wheel/touch input
  let targetProgress = 0
  // displayedTime is the smooth, interpolated time we write to the video
  let displayedTime = 0
  // remember last input delta so we can nudge native scroll after unlocking
  let lastInputDelta = 0

    const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v))

    // Amount of wheel (px) required to move progress from 0 -> 1; tuned for UX
    let scrollRange = Math.max(window.innerHeight * 1.2, 600)

    const onResize = () => {
      scrollRange = Math.max(window.innerHeight * 1.2, 600)
    }

    const startLoop = () => {
      if (running) return
      running = true
      const loop = () => {
        // only run when video metadata is available
        if (video.readyState >= 2 && video.duration) {
          const targetTime = targetProgress * video.duration
          // ease displayedTime toward targetTime
          const ease = 0.12
          displayedTime += (targetTime - displayedTime) * ease
          // write to video
          try {
            video.currentTime = displayedTime
          } catch {
            // ignore timing errors
          }

          // Unlock slightly early so the page begins scrolling before video fully ends (0.5s pre-roll)
          if (
            !videoPlayed &&
            (targetProgress >= 1 || displayedTime >= Math.max(0, video.duration - 0.5))
          ) {
            videoPlayed = true
            document.body.style.overflow = ""
            // Nudge native page scroll so the user's continued scroll moves the page naturally
            try {
              const nudge = lastInputDelta || 1
              window.scrollBy({ top: nudge, behavior: "auto" })
            } catch {
              /* ignore */
            }
          }
        }

        rafId = requestAnimationFrame(loop)
      }

      rafId = requestAnimationFrame(loop)
    }

    const stopLoop = () => {
      if (rafId != null) cancelAnimationFrame(rafId)
      rafId = null
      running = false
    }

    // Wheel handler — accumulate delta and prevent page scroll while locking
    const handleWheel = (e: WheelEvent) => {
      if (videoPlayed) return
      e.preventDefault()
      lastInputDelta = e.deltaY
      const delta = e.deltaY / scrollRange
      targetProgress = clamp(targetProgress + delta)
      startLoop()
    }

    // Touch support (mobile) — translate vertical swipe into progress
    let lastTouchY: number | null = null
    const handleTouchStart = (e: TouchEvent) => {
      if (videoPlayed) return
      lastTouchY = e.touches[0]?.clientY ?? null
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (videoPlayed || lastTouchY == null) return
      const y = e.touches[0]?.clientY ?? 0
      const deltaPx = lastTouchY - y
      lastInputDelta = deltaPx
      const delta = deltaPx / scrollRange
      targetProgress = clamp(targetProgress + delta)
      lastTouchY = y
      startLoop()
      e.preventDefault()
    }
    const handleTouchEnd = () => {
      lastTouchY = null
    }

    // Keyboard fallback: PageDown / ArrowDown
    const handleKey = (e: KeyboardEvent) => {
      if (videoPlayed) return
      if (e.key === "PageDown" || e.key === "ArrowDown") {
        lastInputDelta = 120
        targetProgress = clamp(targetProgress + 0.15)
        startLoop()
        e.preventDefault()
      } else if (e.key === "PageUp" || e.key === "ArrowUp") {
        lastInputDelta = -120
        targetProgress = clamp(targetProgress - 0.15)
        startLoop()
        e.preventDefault()
      }
    }

    // Add listeners
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd)
    window.addEventListener("keydown", handleKey)
    window.addEventListener("resize", onResize)

    // Clean up
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("keydown", handleKey)
      window.removeEventListener("resize", onResize)
      stopLoop()
      document.body.style.overflow = ""
    }
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          id="hero-bg-video"
          src="/video.mp4"
          className="w-full h-full object-cover pointer-events-none"
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="hero-text text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
          Transforming Spaces with
          <span className="block text-accent">Timeless Elegance</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Award-winning interior design studio creating sophisticated, personalized spaces that reflect your unique
          style and elevate your everyday living.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg backdrop-blur-sm"
          >
            <Play className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
