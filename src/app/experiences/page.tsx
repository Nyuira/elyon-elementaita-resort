import type { Metadata } from "next";
import Image from "next/image";
import Link  from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { EXPERIENCES, RESORT } from "@/lib/constants";

export const metadata: Metadata = {
  title:       "Experiences",
  description: `Flamingo shore walks, Rift Valley game drives, sundowners and cultural immersion at ${RESORT.name}.`,
};

const details: Record<string, { duration: string; includes: string[]; note?: string }> = {
  "birdwatching": {
    duration: "2–3 hours",
    includes: ["Certified naturalist guide", "Binoculars provided", "Bird checklist booklet", "Morning tea on the shore"],
    note:     "Best at dawn (6:00–9:00 AM) when flamingos are most active.",
  },
  "game-drives": {
    duration: "3–4 hours",
    includes: ["Open 4WD safari vehicle", "Professional driver-guide", "Sundowner drinks", "Wildlife spotter binoculars"],
    note:     "Morning and afternoon departures available.",
  },
  "sundowners": {
    duration: "2 hours",
    includes: ["Return escarpment transfers", "Champagne & canapés", "Sunset photography spot", "Personal host"],
    note:     "Minimum 2 guests. Advance booking required.",
  },
  "cultural": {
    duration: "Half day",
    includes: ["Village visit", "Beadwork demonstration", "Traditional storytelling session", "Community contribution included"],
    note:     "Conducted in partnership with local Maasai community leaders.",
  },
  "gardens": {
    duration: "Half or full day",
    includes: ["Dedicated event coordinator", "Table & chair setup", "Power access", "Catering menu consultation"],
    note:     "Suitable for weddings, corporate functions, birthdays, and private celebrations.",
  },
  "camping": {
    duration: "Overnight",
    includes: ["Fully equipped campsite", "Fire pit & firewood", "Camp chairs & lanterns", "Access to resort facilities"],
    note:     "Restaurant dining and room showers available for campers.",
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="Experiences"
        subtitle="Beyond the Room"
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85"
        alt="Game drive in the Rift Valley near Elyon Elementaita Resort"
        size="lg"
      />

      <section className="py-8 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-cormorant italic text-2xl md:text-3xl text-cream/80 text-center">
            &ldquo;A hotel room is where you sleep. Elyon is where you{" "}
            <span className="text-gold italic">live</span>.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 space-y-0">
          {EXPERIENCES.map((exp, i) => {
            const info = details[exp.id];
            const isReversed = i % 2 === 1;
            return (
              <div key={exp.id} className={`grid lg:grid-cols-2 gap-0 border border-clay/15 ${i > 0 ? "-mt-px" : ""}`}>
                <div className={`relative h-72 lg:h-96 overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={`bg-pelican p-10 lg:p-14 flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}>
                  <span className="text-3xl mb-4 block">{exp.icon}</span>
                  <h2 className="font-cormorant italic text-3xl text-clay mb-3">{exp.title}</h2>
                  <p className="font-lato text-slate/70 leading-relaxed mb-6">{exp.desc}</p>

                  {info && (
                    <>
                      <div className="flex items-center gap-2 text-sm text-slate/60 mb-5">
                        <span className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-gold">Duration:</span>
                        <span className="font-lato">{info.duration}</span>
                      </div>
                      <ul className="space-y-1.5 mb-5">
                        {info.includes.map((inc) => (
                          <li key={inc} className="flex items-center gap-2 text-sm text-slate/70">
                            <span className="text-gold text-xs">✓</span>
                            <span className="font-lato">{inc}</span>
                          </li>
                        ))}
                      </ul>
                      {info.note && (
                        <p className="font-lato text-xs text-slate/50 italic border-l-2 border-gold/40 pl-3 mb-6">
                          {info.note}
                        </p>
                      )}
                    </>
                  )}

                  <Link href="/contact" className="btn-dark self-start">
                    Enquire & Book <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-clay text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-cormorant italic text-4xl text-cream mb-4">
            Build Your Own Itinerary
          </h2>
          <div className="w-12 h-px bg-cream/30 mx-auto my-6" />
          <p className="font-montserrat font-light text-cream/70 text-sm tracking-wide mb-8">
            Our concierge team can combine experiences into a personalised day programme
            for solo travellers, families, couples, or groups.
          </p>
          <Link href="/contact" className="btn-outline">
            Speak to Our Concierge
          </Link>
        </div>
      </section>
    </>
  );
}
