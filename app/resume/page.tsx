import { Metadata } from "next";
import { FULL_NAME } from "@/lib/general";
import ResumeHeader from "@/components/resume/ResumeHeader";
import EducationSection from "@/components/resume/EducationSection";
import InternationalTraining from "@/components/resume/InternationalTraining";
import SpecializedCenters from "@/components/resume/SpecializedCenters";
import CertificationsSection from "@/components/resume/CertificationsSection";

export const metadata: Metadata = {
  title: `Βιογραφικό - ${FULL_NAME}`,
  description: "Βιογραφικό Σημείωμα - Εκπαίδευση, Εξειδίκευση και Επαγγελματική Εμπειρία",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResumeHeader />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <EducationSection />
          <InternationalTraining />
          <SpecializedCenters />
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
}