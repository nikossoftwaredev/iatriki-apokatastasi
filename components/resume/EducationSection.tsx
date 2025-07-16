"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    date: "21/1/1987",
    title: "Πτυχίο Ιατρικής Σχολής Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης",
  },
  {
    date: "21/3/1988 - 25/9/1988",
    title: "6 μήνες εκπαίδευση στην Παθολογία στην Ογκολογική κλινική του Νοσοκομείου «Ευαγγελισμός»",
  },
  {
    date: "18/10/1988 - 18/4/1989",
    title: "6 μήνες εκπαίδευση στην Ορθοπεδική Χειρουργική στην Ε'ορθοπεδική κλινική του Νοσοκομείου «Ασκληπιείο Βούλας»",
  },
  {
    date: "11/5/1989 - 15/11/1989",
    title: "6 μήνες εκπαίδευση στην νευρολογία στην Νευρολογική κλινική του Νοσοκομείου «Παμμακάριστος»",
  },
  {
    date: "30/5/1990 - 30/10/1992",
    title: "30 μήνες εκπαίδευση στην Φυσική Ιατρική και Αποκατάσταση στην κλινική Φ.Ι.Απ. του Ε.Ι.Α.Α.",
  },
  {
    date: "12/5/1993",
    title: "Λήψη τίτλου ειδικότητας Φυσικής Ιατρικής και Αποκατάστασης",
    highlight: true,
  },
  {
    date: "1/12/1997",
    title: "Λήψη ευρωπαϊκού τίτλου ειδικότητας ΦΙΑπ",
    highlight: true,
  },
];

export default function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">ΒΑΣΙΚΗ ΕΚΠΑΙΔΕΥΣΗ</h2>
      </div>

      <div className="space-y-4">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`grid md:grid-cols-[200px_1fr] gap-4 p-4 rounded-lg transition-colors ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } ${item.highlight ? "border-l-4 border-primary" : ""}`}
          >
            <div className="text-sm font-medium text-primary">{item.date}</div>
            <div className={`text-gray-700 ${item.highlight ? "font-semibold" : ""}`}>
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}