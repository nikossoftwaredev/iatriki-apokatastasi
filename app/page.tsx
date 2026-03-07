import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ConditionsSection from "@/components/ConditionsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturedVideoSection from "@/components/FeaturedVideoSection";
import FAQSection from "@/components/FAQSection";
import { ContactSection } from "@/components/sections/Contact";
import { PHONE, DOMAIN } from "@/lib/general";

export const metadata: Metadata = {
  title: "Φυσίατρος Ηλιούπολη | Προλοθεραπεία για Πόνους Μέση, Αυχένα, Γόνατο",
  description: "Φυσίατρος στην Ηλιούπολη - Τι είναι η προλοθεραπεία; Θεραπεία για πόνους στη μέση, αυχένα, γόνατο. Φυσικοθεραπεία, βελονισμός, PRP. Τηλ: " + PHONE,
  alternates: {
    canonical: `https://${DOMAIN}`,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ConditionsSection />
      <ServicesSection isHomePage />
      <TestimonialsSection />
      <FeaturedVideoSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
