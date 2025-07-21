import { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import { PHONE, DOMAIN } from "@/lib/general";

export const metadata: Metadata = {
  title: "Όλες οι Υπηρεσίες | Φυσίατρος Ηλιούπολη - Δρ. Δημητρακόπουλος",
  description: "Πλήρης κατάλογος υπηρεσιών φυσικής ιατρικής και αποκατάστασης. Προλοθεραπεία, φυσικοθεραπεία, βελονισμός, PRP, νευροθεραπεία. Τηλ: " + PHONE,
  alternates: {
    canonical: `https://${DOMAIN}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesSection />
    </div>
  );
}