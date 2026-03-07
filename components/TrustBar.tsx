"use client";

import { motion } from "framer-motion";
import { Award, Users, Shield, GraduationCap } from "lucide-react";
import { getYearsOfExperience, stats } from "@/lib/general";

const trustItems = [
  {
    icon: Award,
    value: `${getYearsOfExperience()}+`,
    label: "Χρόνια Εμπειρίας",
  },
  {
    icon: Users,
    value: stats.satisfiedClients,
    label: "Ασθενείς",
  },
  {
    icon: Shield,
    value: "ΕΟΠΥΥ",
    label: "Σύμβαση",
  },
  {
    icon: GraduationCap,
    value: "Μιλάνο",
    label: "Μετεκπαίδευση",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 max-w-md md:max-w-none mx-auto"
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 md:justify-center">
              <div className="bg-primary/10 rounded-full p-2.5 shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-tight">{item.value}</p>
                <p className="text-xs text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
