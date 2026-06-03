import type { Metadata } from "next";
import Image from "next/image";
import Link  from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero   from "@/components/ui/PageHero";
import BookingBar from "@/components/sections/BookingBar";
import { ROOM_TYPES, RESORT } from "@/lib/constants";

export const metadata: Metadata = {
  title:       "Rooms & Suites",
  description: `Discover ${RESORT.rooms} beautifully appointed rooms and suites at ${RESORT.name}, perched above UNESCO-listed Lake Elementaita.`,
};

export default function StayPage() {
  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="Accommodations"
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=85"
        alt="Elyon Elementaita Resort room with lake view"
        size="lg"
      />

      <BookingBar />

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">Your Home Above the Lake</p>
            <p className="font-lato text-slate/70 max-w-2xl mx-auto leading-relaxed">
              Each of our {RESORT.rooms} rooms is a carefully composed retreat — Afro-chic interiors,
              natural textures, and views that remind you exactly where you are in the world.
            </p>
          </div>

          {/* Room type grid */}
          <div className="space-y-0">
            {ROOM_TYPES.map((room, i) => (
              <div
                key={room.id}
                className={`grid lg:grid-cols-2 gap-0 border border-clay/15 ${i > 0 ? "-mt-px" : ""}`}
              >
                {/* Image — alternates left/right */}
                <div className={`relative h-72 lg:h-auto min-h-72 overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1">
                    <span className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-gold">
                      {room.capacity} · {room.size}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={`bg-pelican p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="section-subtitle mb-3">
                    {["Standard", "Deluxe", "Signature", "Family"][i]}
                  </p>
                  <h2 className="font-cormorant italic text-3xl text-clay mb-2">{room.name}</h2>
                  <p className="font-playfair text-gold text-lg mb-5">{room.rate}</p>
                  <p className="font-lato text-slate/70 leading-relaxed mb-7">{room.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {room.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-slate/70">
                        <Check size={12} className="text-gold shrink-0" />
                        <span className="font-light">{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/stay/${room.id}`} className="btn-dark flex-1 justify-center text-center">
                      Room Details
                    </Link>
                    <Link href="/book" className="btn-primary flex-1 justify-center text-center">
                      Book <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Policies strip */}
          <div className="mt-16 grid md:grid-cols-3 gap-0 border border-clay/15">
            {[
              { title: "Check-in / Check-out", body: "Check-in from 14:00. Check-out by 11:00. Early check-in and late check-out subject to availability." },
              { title: "Children & Extra Beds",  body: "Children under 5 stay free. Extra beds available for KES 2,500/night. Maximum one extra bed per room." },
              { title: "Cancellation Policy",    body: "Free cancellation up to 48 hours before arrival. Late cancellations charged one night's rate." },
            ].map((p, i) => (
              <div key={i} className={`p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-clay/15" : ""}`}>
                <h3 className="font-montserrat font-light text-xs tracking-[0.2em] uppercase text-gold mb-3">{p.title}</h3>
                <p className="font-lato text-slate/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
