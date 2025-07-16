"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DOMAIN } from "@/lib/general";

const galleryImages = [
  {
    id: 1,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/10.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 1",
    category: "Προλοθεραπεία",
  },
  {
    id: 2,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/11.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 2",
    category: "Προλοθεραπεία",
  },
  {
    id: 3,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/12.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 3",
    category: "Προλοθεραπεία",
  },
  {
    id: 4,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/13.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 4",
    category: "Προλοθεραπεία",
  },
  {
    id: 5,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/15.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 5",
    category: "Προλοθεραπεία",
  },
  {
    id: 6,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/18.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 6",
    category: "Προλοθεραπεία",
  },
  {
    id: 7,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/2.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 7",
    category: "Προλοθεραπεία",
  },
  {
    id: 8,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/3.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 8",
    category: "Προλοθεραπεία",
  },
  {
    id: 9,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/8.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 9",
    category: "Προλοθεραπεία",
  },
  {
    id: 10,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG-20160802-WA0005.JPG`,
    alt: "Προλοθεραπεία - Εφαρμογή 10",
    category: "Προλοθεραπεία",
  },
  {
    id: 11,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4222.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 11",
    category: "Προλοθεραπεία",
  },
  {
    id: 12,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4223.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 12",
    category: "Προλοθεραπεία",
  },
  {
    id: 13,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4224.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 13",
    category: "Προλοθεραπεία",
  },
  {
    id: 14,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4227.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 14",
    category: "Προλοθεραπεία",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Προλοθεραπεία - Φωτογραφικό Υλικό
          </h2>

          {/* Pinterest-style Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div 
                  className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] mb-4 rounded-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                      style={{
                        // Randomize aspect ratios for Pinterest effect
                        aspectRatio: index % 4 === 0 ? "3/4" : 
                                   index % 4 === 1 ? "4/5" : 
                                   index % 4 === 2 ? "1/1" : "4/3"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium drop-shadow-lg">
                          {image.alt}
                        </p>
                        <p className="text-white/80 text-xs mt-1">
                          {image.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] w-auto h-auto mx-auto"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-medium drop-shadow-lg">{selectedImage.alt}</p>
                <p className="text-sm opacity-80">{selectedImage.category}</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}