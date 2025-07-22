import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/sections/Contact";
import FAQSection from "@/components/FAQSection";
import FeaturedVideoSection from "@/components/FeaturedVideoSection";
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
      <BlogSection />
      <TestimonialsSection />
      <FeaturedVideoSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
