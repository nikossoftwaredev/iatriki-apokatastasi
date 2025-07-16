"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const trainingData = [
  {
    date: "8/3/1992 - 6/7/1992",
    title: "Πανεπιστημιακή Ορθοπεδική κλινική του Μιλάνου",
    location: "Milano, Italy",
    details: [
      "Αποκατάσταση Νευρολογικών Παθήσεων",
      "Αποκατάσταση Ορθοπεδικών Παθήσεων",
      "Πνευμονολογική και καρδιολογική Αποκατάσταση",
      "Κέντρο για τον πειραματισμό και την εφαρμογή Προσθέσεων και Ορθοπεδικών βοηθημάτων",
      "Εξωτερικό Ιατρείο Οστεοπόρωσης και μεταβολικών νοσημάτων των οστών",
      "Ιατρείο Διάγνωσης και Αποκατάστασης Αθλητικών κακώσεων γόνατος",
    ],
  },
  {
    date: "3-5/4/1998",
    title: "Διεθνές Σεμινάριο Manual Medicine (ULMMMA)",
    location: "Roma, Italy",
  },
  {
    date: "6-8/11/1998",
    title: "Διεθνές σεμινάριο Manual Medicine της ULMMA",
    location: "Milano, Italy",
  },
  {
    date: "3-4/02/2012",
    title: "Workshop Προλοθεραπείας - University of Wisconsin",
    location: "Verona, Italy",
  },
  {
    date: "23-24/03/2013",
    title: "Workshop θεωρία-πρακτική εφαρμογής προλοθεραπείας",
    location: "Treviso, Italy",
  },
  {
    date: "17/04/2013",
    title: "Workshop εφαρμογής θεραπείας με κρουστικά κύματα",
    location: "Κίεβο, Ουκρανία",
  },
  {
    date: "09-12/5/2014",
    title: "Παγκόσμιο workshop of Neural Prolotherapy",
    location: "Ferrara, Italy",
  },
  {
    date: "16-17/01/2015",
    title: "Πρακτικό workshop προλοθεραπείας",
    location: "Istanbul, Turkey",
  },
  {
    date: "27-31/10/2015",
    title: "Anatomy for neuraltherapists - 64 ώρες",
    location: "Graz, Austria",
  },
  {
    date: "04-07/09/2015",
    title: "Lyfgogt Perineural Injection Treatment - Κλινικός εκπαιδευτής",
    location: "Ferrara, Italy",
  },
  {
    date: "05/07/2016",
    title: "Σεμινάριο Spine prolotherapy",
    location: "Ferrara, Italy",
  },
  {
    date: "08/10/2018",
    title: "Prolotherapy Master Class",
    location: "Ferrara, Italy",
  },
];

export default function InternationalTraining() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Globe className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">ΕΚΠΑΙΔΕΥΣΗ ΣΤΟ ΕΞΩΤΕΡΙΚΟ</h2>
      </div>

      <div className="space-y-6">
        {trainingData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`p-6 rounded-lg ${index % 2 === 0 ? "bg-gray-50" : "bg-white border border-gray-200"}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-primary font-medium">{item.location}</p>
              </div>
              <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                {item.date}
              </span>
            </div>
            
            {item.details && (
              <ul className="mt-4 space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}