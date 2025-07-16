import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AppointmentButton from "@/components/AppointmentButton";
import { BasePageProps } from "@/types/pageprops";

async function getBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "lib/blogs/posts", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    
    return {
      metadata: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "lib/blogs/posts");
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }: BasePageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const readingTime = Math.ceil(content.split(" ").length / 200);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-primary/5 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-primary hover:underline mb-8"
            >
              ← Πίσω στα άρθρα
            </Link>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {metadata.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              {metadata.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{metadata.author}</span>
                </div>
              )}
              {metadata.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(metadata.date).toLocaleDateString("el-GR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} λεπτά ανάγνωσης</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}           
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ενδιαφέρεστε για προλοθεραπεία;
            </h3>
            <p className="text-gray-600 mb-6">
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε μια συνάντηση 
              και να συζητήσουμε πώς μπορούμε να σας βοηθήσουμε.
            </p>
            <AppointmentButton size="lg">
              Κλείστε Ραντεβού
            </AppointmentButton>
          </div>
        </div>
      </div>
    </article>
  );
}