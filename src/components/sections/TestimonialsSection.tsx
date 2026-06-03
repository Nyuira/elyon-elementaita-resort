"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[current];

  return (
    <section className="py-24 bg-pelican">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-subtitle mb-4">Guest Stories</p>
        <h2 className="section-title mb-4">What Our Guests Say</h2>
        <div className="gold-divider" />

        <div className="relative mt-12 min-h-[220px] flex flex-col items-center justify-center">
          {/* Large quote mark */}
          <span className="font-cormorant text-[120px] text-gold/20 leading-none absolute -top-4 left-1/2 -translate-x-1/2 select-none">
            &ldquo;
          </span>

          {/* Quote */}
          <blockquote className="relative z-10 font-cormorant italic text-2xl md:text-3xl text-slate leading-relaxed mb-8 px-4">
            {t.quote}
          </blockquote>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-gold text-gold" />
            ))}
          </div>

          {/* Author */}
          <p className="font-montserrat font-light text-xs tracking-[0.25em] uppercase text-clay">
            {t.author}
          </p>
          <p className="font-montserrat font-light text-[10px] tracking-wider text-slate/40 mt-1">
            {t.country}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-clay/30 flex items-center justify-center text-clay hover:bg-clay hover:text-cream hover:border-clay transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-clay/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-clay/30 flex items-center justify-center text-clay hover:bg-clay hover:text-cream hover:border-clay transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
