import { siteConfig } from "@/lib/content";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}/mirror-selfie.jpg`],
    },
  ];
}