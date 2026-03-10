/* Home.tsx — Profe Carol Astrophysics Academy
   Design Philosophy: "Cosmic Academy" — Premium Educational Editorial
   Dark cosmos as the stage. Deep navy/black backgrounds with luminous accents.
   Typography: Outfit (headers) + Crimson Pro (body)
   Palette: Deep space navy, electric blue (#4CC9F0), warm amber (#F4A261)
   Sections order: Hero → About → Topics → Why Astronomy → Programs → Pricing → Workshops → Students → Testimonials → Teacher → FAQ → Footer
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TopicsSection from "@/components/sections/TopicsSection";
import WhyAstronomySection from "@/components/sections/WhyAstronomySection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PricingSection from "@/components/sections/PricingSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import StudentsSection from "@/components/sections/StudentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeacherSection from "@/components/sections/TeacherSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#03071E" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <WhyAstronomySection />
      <ProgramsSection />
      <PricingSection />
      <WorkshopsSection />
      <StudentsSection />
      <TestimonialsSection />
      <TeacherSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
