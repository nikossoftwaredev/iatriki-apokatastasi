"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/gallery-data";

// Type guard to check if item is a video
function isVideo(item: GalleryItem): item is { youtubeId: string; title: string; alt: string; category: string; id: number } {
  return 'youtubeId' in item;
}

export default function FilterableGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Compact Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Φωτογραφίες & Βίντεο
          </h2>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {galleryCategories.map((category) => (
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
                    ({galleryItems.filter(item => item.category === category.id).length})
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
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedItem(item)}
              >
                {isVideo(item) ? (
                  // Video thumbnail
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`}
                      alt={item.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-xs line-clamp-2">{item.title}</p>
                    </div>
                  </div>
                ) : (
                  // Image
                  <>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Εμφάνιση {filteredItems.length} από {galleryItems.length} στοιχεία
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              {isVideo(selectedItem) ? (
                // Video iframe
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1`}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <p className="text-white text-center mt-4 absolute -bottom-10 left-0 right-0">
                    {selectedItem.title}
                  </p>
                </div>
              ) : (
                // Image
                <>
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain rounded-lg"
                    quality={90}
                  />
                  <p className="text-white text-center mt-4">{selectedItem.alt}</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}