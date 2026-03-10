/* Home.tsx — Profe Carol Astrophysics Academy
   Design Philosophy: "Deep Field Observatory" — cosmic dark background with
   animated shooting stars, twinkling particles, and nebula glows throughout.
   StarField is rendered as a fixed full-page canvas behind all sections.
*/
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyAstronomySection from "@/components/sections/WhyAstronomySection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PricingSection from "@/components/sections/PricingSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import TopicsSection from "@/components/sections/TopicsSection";
import StudentsSection from "@/components/sections/StudentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeacherSection from "@/components/sections/TeacherSection";
import FAQSection from "@/components/sections/FAQSection";
import EnrollSection from "@/components/sections/EnrollSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#03071E" }}>
      {/* Global cosmic background — fixed behind all sections */}
      <StarField className="opacity-90" />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhyAstronomySection />
        <ProgramsSection />
        <PricingSection />
        <WorkshopsSection />
        <TopicsSection />
        <StudentsSection />
        <TestimonialsSection />
        <TeacherSection />
        <FAQSection />
        <EnrollSection />
        <Footer />
      </div>
    </div>
  );
}
