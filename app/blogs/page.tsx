import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "@/components/BlogCard";
import { FileText } from "lucide-react";
import { CircleIcon } from "@/components/CircleIcon";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  category?: string;
  tags?: string[];
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "lib/blogs/posts");
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    
    const posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        
        return {
          slug: filename.replace(".md", ""),
          title: data.title || "Untitled",
          excerpt: data.excerpt || "",
          date: data.date || new Date().toISOString(),
          author: data.author,
          category: data.category,
          tags: data.tags,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary/10 to-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CircleIcon
                color="#06b6d4"
                icon={<FileText className="h-8 w-8" />}
                size={64}
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Επιστημονικά Άρθρα
            </h1>
            <p className="text-lg text-gray-600">
              Ενημερωθείτε για τις τελευταίες εξελίξεις στον τομέα της φυσικής 
              ιατρικής και αποκατάστασης. Διαβάστε άρθρα και οδηγούς για την 
              υγεία και την ευεξία σας.
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="container mx-auto px-4 py-12">
        {posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post, index) => (
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
            
            {/* Categories filter (future enhancement) */}
            {/* <div className="border-t pt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Κατηγορίες
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-primary text-white rounded-full text-sm">
                  Όλα
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                  Θεραπείες
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                  Εκπαίδευση
                </button>
              </div>
            </div> */}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Δεν υπάρχουν διαθέσιμα άρθρα αυτή τη στιγμή.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}