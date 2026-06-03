import type { Metadata } from "next";
import Image from "next/image";
import Link  from "next/link";
import PageHero from "@/components/ui/PageHero";
import { RESORT, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title:       "About Us",
  description: `The story of ${RESORT.name} — a sanctuary where the ancient Rift Valley meets curated luxury on the shores of UNESCO-listed Lake Elementaita.`,
};

const values = [
  { title: "Kenyan at Heart",    icon: "🇰🇪", body: "We are proudly Kenyan — in our food, our art, our staff, and our soul. Every detail at Elyon celebrates the culture and landscape of the Rift Valley." },
  { title: "Conservation First", icon: "🌿", body: "Lake Elementaita is a UNESCO World Heritage Site. We operate as stewards of this ecosystem — responsible sourcing, low-impact practices, community partnership." },
  { title: "Genuine Warmth",     icon: "🤝", body: "Kenyan hospitality is not a service standard — it is a way of being. Our team are neighbours to this land, and they welcome every guest accordingly." },
  { title: "Elevated Detail",    icon: "✦",  body: "From the thread count of your linen to the origin of your morning coffee — we believe luxury lives in the details that most people never notice until they're missing." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="About Elyon"
        image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=85"
        alt="Lake Elementaita at sunrise with flamingos"
        size="lg"
      />

      {/* The name */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-subtitle mb-4">The Name</p>
            <h2 className="section-title mb-6">
              <em>Elyon</em> — The Most High
            </h2>
            <div className="gold-divider mx-0 mb-8" />
            <p className="font-lato text-slate/80 leading-relaxed mb-6 text-lg">
              Named from the ancient Hebrew <em>El Elyon</em> — meaning the Most High — our resort
              takes its name not from pride, but from aspiration. From position.
            </p>
            <p className="font-lato text-slate/70 leading-relaxed mb-6">
              Situated 2,000 metres above sea level on the rim of the Great Rift Valley,
              Elyon Elementaita Resort literally rises above the ordinary. The views, the air,
              the stillness — they all carry a quality that reminds you that some places on this
              earth exist at a different altitude, in every sense of the word.
            </p>
            <p className="font-lato text-slate/70 leading-relaxed">
              We built Elyon to be that kind of place — not just in height, but in experience,
              in hospitality, in the way a morning here begins and an evening here ends.
            </p>
          </div>
          <div className="relative h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
              alt="Elyon Elementaita Resort suite"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-6 bg-charcoal p-6 w-52">
              <p className="font-cormorant italic text-gold text-3xl">&ldquo;Most High&rdquo;</p>
              <p className="font-montserrat font-light text-[9px] tracking-[0.3em] uppercase text-cream/50 mt-1">
                Hebrew · אֵל עֶלְיוֹן
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The lake — UNESCO section */}
      <section id="lake" className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
              alt="Flamingos at Lake Elementaita"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-montserrat font-light text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              UNESCO World Heritage · 2011
            </p>
            <h2 className="font-cormorant italic text-5xl text-cream mb-6">
              The Lake
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-lato text-cream/70 leading-relaxed mb-5">
              Lake Elementaita is one of the most ecologically significant lakes in East Africa —
              a shallow soda lake in the heart of the Kenyan Rift Valley, inscribed as a UNESCO
              World Heritage Site in 2011 as part of the Kenya Lakes System.
            </p>
            <p className="font-lato text-cream/70 leading-relaxed mb-5">
              It is home to internationally important populations of greater and lesser flamingos,
              great white pelicans, African spoonbills, and pied avocets. Over 400 bird species
              have been recorded here — making it one of Kenya's premier birding destinations.
            </p>
            <p className="font-lato text-cream/70 leading-relaxed">
              On the surrounding escarpment, Rothschild's giraffe, plains zebra, eland, and gazelle
              move freely across the landscape. Elyon sits at the edge of this — a front-row seat
              to one of Africa's most undisturbed wild landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">What We Stand For</p>
            <h2 className="section-title">Our Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-clay/15">
            {values.map((v, i) => (
              <div key={v.title} className={`p-10 ${i < 3 ? "border-b lg:border-b-0 lg:border-r border-clay/15" : ""}`}>
                <span className="text-3xl block mb-5">{v.icon}</span>
                <h3 className="font-cormorant italic text-xl text-clay mb-3">{v.title}</h3>
                <p className="font-lato text-slate/70 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-clay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-cream/20">
            {STATS.map((stat, i) => (
              <div key={i} className={`py-10 px-4 text-center ${i < STATS.length - 1 ? "border-r border-cream/20" : ""}`}>
                <p className="font-cormorant text-3xl text-cream mb-1">{stat.value}</p>
                <p className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-cream/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-pelican text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="section-title mb-4">Come and See for Yourself</h2>
          <div className="gold-divider" />
          <p className="font-lato text-slate/70 leading-relaxed mt-6 mb-8">
            Words and photographs only go so far. The real Elyon is in the sound of
            ten thousand flamingos taking flight at dawn. Come find it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/stay"    className="btn-dark">Browse Rooms</Link>
            <Link href="/contact" className="btn-primary">Plan Your Visit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
