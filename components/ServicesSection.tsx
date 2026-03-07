"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services, serviceCategories, getServicesByCategory } from "@/lib/services";
import Link from "next/link";
import { Search, HeartPulse } from "lucide-react";
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

const categoryIcons = {
  "diagnostic-support": Search,
  therapeutic: HeartPulse,
} as const;

export default function ServicesSection({ isHomePage = false }: ServicesSectionProps) {
  const therapeuticCount = getServicesByCategory("therapeutic").length;
  const diagnosticCount = getServicesByCategory("diagnostic-support").length;
  const remainingServicesCount = services.length - 5; // total services minus the 5 shown on home

  if (isHomePage) {
    const therapeuticServices = getServicesByCategory("therapeutic");
    const displayedServices = therapeuticServices.slice(0, 5);
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Εξειδικευμένες υπηρεσίες για την αντιμετώπιση μυοσκελετικών παθήσεων
              και την αποκατάσταση της λειτουργικότητας.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                <HeartPulse className="h-4 w-4" />
                {therapeuticCount} Θεραπευτικές Πράξεις
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
                <Search className="h-4 w-4" />
                {diagnosticCount} Διαγνωστικές Πράξεις
              </span>
            </div>
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
                category={service.category}
                index={index}
              />
            ))}

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
          </div>
        </div>
      </section>
    );
  }

  // Full services page — grouped by category
  const categories = ["diagnostic-support", "therapeutic"] as const;

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Εξειδικευμένες υπηρεσίες για την αντιμετώπιση μυοσκελετικών παθήσεων
            και την αποκατάσταση της λειτουργικότητας.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
              <HeartPulse className="h-4 w-4" />
              {therapeuticCount} Θεραπευτικές Πράξεις
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
              <Search className="h-4 w-4" />
              {diagnosticCount} Διαγνωστικές Πράξεις
            </span>
          </div>
        </motion.div>

        {categories.map((categoryKey) => {
          const catInfo = serviceCategories[categoryKey];
          const catServices = getServicesByCategory(categoryKey);
          const CatIcon = categoryIcons[categoryKey];

          return (
            <div key={categoryKey} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${categoryKey === "diagnostic-support" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>
                    <CatIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {catInfo.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-12">
                  {catInfo.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    slug={service.slug}
                    title={service.title}
                    shortDescription={service.shortDescription}
                    icon={iconMap[service.iconName] || <Heart className="h-6 w-6" />}
                    color={service.iconColor}
                    category={service.category}
                    index={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}