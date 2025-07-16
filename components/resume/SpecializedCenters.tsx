"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const specializedData = [
  {
    date: "1/11/1991 - 15/12/1992",
    title: "Αποκαταστασιακό Κέντρο Ε.Λ.Ε.Π.Α.Π.",
    description: "Γνωστικό αντικείμενο: Παιδικές αναπηρίες",
  },
  {
    date: "18/3/1994 - 18/5/1994",
    title: "Ιατρείο κεφαλαλγιών - Νευρολογικό τμήμα",
    description: "Περιφερικό Γενικό Νοσοκομείο Αθηνών",
  },
  {
    date: "09/1995 - 05/1997",
    title: "Διεθνής σχολή παραδοσιακού βελονισμού ECPD (ΟΗΕ)",
    description: "300 ώρες εκπαίδευσης και απόκτηση πτυχίου",
    highlight: true,
  },
  {
    date: "1-3/12/2016",
    title: "3rd International Musculoskeletal Ultrasound Course",
    description: "MITOS - Αθήνα",
  },
  {
    date: "05-09/6/2017",
    title: "Greek Prolotherapy Mission 2017",
    description: "Κλινικός εκπαιδευτής - European School of Prolotherapy SIPRO, Ανώγεια Κρήτης",
    highlight: true,
  },
];

export default function SpecializedCenters() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">ΕΚΠΑΙΔΕΥΣΗ ΣΕ ΕΞΕΙΔΙΚΕΥΜΕΝΑ ΚΕΝΤΡΑ</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {specializedData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-lg border-2 transition-all hover:shadow-md ${
              item.highlight 
                ? "border-primary bg-primary/5" 
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="text-sm font-medium text-primary mb-2">{item.date}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}