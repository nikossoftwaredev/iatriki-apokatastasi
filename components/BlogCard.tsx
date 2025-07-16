"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { CircleIcon } from "@/components/CircleIcon";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  index?: number;
}

export default function BlogCard({ 
  slug, 
  title, 
  excerpt, 
  date,
  readTime = "5 λεπτά",
  index = 0 
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('el-GR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/blogs/${slug}`}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col p-6">
          {/* Date and reading time */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
            {excerpt}
          </p>

          {/* Read more link */}
          <div className="flex items-center text-primary font-medium">
            <span className="text-sm">Διαβάστε περισσότερα</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}