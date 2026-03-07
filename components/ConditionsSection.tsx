"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const conditions = [
  { label: "Πόνο στη μέση", href: "/services/prolotherapeia" },
  { label: "Αυχενικό σύνδρομο", href: "/services/prolotherapeia" },
  { label: "Πόνο στο γόνατο", href: "/services/prp-therapeia" },
  { label: "Ισχιαλγία", href: "/services/neural-prolotherapeia" },
  { label: "Τενοντίτιδες", href: "/services/shock-wave" },
  { label: "Αθλητικές κακώσεις", href: "/services/fysiotherapeia" },
  { label: "Αρθρίτιδες", href: "/services/prolotherapeia" },
  { label: "Νευρολογικές παθήσεις", href: "/services/neuraltherapy" },
  { label: "Επικονδυλίτιδα", href: "/services/shock-wave" },
  { label: "Ινομυαλγία", href: "/services/prolotherapeia" },
];

export default function ConditionsSection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Αντιμετωπίζουμε
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Εξειδίκευση στην αντιμετώπιση οξύ και χρόνιου μυοσκελετικού πόνου
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {conditions.map((condition) => (
            <Link
              key={condition.label}
              href={condition.href}
              className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all"
            >
              {condition.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
          >
            + Περισσότερα
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
