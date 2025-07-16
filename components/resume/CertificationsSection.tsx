"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { getYearsOfExperience } from "@/lib/general";

export default function CertificationsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">ΠΙΣΤΟΠΟΙΗΣΕΙΣ & ΤΙΤΛΟΙ</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                European Board of Physical Medicine and Rehabilitation
              </h3>
              <p className="text-gray-600 mb-2">
                Έλαβα το πτυχίο της European Board of Physical Medicine and Rehabilitation 
                κατόπιν επιτυχών εξετάσεων.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-primary">1/12/1997</span>
                <span className="text-gray-600">• Certificate N: 1397</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Μεταπτυχιακός Τίτλος FEBPRM
              </h3>
              <p className="text-gray-600 mb-2">
                Ευρωπαϊκός τίτλος ειδικότητας Φυσικής ιατρικής και Αποκατάστασης
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-primary">1997</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 p-6 bg-gray-50 rounded-lg text-center"
      >
        <p className="text-gray-700">
          Με πάνω από <span className="font-bold text-primary">{getYearsOfExperience()} χρόνια εμπειρίας</span> στον τομέα 
          της Φυσικής Ιατρικής και Αποκατάστασης, συνεχίζω να εξελίσσομαι και να προσφέρω 
          τις πιο σύγχρονες θεραπευτικές προσεγγίσεις στους ασθενείς μου.
        </p>
      </motion.div>
    </motion.section>
  );
}