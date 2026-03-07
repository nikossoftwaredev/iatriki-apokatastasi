import { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/general";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${DOMAIN}/sitemap.xml`,
  };
}
