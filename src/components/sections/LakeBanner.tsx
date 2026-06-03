import Image from "next/image";
import Link from "next/link";
import { STATS } from "@/lib/constants";

export default function LakeBanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
        alt="Lake Elementaita flamingos"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="font-montserrat font-light text-[11px] tracking-[0.4em] uppercase text-gold mb-6">
          UNESCO World Heritage · 2011
        </p>
        <h2 className="font-cormorant italic text-5xl md:text-7xl text-cream leading-tight mb-6">
          Open Skies.<br />
          <span className="text-blush">Ten Thousand Flamingos.</span><br />
          One Address.
        </h2>
        <div className="w-16 h-px bg-gold mx-auto my-8" />
        <p className="font-montserrat font-light text-cream/70 text-sm tracking-wide max-w-2xl mx-auto mb-12">
          Lake Elementaita is one of the last pristine soda lakes in East Africa —
          a UNESCO-listed ecosystem where greater and lesser flamingos mass in their thousands,
          great white pelicans breed undisturbed, and the ancient Rift Valley floor holds
          the continent's geological memory. Elyon sits at its edge.
        </p>

        {/* Stat strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 border border-cream/20 max-w-4xl mx-auto mb-12">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`py-6 px-3 text-center ${
                i < STATS.length - 1 ? "border-r border-cream/20" : ""
              }`}
            >
              <p className="font-cormorant text-2xl text-gold mb-1">{stat.value}</p>
              <p className="font-montserrat font-light text-[9px] tracking-[0.2em] uppercase text-cream/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Link href="/about#lake" className="btn-outline">
          The Story of the Lake
        </Link>
      </div>
    </section>
  );
}
