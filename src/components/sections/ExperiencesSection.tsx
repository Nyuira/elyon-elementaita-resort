import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function ExperiencesSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-subtitle mb-4">Beyond the Room</p>
            <h2 className="section-title">Experiences</h2>
            <div className="gold-divider mx-0 mt-6" />
          </div>
          <Link
            href="/experiences"
            className="flex items-center gap-2 font-montserrat font-light text-xs tracking-[0.25em] uppercase text-clay hover:text-gold transition-colors duration-300 shrink-0"
          >
            All Experiences <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid — 2 large + 4 small */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERIENCES.map((exp, i) => (
            <Link
              key={exp.id}
              href={`/experiences/${exp.id}`}
              className={`group relative overflow-hidden card-hover ${
                i < 2 ? "md:row-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i < 2 ? "h-80" : "h-56"}`}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-all duration-500" />
              </div>
              <div className="bg-pelican p-6 border border-clay/10 group-hover:border-clay/30 transition-colors duration-300">
                <span className="text-2xl mb-3 block">{exp.icon}</span>
                <h3 className="font-cormorant italic text-xl text-clay mb-2">
                  {exp.title}
                </h3>
                <p className="font-lato text-slate/60 text-sm leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex items-center gap-1 mt-4 font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-gold group-hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight size={10} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
