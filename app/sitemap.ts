import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-23");

  return [
    {
      url: "https://nexiqaglobal.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://nexiqaglobal.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://nexiqaglobal.com/services/web-development",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services/shopify-development",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services/application-development",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services/erp-solutions",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services/ui-ux-design",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/services/support-maintenance",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/industries",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/work",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nexiqaglobal.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://nexiqaglobal.com/book-a-meeting",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}