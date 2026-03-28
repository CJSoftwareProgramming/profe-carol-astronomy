/* Home.tsx — Sophia Academy
   Design: "El universo como aula" — Sophia Brand Identity
   Background: #020408 (Espacio Profundo) with animated solar system
   Fonts: Fredoka One (display) + Nunito (body/UI)
   Colors: #FB923C solar orange, #FFD23F stellar yellow, #FFF8F0 warm white
   Section order: Hero → About → Topics → Why → Programs → AcademicFeatured → Pricing → Workshops → Students → Testimonials → Teacher → FAQ → Footer
*/
import SolarSystemBackground from "@/components/SolarSystemBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TopicsSection from "@/components/sections/TopicsSection";
import WhyAstronomySection from "@/components/sections/WhyAstronomySection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AcademicFeaturedSection from "@/components/sections/AcademicFeaturedSection";
import PricingSection from "@/components/sections/PricingSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import StudentsSection from "@/components/sections/StudentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeacherSection from "@/components/sections/TeacherSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative", backgroundColor: "#020408", minHeight: "100vh" }}>
      {/* Global animated solar system background */}
      <SolarSystemBackground />

      {/* All content sits above the background */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TopicsSection />
        <WhyAstronomySection />
        <ProgramsSection />
        <AcademicFeaturedSection />
        <PricingSection />
        <WorkshopsSection />
        <StudentsSection />
        <TestimonialsSection />
        <TeacherSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
