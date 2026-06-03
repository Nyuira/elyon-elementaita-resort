import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { RESORT } from "@/lib/constants";

const footerLinks = {
  Explore: [
    { label: "About Elyon",    href: "/about" },
    { label: "The Lake",       href: "/about#lake" },
    { label: "Experiences",    href: "/experiences" },
    { label: "Gallery",        href: "/gallery" },
  ],
  Stay: [
    { label: "All Rooms",      href: "/stay" },
    { label: "Packages",       href: "/offers" },
    { label: "Weddings",       href: "/events/weddings" },
    { label: "Camping",        href: "/events/camping" },
  ],
  Dine: [
    { label: "The Rift Table", href: "/dine/main-restaurant" },
    { label: "Flamingo Poolside", href: "/dine/poolside" },
    { label: "Coffee Co.",     href: "/dine/coffee-station" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use",   href: "/terms" },
    { label: "Cookie Policy",  href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      {/* Top banner */}
      <div className="border-b border-cream/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-cormorant italic text-3xl text-cream">
              Begin your Elyon experience
            </p>
            <p className="font-montserrat font-light text-xs tracking-widest uppercase text-gold mt-1">
              Reservations open year-round
            </p>
          </div>
          <Link href="/book" className="btn-outline shrink-0">
            Reserve a Room
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Brand column */}
        <div className="col-span-2">
          <p className="font-cormorant italic text-2xl text-cream mb-1">Elyon</p>
          <p className="font-montserrat font-light text-[9px] tracking-[0.35em] uppercase text-cream/40 mb-6">
            Elementaita Resort
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-gold shrink-0" />
              <span className="font-light leading-relaxed">{RESORT.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold shrink-0" />
              <a href={`tel:${RESORT.phone}`} className="hover:text-gold transition-colors">
                {RESORT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gold shrink-0" />
              <a href={`mailto:${RESORT.email}`} className="hover:text-gold transition-colors text-xs">
                {RESORT.email}
              </a>
            </div>
          </div>
          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="font-montserrat font-light text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              {group}
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-light text-sm hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/30 font-montserrat font-light">
          <p>© {new Date().getFullYear()} {RESORT.name}. All rights reserved.</p>
          <p className="tracking-wider">{RESORT.heritage}</p>
        </div>
      </div>
    </footer>
  );
}
