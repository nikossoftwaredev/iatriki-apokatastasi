"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DOMAIN } from "@/lib/general";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Categories for filtering
const categories = [
  { id: "all", name: "Όλες", color: "bg-gray-500" },
  { id: "prolotherapy", name: "Προλοθεραπεία", color: "bg-primary" },
  { id: "equipment", name: "Εξοπλισμός", color: "bg-blue-500" },
  { id: "clinic", name: "Ιατρείο", color: "bg-green-500" },
  { id: "team", name: "Ομάδα", color: "bg-purple-500" },
  { id: "results", name: "Αποτελέσματα", color: "bg-orange-500" },
  { id: "graz", name: "Ανατομείο του Graz Austria", color: "bg-red-500" },
];

// Gallery images with categories
const galleryImages = [
  {
    id: 1,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/10.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 1",
    category: "prolotherapy",
  },
  {
    id: 2,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/11.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 2",
    category: "prolotherapy",
  },
  {
    id: 3,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/12.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 3",
    category: "prolotherapy",
  },
  {
    id: 4,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/13.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 4",
    category: "prolotherapy",
  },
  {
    id: 5,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/15.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 5",
    category: "prolotherapy",
  },
  {
    id: 6,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/18.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 6",
    category: "prolotherapy",
  },
  {
    id: 7,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/2.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 7",
    category: "prolotherapy",
  },
  {
    id: 8,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/3.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 8",
    category: "prolotherapy",
  },
  {
    id: 9,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/8.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 9",
    category: "prolotherapy",
  },
  {
    id: 10,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG-20160802-WA0005.JPG`,
    alt: "Προλοθεραπεία - Εφαρμογή 10",
    category: "prolotherapy",
  },
  {
    id: 11,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4222.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 11",
    category: "prolotherapy",
  },
  {
    id: 12,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4223.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 12",
    category: "prolotherapy",
  },
  {
    id: 13,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4224.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 13",
    category: "prolotherapy",
  },
  {
    id: 14,
    src: `https://www.${DOMAIN}/images/articles/gal_prolotherapeia/IMG_4227.jpg`,
    alt: "Προλοθεραπεία - Εφαρμογή 14",
    category: "prolotherapy",
  },
  {
    id: 15,
    src: `https://www.${DOMAIN}/images/graz/anatomy_1.jpg`,
    alt: "Ανατομείο του Graz - Αίθουσα Διδασκαλίας",
    category: "graz",
  },
  {
    id: 16,
    src: `https://www.${DOMAIN}/images/graz/anatomy_2.jpg`,
    alt: "Ανατομείο του Graz - Εργαστήριο",
    category: "graz",
  },
  {
    id: 17,
    src: `https://www.${DOMAIN}/images/graz/anatomy_3.jpg`,
    alt: "Ανατομείο του Graz - Εκπαιδευτικό Υλικό",
    category: "graz",
  },
  {
    id: 18,
    src: `https://www.${DOMAIN}/images/graz/anatomy_4.jpg`,
    alt: "Ανατομείο του Graz - Κλινική Εκπαίδευση",
    category: "graz",
  },
];

export default function FilterableGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Compact Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Φωτογραφίες
          </h2>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`
                  ${selectedCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:bg-gray-100'
                  }
                `}
              >
                {category.name}
                {category.id !== "all" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({galleryImages.filter(img => img.category === category.id).length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Compact Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Εμφάνιση {filteredImages.length} από {galleryImages.length} φωτογραφίες
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}