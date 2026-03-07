import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, User, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BasePageProps } from "@/types/pageprops";
import { Metadata } from "next";
import { DOMAIN, BUSINESS_NAME, FULL_NAME, PHONE } from "@/lib/general";

function getBlogPostSync(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "lib/blogs/posts", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return { metadata: data, content };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: BasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostSync(slug);

  if (!post) {
    return { title: "Άρθρο δεν βρέθηκε" };
  }

  const { metadata } = post;
  const title = metadata.title || "Άρθρο";
  const description = metadata.description || metadata.excerpt || `${title} - ${BUSINESS_NAME}`;
  const keywords = metadata.keywords
    ? (Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords)
    : `${metadata.category || ""}, φυσίατρος, αποκατάσταση, ${FULL_NAME}`;

  return {
    title: `${title} | ${BUSINESS_NAME}`,
    description,
    keywords,
    authors: [{ name: metadata.author || FULL_NAME }],
    alternates: {
      canonical: `https://${DOMAIN}/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "el_GR",
      url: `https://${DOMAIN}/blogs/${slug}`,
      siteName: BUSINESS_NAME,
      publishedTime: metadata.date,
      authors: [metadata.author || FULL_NAME],
      images: [{
        url: `https://${DOMAIN}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://${DOMAIN}/images/og-default.png`],
    },
  };
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
  const post = getBlogPostSync(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const readingTime = Math.ceil(content.split(" ").length / 200);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": metadata.description || metadata.excerpt || "",
    "datePublished": metadata.date,
    "author": {
      "@type": "Person",
      "name": metadata.author || FULL_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "url": `https://${DOMAIN}`,
    },
    "url": `https://${DOMAIN}/blogs/${slug}`,
    "image": `https://${DOMAIN}/images/og-default.png`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://${DOMAIN}/blogs/${slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero header */}
      <div className="relative text-white py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 sm:mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Όλα τα Άρθρα
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {metadata.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/80 text-sm">
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-table:overflow-hidden prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 break-words overflow-wrap-anywhere [word-break:break-word]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ alt, ...props }) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      {...props}
                      alt={alt || ""}
                      className="rounded-lg shadow-lg mx-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  ),
                  table: (props) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full divide-y divide-gray-200" {...props} />
                    </div>
                  ),
                  thead: (props) => (
                    <thead className="bg-gray-50" {...props} />
                  ),
                  th: (props) => (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
                  ),
                  td: (props) => (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
                  ),
                  tr: (props) => (
                    <tr className="hover:bg-gray-50" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Χρειάζεστε εξειδικευμένη αντιμετώπιση;
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού ή για περισσότερες πληροφορίες.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Κλείστε Ραντεβού
                </Button>
              </Link>
              <Link href={`tel:+30${PHONE}`}>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  {PHONE.slice(0, 3)} {PHONE.slice(3, 7)} {PHONE.slice(7)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}