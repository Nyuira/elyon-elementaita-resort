import Image from "next/image";

interface PageHeroProps {
  title:     string;
  subtitle?: string;
  image:     string;
  alt:       string;
  size?:     "sm" | "md" | "lg";
}

export default function PageHero({ title, subtitle, image, alt, size = "md" }: PageHeroProps) {
  const heights = { sm: "h-64 md:h-80", md: "h-80 md:h-[420px]", lg: "h-[520px] md:h-[620px]" };

  return (
    <section className={`relative flex items-end ${heights[size]} overflow-hidden`}>
      <Image src={image} alt={alt} fill className="object-cover object-center" sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
        {subtitle && (
          <p className="font-montserrat font-light text-[11px] tracking-[0.35em] uppercase text-gold mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="font-cormorant italic text-5xl md:text-7xl text-cream leading-none">
          {title}
        </h1>
      </div>
    </section>
  );
}
