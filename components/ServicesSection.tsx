"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { CircleIcon } from "@/components/CircleIcon";
import Link from "next/link";
import { 
  Stethoscope, 
  Activity, 
  Syringe, 
  Dumbbell, 
  Hand, 
  Waves,
  Atom,
  Bone,
  Brain,
  Droplet,
  Footprints,
  Radio,
  Heart,
  ArrowRight
} from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  stethoscope: <Stethoscope className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  syringe: <Syringe className="h-6 w-6" />,
  dumbbell: <Dumbbell className="h-6 w-6" />,
  hand: <Hand className="h-6 w-6" />,
  waves: <Waves className="h-6 w-6" />,
  atom: <Atom className="h-6 w-6" />,
  bone: <Bone className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  droplet: <Droplet className="h-6 w-6" />,
  footprints: <Footprints className="h-6 w-6" />,
  radio: <Radio className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
};

interface ServicesSectionProps {
  isHomePage?: boolean;
}

export default function ServicesSection({ isHomePage = false }: ServicesSectionProps) {
  // Show only first 5 services on home page, all services on services page
  const displayedServices = isHomePage ? services.slice(0, 5) : services;
  const remainingServicesCount = services.length - 5;

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Παρέχουμε ένα ευρύ φάσμα εξειδικευμένων θεραπειών για την αντιμετώπιση 
            μυοσκελετικών παθήσεων και την αποκατάσταση της λειτουργικότητας.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              slug={service.slug}
              title={service.title}
              shortDescription={service.shortDescription}
              icon={iconMap[service.iconName] || <Heart className="h-6 w-6" />}
              color={service.iconColor}
              index={index}
            />
          ))}
          
          {/* Show More Card - only on home page */}
          {isHomePage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
            >
              <Link href="/services" className="block h-full">
                <div className="group relative p-6 bg-primary/5 border-2 border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center">
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-primary group-hover:scale-110 inline-block transition-transform">
                      +{remainingServicesCount}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ακόμη υπηρεσίες
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Εξειδικευμένες θεραπείες αποκατάστασης
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary font-medium">
                    <span>Δείτε όλες</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}