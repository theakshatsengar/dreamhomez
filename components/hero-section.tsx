"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import React from "react"

export function HeroSection() {
  // Scroll-based video control
  React.useEffect(() => {
    const video = document.getElementById('hero-bg-video') as HTMLVideoElement | null;
    if (!video) return;
    let videoPlayed = false;
    let scrollProgress = 0;
    let scrollDelta = 0;
    let animating = false;

    // Lock scroll initially
    document.body.style.overflow = 'hidden';

    // Wait for video to be ready
    const ensureReady = () => {
      return new Promise<void>((resolve) => {
        if (video.readyState >= 2) {
          resolve();
        } else {
          video.addEventListener('loadeddata', () => resolve(), { once: true });
        }
      });
    };

    const maxScroll = window.innerHeight * 1.2; // Amount of scroll needed to play full video

    const animateVideo = async () => {
      await ensureReady();
      if (videoPlayed || !video.duration) return;
      // Process scrollDelta in small increments for smoothness
      if (Math.abs(scrollDelta) > 0.1) {
        scrollProgress += scrollDelta;
        scrollDelta = 0;
        // Clamp scrollProgress
        scrollProgress = Math.max(0, Math.min(maxScroll, scrollProgress));
        // Map scrollProgress to video duration
        const progressRatio = scrollProgress / maxScroll;
        const newTime = progressRatio * video.duration;
        video.currentTime = newTime;
        // Unlock scroll if video is fully played
        if (progressRatio >= 1) {
          videoPlayed = true;
          document.body.style.overflow = '';
        }
      }
      animating = false;
    };

    const handleScroll = async (e: WheelEvent) => {
      if (!videoPlayed && video.duration) {
        e.preventDefault();
        scrollDelta += e.deltaY;
        if (!animating) {
          animating = true;
          requestAnimationFrame(animateVideo);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          id="hero-bg-video"
          src="/video.mp4"
          className="w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
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
