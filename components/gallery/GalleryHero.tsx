"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-white py-8 lg:py-12 border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Camera className="h-6 w-6 text-primary" />
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Ψηφιακό Υλικό
          </h1>
          
          <p className="text-base text-gray-600">
            Περιηγηθείτε στο ψηφιακό υλικό από το ιατρείο μας
          </p>
        </motion.div>
      </div>
    </section>
  );
}