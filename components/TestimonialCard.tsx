"use client";

import { motion } from "framer-motion";
import ImageLightbox from "@/components/ImageLightbox";

interface TestimonialCardProps {
  content: string;
  date?: string;
  imageUrl?: string;
  videoUrl?: string;
  index?: number;
}

export default function TestimonialCard({
  content,
  imageUrl,
  videoUrl,
  index = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
    >
      {/* Full image or video at top */}
      {videoUrl ? (
        <div className="relative w-full h-64 overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoUrl}?rel=0`}
            title="Testimonial video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : imageUrl ? (
        <ImageLightbox src={imageUrl} alt="Testimonial">
          <div className="relative w-full h-64 overflow-hidden group">
            <img
              src={imageUrl}
              alt="Testimonial"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </ImageLightbox>
      ) : null}

      <div className="p-4 flex flex-col flex-grow">
        {/* Content */}
        <p className="text-gray-700 mb-3 flex-grow italic text-sm">
          &ldquo;{content}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}
