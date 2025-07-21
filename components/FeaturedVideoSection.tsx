"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const FeaturedVideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Τι είναι η Προλοθεραπεία;
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Παρακολουθήστε την εκπομπή στην ΕΡΤ1 για να μάθετε περισσότερα για αυτή την καινοτόμο θεραπευτική μέθοδο
          </p>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-900 relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white mb-2 mx-auto" />
                    <p className="text-white">Φόρτωση βίντεο...</p>
                  </div>
                </div>
              )}
              <iframe
                src={`https://www.youtube.com/embed/sPRxzlfjq4Y?rel=0`}
                title="Προλοθεραπεία, τι είναι; εκπομπή στην ΕΡΤ1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;