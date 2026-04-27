import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import SafetyBanner from "@/components/home/SafetyBanner";
import DirectorMessage from "@/components/home/DirectorMessage";
import ProjectsHighlight from "@/components/home/ProjectsHighlight";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <SafetyBanner />
      <DirectorMessage />
      <ProjectsHighlight />
      <EquipmentShowcase />
      <Testimonials />
      <ClientLogos />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
