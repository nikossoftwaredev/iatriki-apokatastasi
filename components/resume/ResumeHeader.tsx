"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { FULL_NAME, ADDRESS, PHONE, PHONE2, credentials } from "@/lib/general";

export default function ResumeHeader() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-white py-16 lg:py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Βιογραφικό
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{FULL_NAME}</h2>
                  <p className="text-lg text-primary">{credentials[0]}</p>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <p><strong>Πατρώνυμο:</strong> ΝΙΚΟΛΑΟΣ</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span><strong>Ημερομηνία Γέννησης:</strong> 17/9/1957</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Διεύθυνση Ιατρείου</p>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Τηλέφωνο</p>
                    <p className="text-gray-600">{PHONE}, {PHONE2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  {credentials[2]}
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  Διπλωματούχος Βελονισμού E.C.P.D (ΟΗΕ)
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  Μέλος Αθλητιατρικής Εταιρείας Ελλάδος
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}