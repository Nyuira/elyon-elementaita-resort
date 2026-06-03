"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ROOM_TYPES } from "@/lib/constants";

export default function RoomsSection() {
  const [active, setActive] = useState(0);
  const room = ROOM_TYPES[active];

  return (
    <section className="py-24 bg-pelican">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Accommodations</p>
          <h2 className="section-title">Rooms & Suites</h2>
          <div className="gold-divider" />
          <p className="font-montserrat font-light text-slate/60 text-sm tracking-wide max-w-xl mx-auto">
            52 thoughtfully appointed rooms — each designed to dissolve the boundary
            between interior comfort and the wilderness beyond your window.
          </p>
        </div>

        {/* Room selector */}
        <div className="grid lg:grid-cols-2 gap-0 border border-clay/15">
          {/* Image panel */}
          <div className="relative h-[420px] lg:h-auto min-h-[420px] overflow-hidden">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-montserrat font-light text-xs tracking-widest uppercase text-gold">
                {room.capacity} · {room.size}
              </p>
            </div>
          </div>

          {/* Details panel */}
          <div className="bg-cream p-10 lg:p-14 flex flex-col">
            {/* Tab selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {ROOM_TYPES.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setActive(i)}
                  className={`font-montserrat font-light text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                    i === active
                      ? "bg-clay border-clay text-cream"
                      : "border-clay/30 text-slate/60 hover:border-clay hover:text-clay"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>

            <h3 className="font-cormorant italic text-3xl text-clay mb-3">
              {room.name}
            </h3>
            <p className="font-playfair text-gold text-lg mb-4">{room.rate}</p>
            <p className="font-lato text-slate/70 leading-relaxed mb-6">
              {room.description}
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {room.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-slate/70">
                  <Check size={12} className="text-gold shrink-0" />
                  <span className="font-light">{a}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link href={`/stay/${room.id}`} className="btn-dark flex-1 justify-center">
                View Room
              </Link>
              <Link href="/book" className="btn-primary flex-1 justify-center">
                Book Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/stay"
            className="font-montserrat font-light text-xs tracking-[0.25em] uppercase text-clay hover:text-gold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View All Room Types <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
