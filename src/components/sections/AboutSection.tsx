import Image from "next/image";
import Link from "next/link";
import { RESORT, STATS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 className="section-title mb-6">
              Named for the{" "}
              <em>Most High</em>
            </h2>
            <div className="gold-divider mx-0 mb-8" />
            <p className="font-lato text-slate/80 leading-relaxed mb-6 text-lg">
              {RESORT.description} Here, mornings open to the pink blush of flamingos
              wading in soda-lake shallows. Afternoons unfold across sunlit terraces
              overlooking volcanic escarpments that have witnessed the story of humanity itself.
            </p>
            <p className="font-lato text-slate/70 leading-relaxed mb-8">
              Evenings gather around candlelit tables where the finest Kenyan flavours meet
              the warmth of true Rift Valley hospitality. Whether you come to retreat,
              celebrate, explore, or simply be — Elyon is where Kenya&apos;s soul reveals
              itself most honestly.
            </p>
            <Link href="/about" className="btn-dark">
              Discover Our Story
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
                alt="Flamingos at Lake Elementaita"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream p-6 w-48">
              <p className="font-cormorant italic text-4xl text-gold">2011</p>
              <p className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-cream/60 mt-1">
                UNESCO Heritage Listed
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-clay/20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-10 px-4 text-center ${
                i < STATS.length - 1 ? "border-r border-clay/20" : ""
              }`}
            >
              <p className="font-cormorant text-3xl md:text-4xl text-clay font-light mb-2">
                {stat.value}
              </p>
              <p className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-slate/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
