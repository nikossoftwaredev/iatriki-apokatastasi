"use client";

import { useState } from "react";
import { Play, Tv, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedVideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* TV Interview Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Tv className="w-4 h-4" />
              <span className="text-sm font-semibold">Συνέντευξη στην ΕΡΤ1</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ο Δρ. Δημητρακόπουλος στην Τηλεόραση
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Παρακολουθήστε τη συνέντευξη του Δρ. Σταύρου Δημητρακόπουλου στην εκπομπή της ΕΡΤ1
            </p>
            <p className="text-base text-gray-500">
              Θέμα: <span className="font-semibold">Προλοθεραπεία - Τι είναι και πώς βοηθά στην αποκατάσταση</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Video Player */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  ΕΡΤ1
                </div>
              </div>
              
              <div className="aspect-video bg-gray-900 relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-white mb-2 mx-auto animate-pulse" />
                      <p className="text-white">Φόρτωση συνέντευξης...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`https://www.youtube.com/embed/sPRxzlfjq4Y?rel=0`}
                  title="Δρ. Δημητρακόπουλος - Συνέντευξη για την Προλοθεραπεία στην ΕΡΤ1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;