"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Stethoscope, FileText } from "lucide-react";
import { FULL_NAME, getYearsOfExperience, credentials } from "@/lib/general";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="flex flex-row items-start gap-3 sm:gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-36 min-h-44 sm:w-56 lg:w-64 self-stretch bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl overflow-hidden p-1.5 sm:p-2 shrink-0"
          >
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-inner">
              <img
                src="/images/doctor.jpg"
                alt={FULL_NAME}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-left flex-1 min-w-0"
          >
            <h1 className="text-lg sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 leading-tight">
              Δρ. ΣΤΑΥΡΟΣ Ν. ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ
            </h1>
            <p className="text-xs sm:text-lg text-gray-700 mb-2 sm:mb-1">
              Ιατρός Αποκατάστασης –{" "}
              <Link
                href="/blogs/what-is-a-physiatrist"
                className="text-primary underline hover:text-primary/80 transition-colors"
              >
                Φυσίατρος
              </Link>{" "}
              | Ηλιούπολη
            </p>

            {/* Credentials */}
            <ul className="hidden sm:block text-sm text-gray-600 space-y-0.5 mb-4 list-disc pl-4">
              {credentials.slice(1).map((cred, i) => (
                <li key={i}>{cred}</li>
              ))}
            </ul>

            {/* Experience + Tagline */}
            <div className="bg-primary/5 rounded-lg px-2.5 sm:px-4 py-1.5 sm:py-2 inline-block mb-2 sm:mb-5 sm:mt-0">
              <span className="text-xs sm:text-lg font-semibold text-primary">
                {getYearsOfExperience()}+ χρόνια εμπειρίας
              </span>
              <span className="text-xs sm:text-base text-gray-600 ml-1 sm:ml-2">
                στην αποκατάσταση του πόνου
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 sm:flex-row">
              <Button size="sm" className="sm:h-11 sm:px-8 sm:text-base text-xs h-8" asChild>
                <Link href="/#services">
                  <Stethoscope className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Υπηρεσίες
                </Link>
              </Button>
              <Button size="sm" className="sm:h-11 sm:px-8 sm:text-base text-xs h-8" variant="outline" asChild>
                <Link href="/resume">
                  <FileText className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Βιογραφικό
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Credentials - shown below the row */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:hidden text-xs text-gray-600 space-y-0.5 mt-4 list-disc pl-5 max-w-5xl mx-auto"
        >
          {credentials.slice(1).map((cred, i) => (
            <li key={i}>{cred}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
