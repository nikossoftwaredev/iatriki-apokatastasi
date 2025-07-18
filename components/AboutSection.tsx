"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/CircleIcon";
import { Check, GraduationCap, Award, Users } from "lucide-react";
import { FULL_NAME, credentials, getYearsOfExperience } from "@/lib/general";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
              <img 
                src="https://i.ytimg.com/vi/Eqsq918L4KQ/maxresdefault.jpg" 
                alt={FULL_NAME}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Γνωρίστε τον {FULL_NAME}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Με πάνω από {getYearsOfExperience()} χρόνια εμπειρίας στον τομέα της Φυσικής Ιατρικής και Αποκατάστασης, 
              παρέχω ολοκληρωμένες και εξατομικευμένες θεραπευτικές λύσεις για την αντιμετώπιση 
              του πόνου και την αποκατάσταση της λειτουργικότητας.
            </p>

            <div className="space-y-4 mb-8">
              {/* Key credentials with icons */}
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<GraduationCap className="h-5 w-5" />}
                  size={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Εκπαίδευση & Εξειδίκευση</h4>
                  <p className="text-gray-600">{credentials[5]}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<Award className="h-5 w-5" />}
                  size={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Πιστοποιήσεις</h4>
                  <p className="text-gray-600">{credentials[2]}</p>
                </div>
              </div>

              
            </div>

            {/* Credentials list */}
            <div className="grid grid-cols-1 gap-2 mb-8">
              {credentials.slice(0, 3).map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{credential}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" variant="outline" asChild>
              <Link href="/resume">
                Δείτε το πλήρες βιογραφικό
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}