"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs/blog-data";

export default function BlogSection() {
  // Show only latest 3 posts on homepage
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Επιστημονικά Άρθρα
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Διαβάστε τα τελευταία άρθρα και ενημερώσεις σχετικά με τις θεραπείες 
            αποκατάστασης και τη διαχείριση του πόνου.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href="/blogs">
              Δείτε όλα τα άρθρα
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}