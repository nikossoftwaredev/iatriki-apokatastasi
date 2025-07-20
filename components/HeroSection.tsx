"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AppointmentButton from "@/components/AppointmentButton";
import { Check, Calendar, Users, Activity, Heart, Zap } from "lucide-react";
import Link from "next/link";
import { getYearsOfExperience, stats, FULL_NAME } from "@/lib/general";

export default function HeroSection() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                ΙΑΤΡΙΚΗ ΑΠΟΚΑΤΑΣΤΑΣΗ
              </h1>
              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center gap-1.5 sm:gap-2 hover:from-primary/20 hover:to-primary/10 transition-colors"
                >
                  <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  φυσικοθεραπεία
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center gap-1.5 sm:gap-2 hover:from-primary/20 hover:to-primary/10 transition-colors"
                >
                  <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  ιατρείο βελονισμού
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium flex items-center gap-1.5 sm:gap-2 hover:from-primary/20 hover:to-primary/10 transition-colors"
                >
                  <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  ηλεκτρομυογράφημα
                </motion.span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Εμπιστευτείτε την υγεία σας στα έμπειρα χέρια του <span className="font-semibold text-gray-900">{FULL_NAME}</span>. 
              Με πάνω από <span className="font-semibold text-primary">{getYearsOfExperience()} χρόνια εμπειρίας</span>, προσφέρουμε 
              εξατομικευμένες λύσεις για την αντιμετώπιση του πόνου και την αποκατάσταση 
              της λειτουργικότητας σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <AppointmentButton size="lg" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/#services">
                  Δείτε τις Υπηρεσίες μας
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <img 
                src="/images/hero-image.webp" 
                alt="Ιατρείο Αποκατάστασης Ηλιούπολη - Φυσιατρική"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {/* Years of Experience */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{yearsOfExperience}+</div>
            <div className="text-gray-600">{stats.yearsLabel}</div>
          </div>

          {/* Satisfied Clients */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stats.satisfiedClients}</div>
            <div className="text-gray-600">Ικανοποιημένοι Ασθενείς στην Ηλιούπολη</div>
          </div>

          {/* EOPYY Partnership */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <img 
                src="https://www.eopyy.gov.gr/Template/images/logo_top.png"
                alt="ΕΟΠΥΥ"
                className="h-12"
              />
            </div>
            <div className="text-gray-600 mt-4">{stats.eopyyLabel}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}