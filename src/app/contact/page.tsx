"use client";
import { useState }            from "react";
import Image                   from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { RESORT } from "@/lib/constants";

const inquiryTypes = [
  "Room Reservation",
  "Restaurant Reservation",
  "Wedding / Event",
  "Corporate / Group Booking",
  "Camping / Gardens",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", type: inquiryTypes[0], checkIn: "", checkOut: "", guests: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // TODO: POST to /api/contact backend endpoint
    await new Promise((r) => setTimeout(r, 1200)); // simulated delay
    setSubmitted(true);
    setSending(false);
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Reservations & Enquiries"
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85"
        alt="Elyon Elementaita Resort reception"
        size="md"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact information */}
          <div>
            <p className="section-subtitle mb-4">Find Us</p>
            <h2 className="section-title mb-6">We&apos;re Here for You</h2>
            <div className="gold-divider mx-0 mb-8" />
            <p className="font-lato text-slate/70 leading-relaxed mb-10">
              Whether you&apos;re planning a stay, organising a celebration, or simply curious —
              our team is available seven days a week to help you plan the perfect Elyon experience.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Address",            value: RESORT.address },
                { icon: Phone,  label: "Reservations",       value: RESORT.phone },
                { icon: Mail,   label: "Email",              value: RESORT.email },
                { icon: Clock,  label: "Reception Hours",    value: "24 hours, 7 days a week" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-clay/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-clay" />
                  </div>
                  <div>
                    <p className="font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-gold mb-0.5">{label}</p>
                    <p className="font-lato text-slate/80 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="relative h-56 overflow-hidden border border-clay/15">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_MAPS_API_KEY&q=${RESORT.coordinates.lat},${RESORT.coordinates.lng}&zoom=14`}
                className="w-full h-full border-0"
                loading="lazy"
                title="Elyon Elementaita Resort location"
              />
              {/* Fallback static map image while API key is not set */}
              <div className="absolute inset-0 flex items-center justify-center bg-cream/95 border border-clay/15">
                <div className="text-center">
                  <MapPin size={28} className="text-clay mx-auto mb-2" />
                  <p className="font-montserrat font-light text-xs tracking-[0.2em] uppercase text-slate/60 mb-3">
                    G7PP+QG3, Mbaruk, Kanyawa
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${RESORT.coordinates.lat},${RESORT.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-clay hover:text-gold transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            <p className="section-subtitle mb-4">Send a Message</p>
            <h2 className="section-title mb-6">Make an Enquiry</h2>
            <div className="gold-divider mx-0 mb-8" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-gold mb-4" />
                <h3 className="font-cormorant italic text-3xl text-clay mb-2">
                  Thank you, {form.name.split(" ")[0]}.
                </h3>
                <p className="font-lato text-slate/70 leading-relaxed max-w-sm">
                  We&apos;ve received your enquiry and will respond within 4 hours.
                  For urgent bookings please call us directly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name *" name="name" value={form.name} onChange={handle} required />
                  <FormField label="Email Address *" name="email" type="email" value={form.email} onChange={handle} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handle} />
                  <div>
                    <label className="block font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-slate/60 mb-2">
                      Enquiry Type
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handle}
                      className="w-full border border-clay/25 bg-transparent px-4 py-3 font-lato text-sm text-slate focus:outline-none focus:border-clay transition-colors"
                    >
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                {(form.type === "Room Reservation" || form.type === "Corporate / Group Booking") && (
                  <div className="grid sm:grid-cols-3 gap-5">
                    <FormField label="Check-in Date" name="checkIn"  type="date" value={form.checkIn}  onChange={handle} />
                    <FormField label="Check-out Date" name="checkOut" type="date" value={form.checkOut} onChange={handle} />
                    <FormField label="No. of Guests"  name="guests"  type="number" value={form.guests}  onChange={handle} />
                  </div>
                )}
                <div>
                  <label className="block font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-slate/60 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Tell us what you have in mind…"
                    className="w-full border border-clay/25 bg-transparent px-4 py-3 font-lato text-sm text-slate placeholder-slate/30 focus:outline-none focus:border-clay transition-colors resize-none"
                  />
                </div>
                <button type="submit" disabled={sending} className="btn-primary w-full justify-center">
                  {sending ? "Sending…" : <>Send Enquiry <Send size={13} /></>}
                </button>
                <p className="font-montserrat font-light text-[10px] text-slate/40 tracking-wide text-center">
                  We respond within 4 hours · All information kept confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, name, type = "text", value, onChange, required }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="block font-montserrat font-light text-[10px] tracking-[0.2em] uppercase text-slate/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-clay/25 bg-transparent px-4 py-3 font-lato text-sm text-slate placeholder-slate/30 focus:outline-none focus:border-clay transition-colors"
      />
    </div>
  );
}
