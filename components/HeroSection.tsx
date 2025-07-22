"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppointmentButton from "@/components/AppointmentButton";
import { Calendar, Users, Check, GraduationCap, Award, Activity } from "lucide-react";
import Link from "next/link";
import { 
  getYearsOfExperience, 
  stats, 
  FULL_NAME,
  credentials 
} from "@/lib/general";
import { 
  services, 
  getServicesByCategory, 
  serviceCategories 
} from "@/lib/services";
import { CircleIcon } from "@/components/CircleIcon";

// Service icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  bone: require("lucide-react").Bone,
  hand: require("lucide-react").Hand,
  heart: require("lucide-react").Heart,
  syringe: require("lucide-react").Syringe,
  atom: require("lucide-react").Atom,
  stethoscope: require("lucide-react").Stethoscope,
  activity: require("lucide-react").Activity,
  dumbbell: require("lucide-react").Dumbbell,
  waves: require("lucide-react").Waves,
  brain: require("lucide-react").Brain,
  droplet: require("lucide-react").Droplet,
  footprints: require("lucide-react").Footprints,
  radio: require("lucide-react").Radio,
};

export default function HeroSection() {
  const yearsOfExperience = getYearsOfExperience();
  const therapeuticServices = getServicesByCategory("therapeutic");
  const diagnosticServices = getServicesByCategory("diagnostic-support");

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Doctor Info Card with integrated stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="flex items-center gap-6">
            {/* Doctor Image */}
            <div className="w-36 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden p-2 flex-shrink-0">
              <div className="relative w-full h-full bg-white rounded overflow-hidden shadow-inner">
                <img 
                  src="/images/doctor.jpg" 
                  alt={FULL_NAME}
                  className="object-cover w-full h-full filter grayscale"
                />
              </div>
            </div>
            
            {/* Doctor Info and Stats */}
            <div className="flex-1">
              <div>
                <h1 className="text-2xl font-bold text-primary mb-2">
                  Δρ. ΣΤΑΥΡΟΣ Ν. ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ
                </h1>
                <p className="text-base text-gray-700 mb-1">
                  Ιατρός Αποκατάστασης - Φυσίατρος
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Μετεκπαιδευθείς στην Παιδική Κλινική του Milan
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Διπλωματούχος βελονισμού E.C.P.D (ΟΗΕ)
                </p>
                <div className="bg-primary/5 rounded-lg px-4 py-2 inline-block">
                  <span className="text-lg font-semibold text-primary">{getYearsOfExperience()}+ χρόνια εμπειρίας</span>
                  <span className="text-base text-gray-600 ml-2">στην αποκατάσταση του πόνου</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout - Credentials/Resume and Services */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Βιογραφικό & Πιστοποιήσεις</h2>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<GraduationCap className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Εκπαίδευση & Εξειδίκευση
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {credentials[5]}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<Award className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Διεθνείς Πιστοποιήσεις
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {credentials[2]}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<Users className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Επαγγελματικές Ενώσεις
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• {credentials[4]}</li>
                    <li>• {credentials[6]}</li>
                    <li>• {credentials[7]}</li>
                    <li>• Συνεργάτης ΕΟΠΥΥ</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/#services">
                  Οι Υπηρεσίες μας
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resume">
                  Δείτε το Βιογραφικό
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Οι Υπηρεσίες μας</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                {/* Therapeutic Services */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {serviceCategories.therapeutic.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {therapeuticServices.map((service) => {
                      const Icon = iconMap[service.iconName] || Activity;
                      return (
                        <Link key={service.id} href={`/services/${service.slug}`}>
                          <Badge 
                            variant="outline" 
                            className="px-3 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200"
                          >
                            <Icon className="h-3.5 w-3.5 mr-1.5" />
                            {service.title}
                          </Badge>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Diagnostic Services */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {serviceCategories["diagnostic-support"].title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {diagnosticServices.map((service) => {
                      const Icon = iconMap[service.iconName] || Activity;
                      return (
                        <Link key={service.id} href={`/services/${service.slug}`}>
                          <Badge 
                            variant="outline" 
                            className="px-3 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200"
                          >
                            <Icon className="h-3.5 w-3.5 mr-1.5" />
                            {service.title}
                          </Badge>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}