"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CircleIcon } from "@/components/CircleIcon";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  color: string;
  index?: number;
}

export default function ServiceCard({ 
  id, 
  slug,
  title, 
  shortDescription, 
  icon,
  color,
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={       
        `/services/${slug}`
      }>
        <div className={cn(
          "bg-white rounded-xl p-6 shadow-sm border border-gray-100",
          "hover:shadow-lg hover:border-primary/20 transition-all duration-300",
          "h-full flex flex-col"
        )}>
          <div className="mb-4">
            <CircleIcon 
              color={color} 
              icon={icon}
              size={56}
            />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-grow">
            {shortDescription}
          </p>
          
          <div className="flex items-center text-primary font-medium">
            <span className="text-sm">Μάθετε περισσότερα</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}