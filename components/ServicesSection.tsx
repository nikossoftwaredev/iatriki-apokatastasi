"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { CircleIcon } from "@/components/CircleIcon";
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
  Heart
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

export default function ServicesSection() {
  // Show all services
  const featuredServices = services;

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
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              slug={service.slug}
              title={service.title}
              shortDescription={service.shortDescription}
              icon={iconMap[service.iconName] || <Heart className="h-6 w-6" />}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}