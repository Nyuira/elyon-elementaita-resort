"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { RESORT } from "@/lib/constants";

// Stock hero images — replace with real resort photos when available
const heroSlides = [
  {
    src:     "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=90",
    alt:     "Lake Elementaita at sunrise with flamingos",
    caption: "Where the Rift Valley Breathes",
  },
  {
    src:     "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=90",
    alt:     "Elyon Elementaita Resort pool overlooking the lake",
    caption: "Elevated Above the Ordinary",
  },
  {
    src:     "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=90",
    alt:     "Rift Valley wildlife at Elementaita",
    caption: "Wild. Rare. Yours.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with smooth crossfade */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="overlay-gradient" />
      <div className="absolute inset-0 bg-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Heritage badge */}
        <p className="section-subtitle text-gold/90 mb-6 animate-fade-in">
          UNESCO World Heritage · Lake Elementaita, Kenya
        </p>

        {/* Main headline */}
        <h1 className="font-cormorant italic text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-6 animate-fade-up">
          {RESORT.tagline}
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-12 bg-gold/60" />
        </div>

        {/* Subtext */}
        <p className="font-montserrat font-light text-cream/80 text-sm md:text-base tracking-wide max-w-xl mx-auto mb-10 animate-fade-up animate-delay-200">
          52 rooms perched above East Africa's most storied lake.
          Flamingos, escarpments, and a table worthy of the view.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
          <Link href="/book" className="btn-primary">
            Reserve Your Stay
          </Link>
          <Link href="/experiences" className="btn-outline">
            Discover Experiences
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-cream/40 hover:bg-cream/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-gold transition-colors animate-bounce"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
