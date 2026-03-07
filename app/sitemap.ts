import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { DOMAIN } from "@/lib/general";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${DOMAIN}`;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const postsDir = path.join(process.cwd(), "lib/blogs/posts");
    const filenames = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
    blogPages = filenames.map((filename) => ({
      url: `${baseUrl}/blogs/${filename.replace(".md", "")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Blog posts directory may not exist
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
