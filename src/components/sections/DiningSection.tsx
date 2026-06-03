import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { OUTLETS } from "@/lib/constants";

export default function DiningSection() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-montserrat font-light text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            Dining
          </p>
          <h2 className="font-cormorant italic text-5xl md:text-6xl text-cream">
            Three Moods. One Table.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="font-montserrat font-light text-cream/50 text-sm tracking-wide max-w-xl mx-auto">
            From a candlelit dinner at The Rift Table to morning coffee on the
            lake shore — every meal at Elyon is an event.
          </p>
        </div>

        {/* Outlet cards */}
        <div className="grid md:grid-cols-3 gap-0 border border-cream/10">
          {OUTLETS.map((outlet, i) => (
            <div
              key={outlet.id}
              className={`relative group overflow-hidden ${
                i < OUTLETS.length - 1 ? "border-b md:border-b-0 md:border-r border-cream/10" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={outlet.image}
                  alt={outlet.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="font-montserrat font-light text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                  {i === 0 ? "Main Restaurant" : i === 1 ? "Poolside" : "Coffee Bar"}
                </p>
                <h3 className="font-cormorant italic text-2xl text-cream mb-3">
                  {outlet.name}
                </h3>
                <p className="font-lato text-cream/60 text-sm leading-relaxed mb-5">
                  {outlet.description}
                </p>
                <div className="flex items-start gap-2 text-cream/40 text-xs font-montserrat font-light mb-6">
                  <Clock size={12} className="mt-0.5 text-gold shrink-0" />
                  <span>{outlet.hours}</span>
                </div>
                <Link
                  href={`/dine/${outlet.id}`}
                  className="flex items-center gap-2 font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-gold hover:text-cream transition-colors duration-300"
                >
                  View Menu <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
