import Hero              from "@/components/sections/Hero";
import BookingBar        from "@/components/sections/BookingBar";
import AboutSection      from "@/components/sections/AboutSection";
import RoomsSection      from "@/components/sections/RoomsSection";
import DiningSection     from "@/components/sections/DiningSection";
import LakeBanner        from "@/components/sections/LakeBanner";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingBar />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <LakeBanner />
      <ExperiencesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
