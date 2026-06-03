import type { Metadata } from "next";
import Image from "next/image";
import Link  from "next/link";
import { Clock, ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { OUTLETS, RESORT } from "@/lib/constants";

export const metadata: Metadata = {
  title:       "Dining",
  description: `Three distinct dining venues at ${RESORT.name} — from the elegant Rift Table to poolside bites and specialty Kenyan coffee.`,
};

const menuHighlights = [
  { outlet: "main-restaurant", items: ["Nyama Choma Platter", "Grilled Nile Tilapia", "Kenyan Lamb Stew", "Ugali & Sukuma Wiki", "Matoke with Groundnut Sauce", "Swahili Prawn Curry"] },
  { outlet: "poolside",        items: ["Club Sandwich", "Avocado Toast", "Tropical Fruit Platter", "Elyon Signature Cocktail", "Cold Tusker on Tap", "Chicken Wrap"] },
  { outlet: "coffee-station",  items: ["Single-Origin Kenyan Pour Over", "Masala Chai", "Mandazi & Honey", "Croissant au Beurre", "Banana Bread Slice", "Fresh Tropical Juice"] },
];

export default function DinePage() {
  return (
    <>
      <PageHero
        title="Dining at Elyon"
        subtitle="Three Moods. One Table."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
        alt="Dining at Elyon Elementaita Resort"
        size="lg"
      />

      {/* Intro */}
      <section className="py-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-subtitle mb-4">Farm to Fork</p>
          <h2 className="section-title mb-4">Kenya on a Plate</h2>
          <div className="gold-divider" />
          <p className="font-lato text-slate/70 leading-relaxed mt-6">
            Our kitchens celebrate Kenyan produce — fresh fish from the lake,
            locally farmed vegetables, Rift Valley herbs and single-origin coffee
            from the highlands. Every plate tells a story of where we are.
          </p>
        </div>
      </section>

      {/* Outlets */}
      {OUTLETS.map((outlet, i) => {
        const highlights = menuHighlights.find((m) => m.outlet === outlet.id)?.items ?? [];
        const isReversed = i % 2 === 1;

        return (
          <section key={outlet.id} className={`py-0 ${i % 2 === 0 ? "bg-pelican" : "bg-charcoal"}`}>
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "" : ""}`}>
                {/* Image */}
                <div className={`relative h-80 lg:h-[520px] overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center px-10 py-16 lg:px-16 ${isReversed ? "lg:order-1" : ""}`}>
                  <p className="font-montserrat font-light text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                    {["Main Restaurant", "Poolside Bar & Grill", "Specialty Coffee"][i]}
                  </p>
                  <h2 className={`font-cormorant italic text-4xl mb-4 ${i % 2 === 1 ? "text-cream" : "text-clay"}`}>
                    {outlet.name}
                  </h2>
                  <p className={`font-lato leading-relaxed mb-5 ${i % 2 === 1 ? "text-cream/70" : "text-slate/70"}`}>
                    {outlet.description}
                  </p>
                  <div className={`flex items-start gap-2 text-sm mb-8 ${i % 2 === 1 ? "text-cream/50" : "text-slate/50"}`}>
                    <Clock size={13} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-montserrat font-light">{outlet.hours}</span>
                  </div>

                  {/* Menu highlights */}
                  <div className={`border-t pt-6 ${i % 2 === 1 ? "border-cream/10" : "border-clay/15"}`}>
                    <p className="font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                      Menu Highlights
                    </p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                      {highlights.map((item) => (
                        <p key={item} className={`font-lato text-sm ${i % 2 === 1 ? "text-cream/60" : "text-slate/60"}`}>
                          · {item}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={`/dine/${outlet.id}`}
                      className={`flex items-center gap-2 font-montserrat font-light text-[10px] tracking-[0.25em] uppercase ${
                        i % 2 === 1 ? "text-gold hover:text-cream" : "text-clay hover:text-gold"
                      } transition-colors duration-300`}
                    >
                      Full Menu <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Private dining CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-subtitle mb-4">Special Occasions</p>
          <h2 className="section-title mb-4">Private Dining & Events</h2>
          <div className="gold-divider" />
          <p className="font-lato text-slate/70 leading-relaxed mt-6 mb-8">
            From an intimate anniversary dinner on the terrace to a corporate luncheon
            for 80 guests in our gardens — our events team crafts every detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/events" className="btn-dark">Plan a Private Event</Link>
            <Link href="/contact" className="btn-primary">
              <MapPin size={13} /> Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
