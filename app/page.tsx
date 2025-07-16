import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/sections/Contact";
import FAQSection from "@/components/FAQSection";
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
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
