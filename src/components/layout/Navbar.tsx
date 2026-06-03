"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { RESORT } from "@/lib/constants";

const navLinks = [
  { label: "Stay",        href: "/stay" },
  { label: "Dine",        href: "/dine" },
  { label: "Experiences", href: "/experiences" },
  { label: "Events",      href: "/events" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-cormorant italic text-2xl text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
            Elyon
          </span>
          <span className="font-montserrat font-light text-[9px] tracking-[0.35em] uppercase text-cream/60 mt-0.5">
            Elementaita Resort
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${RESORT.phone}`}
            className="flex items-center gap-1.5 text-cream/60 hover:text-gold transition-colors duration-300"
          >
            <Phone size={13} />
            <span className="font-montserrat font-light text-xs tracking-wider">{RESORT.phone}</span>
          </a>
          <Link href="/book" className="btn-primary text-xs py-2.5 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-cream/10">
          <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-cream/10">
              <Link href="/book" className="btn-primary w-full justify-center">
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
