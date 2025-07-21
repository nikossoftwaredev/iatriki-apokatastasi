"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Stethoscope, 
  Building,
  Award,
  Camera,
  Zap
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Ιατρείο",
    description: "Φωτογραφίες από τους χώρους του ιατρείου μας",
    icon: Building,
    imageCount: 14,
    href: "/gallery/iatreio",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Θεραπευτικές Διαδικασίες",
    description: "Εφαρμογές προλοθεραπείας, PRP και άλλων θεραπειών",
    icon: Stethoscope,
    imageCount: 25,
    href: "/gallery/therapies",
    color: "bg-primary",
  },
  {
    id: 3,
    title: "Neural Therapy",
    description: "Εφαρμογές και τεχνικές της Neural Therapy",
    icon: Zap,
    imageCount: 3,
    href: "/gallery/neural-therapy",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Συνέδρια & Εκπαίδευση",
    description: "Συμμετοχές σε διεθνή συνέδρια και εκπαιδευτικά σεμινάρια",
    icon: Award,
    imageCount: 18,
    href: "/gallery/conferences",
    color: "bg-green-500",
  },
  {
    id: 5,
    title: "Άλλες Φωτογραφίες",
    description: "Διάφορες φωτογραφίες από την καθημερινότητα του ιατρείου",
    icon: Camera,
    imageCount: 10,
    href: "/gallery/other",
    color: "bg-pink-500",
  },
];

export default function GalleryCategories() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Κατηγορίες Φωτογραφιών
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Εξερευνήστε τη συλλογή μας ανά κατηγορία για να βρείτε ακριβώς αυτό που αναζητάτε
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link href={category.href} className="block p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${category.color} text-white flex-shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {category.imageCount} φωτογραφίες
                        </p>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Ενδιαφέρεστε να δείτε περισσότερες φωτογραφίες από το ιατρείο μας;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Επικοινωνήστε μαζί μας
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}