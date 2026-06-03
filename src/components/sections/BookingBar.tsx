"use client";
import { useState } from "react";
import { Calendar, Users, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingBar() {
  const router  = useRouter();
  const today   = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn,  setCheckIn]  = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests,   setGuests]   = useState(2);

  const handleSearch = () => {
    router.push(
      `/stay?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  };

  return (
    <section className="relative z-40 -mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-charcoal/95 backdrop-blur-md border border-cream/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Check-in */}
            <div className="flex-1 flex items-center gap-3 px-6 py-5 border-b md:border-b-0 md:border-r border-cream/10">
              <Calendar size={16} className="text-gold shrink-0" />
              <div className="flex-1">
                <label className="block font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-cream font-montserrat font-light text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex-1 flex items-center gap-3 px-6 py-5 border-b md:border-b-0 md:border-r border-cream/10">
              <Calendar size={16} className="text-gold shrink-0" />
              <div className="flex-1">
                <label className="block font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-cream font-montserrat font-light text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 flex items-center gap-3 px-6 py-5 border-b md:border-b-0 md:border-r border-cream/10">
              <Users size={16} className="text-gold shrink-0" />
              <div className="flex-1">
                <label className="block font-montserrat font-light text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-transparent text-cream font-montserrat font-light text-sm focus:outline-none"
                >
                  {[1,2,3,4,5,6].map((n) => (
                    <option key={n} value={n} className="bg-charcoal">
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 px-8 py-5 bg-gold hover:bg-clay text-charcoal hover:text-cream font-montserrat font-light text-xs tracking-widest uppercase transition-all duration-300"
            >
              Check Availability
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
