"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  profession?: string;
  treatment: string;
  content: string;
  rating: number;
  date: string;
  imageUrl?: string;
  videoUrl?: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  profession,
  treatment,
  content,
  rating,
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
        <div className="relative w-full h-48 overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoUrl}?rel=0`}
            title={`${name} testimonial video`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : imageUrl ? (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}

      <div className="p-6 flex flex-col flex-grow">
        {/* Content */}
        <p className="text-gray-700 mb-6 flex-grow italic">
          &ldquo;{content}&rdquo;
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Author info */}
        <div className="border-t pt-4">
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            {profession && (
              <p className="text-sm text-gray-500">{profession}</p>
            )}
            <p className="text-sm text-gray-600">{treatment}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}