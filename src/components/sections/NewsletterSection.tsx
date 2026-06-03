"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to backend newsletter endpoint
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-clay">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-montserrat font-light text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
          Stay Connected
        </p>
        <h2 className="font-cormorant italic text-4xl md:text-5xl text-cream mb-4">
          Be the First to Know
        </h2>
        <div className="w-12 h-px bg-cream/30 mx-auto my-6" />
        <p className="font-montserrat font-light text-cream/70 text-sm tracking-wide mb-10">
          Exclusive offers, seasonal packages, and stories from the Rift Valley —
          delivered quietly to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-cream">
            <CheckCircle size={20} className="text-gold" />
            <p className="font-montserrat font-light text-sm tracking-wide">
              Thank you. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 font-montserrat font-light text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-charcoal text-charcoal hover:text-cream font-montserrat font-light text-xs tracking-widest uppercase px-6 py-4 transition-all duration-300"
            >
              Subscribe <Send size={12} />
            </button>
          </form>
        )}

        <p className="font-montserrat font-light text-[10px] text-cream/30 tracking-wide mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
